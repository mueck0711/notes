# 【2026/10/05】きのうのビットコイン

## きのうのニュース

### 🏦 米SEC、ビットコイン3倍ETFの上場規則変更を承認

米証券取引委員会（SEC）は2026年10月2日、Cboe BZX 取引所が出していた規則変更案を承認しました（リリース番号 34-106577）。対象は 3x Bitcoin ETF のほか、3x Ether ETF、3x Gold ETF、3x Silver ETF、3x Crude Oil ETF、3x Natural Gas ETF の計6本の上場と取引です。現物ETFが定着したあと、値動きの3倍を狙うレバレッジ型まで取引所に並ぶことになり、ビットコインが金や原油と同じ枠で扱われる商品になりつつあることを示しています。短期売買の資金を呼び込む一方で、値動きを増幅させる経路が増える点にも注意が要ります。

[出典: sec.gov](https://www.sec.gov/files/rules/sro/cboebzx/2026/34-106577.pdf)

### 🇺🇸 米地銀団体ICBA、OCCを提訴　BTC企業の信託免許に反対

米独立系地域銀行協会（ICBA）は2026年10月2日、米通貨監督庁（OCC）を提訴しました。2026年3月の規則と解釈書簡1176の無効化を求めています。この2つは、ビットコインやデジタル資産の企業が国法信託銀行の免許を取る道を開いたものです。ICBA は同じ日に、Block の免許申請に反対する書簡も別に出しました。暗号資産企業が銀行の枠組みに入る経路をめぐり、既存の銀行業界が法廷で巻き返しに出た形で、判決次第では各社の免許取得の計画が揺らぎます。

[出典: TFTC](https://www.tftc.io/icba-sues-occ-bitcoin-trust-charter-block-builders-bank)

### 🇯🇵 国税庁が新システムKSK2を稼働　暗号資産の申告漏れ把握へ

国税庁は2026年9月24日、次世代の基幹税務システム KSK2 を正式に稼働させました。これまで税目ごとに分かれていたデータとアプリケーションを集約し、申告されていない暗号資産の把握を強めるのが狙いです。Wu Blockchain がアジアの週間ニュース10選の筆頭に挙げました。暗号資産の分離課税や税制の見直しが議論される一方で、税務当局は現行制度のもとで申告漏れの捕捉を進めています。国内でビットコインを持つ個人にとっては、取引記録と申告の整合がこれまで以上に問われることになります。

[出典: Wu Blockchain](https://wublock.substack.com/p/asias-weekly-top10-crypto-news-japan-262)

### ⛏️ 採掘難易度は0.03%低下でほぼ横ばい　次回は10月18日

ビットコインの採掘難易度が直近の調整で0.03%下がり、ほぼ横ばいで終わりました。次の調整は2026年10月18日の見込みです。ブロックの間隔はいま平均10分48秒と、目標の10分よりやや遅くなっています。ハッシュレートは2025年10月から25%を超えて下がっており、記録に残るなかでも長い下落局面にあります。採算の悪化で採掘能力の一部がネットワークから抜けたとみられ、難易度が下げ止まるかどうかは、採掘業者の体力を測る材料になります。

[出典: news.bitcoin.com](https://news.bitcoin.com/mining/bitcoin-miners-bank-strong-september-as-difficulty-barely-budges)

### ⚡ Delvingで提案　ハッシュ原像をディスクリプタで扱う構文

Delving Bitcoin で、ハッシュの原像をディスクリプタで扱うための構文が提案されました。いまのディスクリプタは pk(WIF/xprv) の形で秘密鍵を持てて、listdescriptors private=true で取り出すこともできます。ところが miniscript のハッシュ断片の秘密（原像）には、これに当たる書き方がありません。提案者は sha256(preimage(HEX)) のような秘密を含む形を足し、hash256・ripemd160・hash160 にも同じ形を用意することを議論にかけています。ハッシュロックを使う財布の情報を、ディスクリプタ1つで丸ごと残せるようになるかが論点です。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/descriptor-syntax-for-hash-preimages/2935)

### ⚡ 耐量子の救済策DropKick、bitcoin-devで議論続く

bitcoin-dev メーリングリストで、DropKick と名付けられた提案をめぐる議論が続いています。提案は、量子計算機の脅威から資金を逃がすための最小限の「救済プロトコル」で、コミット（約束）とリビール（公開）の2段階で動かす方式をうたっています。今回のスレッドには、この提案への返信が寄せられました。量子計算機によって公開鍵から秘密鍵が割り出される事態に、ビットコインがどう備えるかは開発者のあいだで続いている論点です。そのなかで、仕組みをできるだけ小さく保つ案として出されています。

[出典: bitcoin-dev](https://gnusha.org/pi/bitcoindev/MCeBFwbQNl9QpVD5DW7A-tEd3qvg-vnlJ7CrBcZvrCmjtjGleFxGrcQ49oK2rG9vVqGHe4aLhcEuBGseNrj4tym_sl7jWN1JlDc7SKzciTQ=@proton.me/)
