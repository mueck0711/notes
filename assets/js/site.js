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
