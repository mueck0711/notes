---
title: ヨーロッパの暗号通貨規制MiCAとは
description: EU が世界に先駆けて作った暗号資産の包括規制について、三層構造の分類から2026年7月の完全施行、ステーブルコイン市場の再編、MiCA 2.0 の論点までを整理する。
date: 2026-08-01
category: 暗号資産規制
status: done
tags: [MiCA, EU, ステーブルコイン]
---

# ヨーロッパの暗号通貨規制MiCAとは

MiCA（Markets in Crypto-Assets Regulation）は、加盟国ごとにばらばらだった暗号資産のルールを27カ国共通の一つの枠組みに置き換えた、**包括的な単一規制**です。
2023年6月に発効した EU 規則（Regulation 2023/1114）を指します。
米国が SEC と CFTC の管轄争いと訴訟を通じて「判例の積み上げ」で規制を作ってきたのと対照的に、EU は最初から立法で網を張っています。

その経過措置が2026年7月1日に切れました。
未認可の事業者は EU で営業できなくなり、時価総額最大のステーブルコインである USDT は域内の主要取引所から姿を消しています。
この規則が何を定め、完全施行の後に何が残ったのかを整理します。

## 三層構造の分類

MiCA は暗号資産を大きく3つに分けて、リスクに応じて義務の重さを変えています。

1. **ART（資産参照型トークン）**：複数の資産バスケットや商品を参照するトークン。
   かつての Libra や Diem を念頭に置いた最重量級の規制で、発行には認可、自己資本、準備資産の分別管理が要求されます。
   実際、規制が重すぎて2026年第1四半期時点で**認可された ART はゼロ**という状況です。
2. **EMT（電子マネートークン）**：単一の法定通貨に連動するステーブルコイン（USDC や EURC など）。
   電子マネー機関または銀行の免許が必要で、準備資産の1対1の裏付けと、保有者の常時償還権が義務づけられます。
   EU 域内で決済手段として大規模に流通する場合は、取引量の制限も掛かります。
3. **その他の暗号資産**：BTC や ETH を含む残余カテゴリ。
   発行体には White Paper（開示文書）の作成と届出の義務がありますが、BTC のように発行体が特定できないものは、事実上、取引サービス側の規制で捕捉されます。

これに加えて、取引所やカストディ、ブローカレッジなどのサービス提供者は **CASP（Crypto-Asset Service Provider）** として認可が必要になります。
一国で認可を取れば EU 全域で営業できる「**パスポーティング**」が最大の飴で、インサイダー取引と相場操縦の禁止（市場濫用規制の暗号資産版）が鞭です。

## 段階施行と2026年7月1日の期限

MiCA は段階的に施行されました。
ステーブルコイン規制（ART と EMT）が2024年6月末、CASP 規制が2024年12月末に適用開始です。
ただし既存業者には各国の裁量で最長18カ月の**経過措置**（grandfathering）が認められ、フランスやマルタはこれをフルに使いました。
その期限が2026年7月1日で、ここで初めて MiCA が27カ国で完全に効力を持ったことになります。
未認可の CASP は EU での営業ができません。

## ステーブルコイン市場の再編

一番目に見える結果はステーブルコインでした。
時価総額最大の **USDT（Tether）は EMT 認可を申請せず**、Coinbase や Binance は EEA ユーザー向けに USDT を含む非準拠ステーブルコインを順次上場廃止しました。
結果として **Circle（USDC と EURC）が MiCA 準拠の事実上の標準**の座を取り、1,800億ドルを超える市場の EU 部分が強制的に塗り替えられた形です。
2026年第1四半期時点で認可された EMT は19銘柄と報告されています。

## 見直し条項と MiCA 2.0

MiCA には見直し条項があり、現行法が扱っていない DeFi、NFT、レンディング、ステーキングについて、欧州委員会が報告する義務を負っています。
2025年12月には、システミックに重要な CASP を **ESMA（欧州証券市場監督機構）が直接監督する**集中監督案が提示されました。
2026年5月には、DeFi をライセンス制の射程に入れる可能性を含む「MiCA 2.0」のコンサルテーションが始まっています。
意見募集の締切は2026年8月31日、つまり今月末です。
CASP に「接続先の DeFi プロトコルのデューデリジェンス」を負わせるゲートキーパー型の枠組みが、目下の論争点です。

---

## MiCAの本質と施行結果

**① MiCA の本質**：「暗号資産の規制」ではなく「EU 型市場統合の輸出」
中身をよく見ると、MiFID II（証券）や EMD（電子マネー）の既存の枠組みを暗号資産に写像したもので、発明はほとんどありません。
発明したのは**順序**です。
ルールを先に固めたうえで、認可の一本化（パスポート）を餌にする。
GDPR と同じ「ブリュッセル効果」を狙ったもので、実際に英国、UAE、香港、日本の制度設計が MiCA を参照点にし始めている点では成功しています。

**② 規制の勝者と市場の勝者のずれ**：USDC が標準の座を取っても、流動性の中心は USDT のまま
USDT を締め出して USDC を標準にしたのは、消費者保護としては筋が通っています。
ただしグローバルの流動性の中心は依然として USDT です。
EU のトレーダーは域外プラットフォームか P2P へ流れる誘因を持ち続けるので、規制の実効性は「域外アクセスをどこまで遮断できるか」という別のゲームに依存します。
ここは GDPR より難しいはずです。
データと違って、流動性は摩擦の低い方へ即座に動くからです。

**③ ART（資産参照型トークン）がゼロ件であること**：規制の失敗ではなく設計意図の達成
ART 規制は Libra 型の「民間バスケット通貨」を潰すために作られた抑止条項で、使われないことが成功条件でした。
ただし副作用として、通貨バスケット型のまっとうな金融イノベーションも EU では生まれない、という選択を静かにしたことになります。

**④ 最大の弱点**：DeFi の「完全に分散していれば適用外」という線引き
十分に分散化していれば MiCA の外、という原則は、実務上は「分散化を装う競争」を生みます。
MiCA 2.0 がここに手を入れようとしているのは必然でしょう。
ただし CASP をゲートキーパーにする案は、規制できない対象の責任を規制できる対象へ転嫁する構図で、EU 域内 CASP の競争力をさらに削る危険があります。
欧州委員会自身が「DeFi 除外が活動の域外流出を招いた」と認めているのに、その解決策がさらなる域内負担の上乗せになりかねません。
ここが今後1〜2年の最大の見どころだと思います。

## 日本と米国から見たMiCA

**⑤ 日本との違い**：骨格は相似で、違いはスケール
日本は資金決済法と金商法の改正でステーブルコインと交換業を先に整備しており、「発行体規制＋仲介者規制」という骨格は実は MiCA と相似です。
違いはスケールで、MiCA は一枚の認可で4.5億人の市場に届きます。
日本の制度が孤立せず MiCA と相互運用的になるか（準拠発行体の相互参入など）が、円建てステーブルコインの実用性を左右するはずです。

**⑥ 米国との違い**：一本の規則で網を張る EU と、道具ごとに法を切り出す米国
米国はステーブルコインだけを先に切り出し、2025年7月に成立した GENIUS 法で連邦の発行体規制を作りました。
市場構造（SEC と CFTC の管轄配分）を扱う CLARITY 法案のほうは、まだ成立していません。
つまり米国では、MiCA が一本で担う「発行体規制」と「仲介者規制」が、成立済みの法と係属中の法案に分かれたままです。
EU が法を先に置いて市場を作り替えたのに対し、米国は育った市場に後から法を合わせているので、規制は既存プレイヤーの追認になりやすくなります。
どちらが優れているかという話ではありません。
自国のルールを他国に真似させる力、①で書いたブリュッセル効果が働くのは、法を先に置いた側だけです。

## 三極で進む制度化

EU が MiCA を完全施行し、米国は GENIUS 法を成立させて CLARITY 法案を審議し、日本は資金決済法と金商法の改正を先に済ませました。
数年前まで、暗号資産の事業者にとって最大のリスクは価格の変動ではなく、明日どの当局に何を言われるか分からないことでした。
三極がそれぞれ枠組みを固めたことで、その不確実性の質が変わります。
禁止されるのか許されるのか分からない状態から、何を満たせば営業できるかが書かれた状態へ移ったからです。

規制の明確化は産業の発展につながります。
規制の内容が読めれば、事業者はコンプライアンスの費用を見積もれるようになり、銀行や機関投資家は取引相手として扱えるようになります。
参入の判断が、当局の裁量の予測から、要件を満たせるかどうかの計算に変わるわけです。
ルールが書かれたことで、暗号資産は投機の対象から、費用と要件を見積もって臨む事業の対象へ移りつつあります。

## 出典

- [Markets in Crypto-Assets — Wikipedia](https://en.wikipedia.org/wiki/Markets_in_Crypto-Assets)
- [MiCA Regulation and EU Crypto Rules: What Changes in 2026 — Sumsub](https://sumsub.com/blog/crypto-regulations-in-the-european-union-markets-in-crypto-assets-mica/)
- [Markets in Crypto-Assets Regulation (MiCA) Updated Guide (2026) — InnReg](https://www.innreg.com/blog/mica-regulation-guide)
- [MiCA Regulation: What Crypto Projects Must Know For 2026 Compliance — Hacken](https://hacken.io/discover/mica-regulation/)
- [EUのMiCA完全施行、テザーがUSDT撤退 — BigGo ファイナンス](https://finance.biggo.jp/news/ec29fcae-f732-4a20-a8c1-acf82a9c7068)
- [バイナンス、MiCA非準拠の「USDT」などステーブルコイン9種をEEAで上場廃止 — Yahoo!ニュース](https://news.yahoo.co.jp/articles/e7b63a47e5e42f1bf72461899deb56cbcc272c55)
- [コインベース、欧州でのMiCA準拠に伴いUSDTなど主要ステーブルコインを上場廃止へ — CRYPTO TIMES](https://crypto-times.jp/news-coinbase-mica-usdt/)
- [MiCA Q1 2026: EU Stablecoin Compliance – 19 EMT, 0 ARTs — The Future of Money](https://thefutureofmoney.substack.com/p/mica-regulation-2026-complete-casp)
- [What Regulatory Gaps is MiCA 2.0 Designed to Address — Kavout](https://www.kavout.com/market-lens/what-regulatory-gaps-is-mica-2-0-designed-to-address)
- [MiCA Explained (2026): EU Crypto Rules After July 1 — Tech Insider](https://tech-insider.org/mica-regulation-explained/)
- [Senate Republicans Release Updated Crypto Market Structure Text — Davis Wright Tremaine](https://www.dwt.com/blogs/financial-services-law-advisor/2026/07/senate-updates-crypto-market-bill)
- [CLARITY Act Update: Where the Crypto Market Structure Bill Stands Right Now — Disruption Banking](https://www.disruptionbanking.com/2026/07/31/clarity-act-update-where-the-crypto-market-structure-bill-stands-right-now/)
- [GENIUS Act Implementation: OCC Issues Proposed Rules — Sullivan & Cromwell](https://www.sullcrom.com/insights/memo/2026/March/OCC-Proposes-Regulations-Implement-GENIUS-Act)
