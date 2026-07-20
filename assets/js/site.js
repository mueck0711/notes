/* notes — Chirpy 風の挙動。本家は tocbot などに依存するが、ここは素の JS で足りる範囲に留める。 */
(function () {
  'use strict';

  var content = document.querySelector('.post-content');

  /* ---------- サイドバーの引き出し（狭い画面） ---------- */
  var sidebar = document.getElementById('sidebar');
  var trigger = document.getElementById('sidebar-trigger');
  var mask = document.getElementById('sidebar-mask');
  function closeSidebar() {
    sidebar.classList.remove('show');
    mask.classList.remove('show');
  }
  if (trigger) {
    trigger.addEventListener('click', function () {
      sidebar.classList.toggle('show');
      mask.classList.toggle('show');
    });
  }
  if (mask) mask.addEventListener('click', closeSidebar);

  /* ---------- 上に戻る ---------- */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener(
      'scroll',
      function () {
        backToTop.classList.toggle('show', window.scrollY > 400);
      },
      { passive: true }
    );
  }

  if (!content) return;

  /* ---------- 図版: alt をキャプションにする ----------
   * レポートの図は ![説明](price.png) の形で、alt に説明が入っている。
   * Chirpy 本家はキャプション用の段落を別に書かせるが、こちらは記事側に
   * 手を入れられない（BMA が生成する）ので alt を流用する。 */
  Array.prototype.forEach.call(content.querySelectorAll('img'), function (img) {
    if (img.closest('figure') || img.closest('a')) return;
    var fig = document.createElement('figure');
    img.parentNode.insertBefore(fig, img);
    fig.appendChild(img);
    if (img.alt) {
      var cap = document.createElement('figcaption');
      cap.textContent = img.alt;
      fig.appendChild(cap);
    }
    // 画像だけが入っていた空の <p> を畳む。
    var p = fig.parentNode;
    if (p && p.tagName === 'P' && !p.textContent.trim()) {
      p.parentNode.insertBefore(fig, p);
      p.parentNode.removeChild(p);
    }
  });

  /* ---------- 表: 横スクロールできる箱に入れる ---------- */
  Array.prototype.forEach.call(content.querySelectorAll('table'), function (table) {
    if (table.closest('.table-wrapper')) return;
    var wrap = document.createElement('div');
    wrap.className = 'table-wrapper';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });

  /* ---------- YouTube: 単独の段落を動画枠にする ----------
   * 本文に URL を1行置くだけで埋め込みになる。記事側に HTML や front matter を
   * 要求しない（→ adr/0002）ので、判定はここでやる。
   * 置き換えるのは「段落が YouTube リンク1本だけ」のときに限る。文中のリンクや
   * 末尾の出典リストは通常のリンクのまま残す。 */
  var YT_ID = /^[A-Za-z0-9_-]{11}$/;

  // URL から動画 ID を取り出す。YouTube でない/形が合わなければ null。
  function youtubeId(url) {
    var u;
    try {
      u = new URL(url, location.href);
    } catch (e) {
      return null;
    }
    var host = u.hostname.replace(/^www\./, '');
    var id = null;
    if (host === 'youtu.be') {
      id = u.pathname.slice(1);
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else {
        var m = u.pathname.match(/^\/(?:embed|live|shorts|v)\/([^/]+)/);
        if (m) id = m[1];
      }
    }
    return id && YT_ID.test(id) ? id : null;
  }

  // t=90 / t=1m30s / start=90 を秒に直す。無ければ 0。
  function startSeconds(url) {
    var u;
    try {
      u = new URL(url, location.href);
    } catch (e) {
      return 0;
    }
    var t = u.searchParams.get('t') || u.searchParams.get('start');
    if (!t) return 0;
    if (/^\d+$/.test(t)) return parseInt(t, 10);
    var m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
    if (!m || (!m[1] && !m[2] && !m[3])) return 0;
    return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
  }

  Array.prototype.forEach.call(content.querySelectorAll('p'), function (p) {
    if (p.closest('figure')) return;

    // ① 段落が <a> 1つだけ ② <a> 無しで本文全体が URL、の両方を拾う
    // （kramdown が裸 URL をリンクにするとは限らないため）。
    var text = (p.textContent || '').trim();
    var links = p.querySelectorAll('a');
    var url, caption;
    if (links.length === 1) {
      var label = (links[0].textContent || '').trim();
      // 段落の文字がリンクのテキストと丸ごと一致するときだけ「単独」とみなす。
      // 前後に地の文があれば文中リンクなので触らない。
      if (text !== label) return;
      url = links[0].getAttribute('href');
      caption = label && label !== url ? label : '';
    } else if (links.length === 0 && !/\s/.test(text)) {
      url = text;
      caption = '';
    } else {
      return;
    }

    var id = youtubeId(url);
    if (!id) return; // YouTube でない・ID の形が合わない → 素通し

    var src = new URL('https://www.youtube-nocookie.com/embed/' + id);
    var start = startSeconds(url);
    if (start) src.searchParams.set('start', String(start));

    var iframe = document.createElement('iframe');
    iframe.src = src.href;
    iframe.title = 'YouTube video player';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    var fig = document.createElement('figure');
    fig.className = 'video-embed';
    fig.appendChild(iframe);
    if (caption) {
      var cap = document.createElement('figcaption');
      cap.textContent = caption;
      fig.appendChild(cap);
    }
    p.parentNode.replaceChild(fig, p);
  });

  /* ---------- 目次 ----------
   * kramdown の auto_ids は日本語見出しから id を作れず空になることがあるので、
   * 無ければこちらで振る。 */
  var toc = document.getElementById('toc');
  var panel = document.getElementById('panel-wrapper');
  if (!toc || !panel) return;

  var headings = Array.prototype.slice.call(content.querySelectorAll('h2, h3'));
  if (headings.length < 2) {
    panel.classList.add('empty');
    return;
  }

  var list = document.createElement('ul');
  var links = [];
  var used = {};

  headings.forEach(function (h, i) {
    if (!h.id) {
      var base = (h.textContent || '').trim().replace(/\s+/g, '-').slice(0, 32) || 'section';
      var id = base;
      var n = 1;
      while (used[id] || document.getElementById(id)) id = base + '-' + n++;
      h.id = id;
    }
    used[h.id] = true;

    var li = document.createElement('li');
    li.className = 'toc-' + h.tagName.toLowerCase();
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = (h.textContent || '').trim();
    li.appendChild(a);
    list.appendChild(li);
    links.push({ a: a, h: h });

    // 見出しホバーで出るアンカー。
    var anchor = document.createElement('a');
    anchor.className = 'anchor';
    anchor.href = '#' + h.id;
    anchor.textContent = '#';
    anchor.setAttribute('aria-label', 'この見出しへのリンク');
    h.appendChild(anchor);
  });

  toc.appendChild(list);

  /* ---------- 目次のスクロール追従 ---------- */
  var current = null;
  function spy() {
    var pos = window.scrollY + 100;
    var active = links[0];
    for (var i = 0; i < links.length; i++) {
      if (links[i].h.offsetTop <= pos) active = links[i];
      else break;
    }
    if (active === current) return;
    if (current) current.a.classList.remove('active');
    active.a.classList.add('active');
    current = active;
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();
})();
