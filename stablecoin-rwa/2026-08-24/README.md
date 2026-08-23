# 【2026/08/24】今週のステーブルコイン & RWA

## 今週のニュース

### 🏛️ FASB、ステーブルコインを現金同等物とする会計基準案

米 FASB が8月18日、「Statement of Cash Flows（Topic 230）: Cash Equivalents」の改訂案を公表しました。現金同等物の定義そのものは変えず、どの電子的資産がそこに当たるかを例示で明確にする作りです。要件は3つ——多額の手数料や制限なく発行体から現金で償還を受けられる契約上の権利、既知の金額への換金可能性、そして残存3か月以内の国債と現金という低リスク資産で1対1以上に積まれた準備。加えて現金同等物の主要な構成要素と金額の開示を求めます。これまでステーブルコインは現金同等物に当たるかが基準上示されておらず、暗号資産としての評価に寄せて扱われてきました。事業会社が手元資金として持てるかどうかは会計上の分類で決まるため、準備の質を要件に組み込んだ今回の案は発行体側の準備金運用にも跳ね返ります。意見募集は11月19日まで。Castle Island のこの回は、ほかに SEC の Reg Crypto 提案、Tether の大手監査法人による監査完了、World Liberty の OCC 認可も扱っています。

[出典: Castle Island](https://castleisland.vc/weekly-roundup-08-21-26-salt-wyoming-secs-reg-crypto-tethers-big-4-audit-crypto-privateers-ep-735/) ・ [参考: acrosstheboard.mayerbrown.com](https://acrosstheboard.mayerbrown.com/2026/08/fasb-proposes-new-guidance-on-stablecoin-classification-as-cash-equivalents-and-enhanced-disclosure-requirements/)

### 🏗️ 高利回り債のトークン化ファンド、Aave の担保に上場提案

Securitize が8月18日、Neuberger Securitize High Income Tokenized Fund のトークン化受益権 HINC を、Aave Horizon（Ethereum）へ供給専用の担保として上場する提案を出しました。ハイイールド社債・CLO のトランシェ・バンクローンに投資し、流動性のための現金枠を持つ単層のファンドで、運用助言は Securitize Capital、副助言は3月末時点で約5670億ドルを運用する Neuberger Berman です。これを担保に借りられるのは USDC・GHO・RLUSD の3種。Aave Horizon はトークン化ファンドを担保にステーブルコインを借りる用途に絞ったインスタンスで、そこへ大手運用会社の高利回り商品が加わることになります。ファンド自体は8月18日設定で運用実績がなく、提案は清算閾値を具体的な数値ではなく考え方として示しました——清算閾値は評価額の変動に対して、貸倒れ見込みは資産の毀損に対して設定し、清算余力はストレス下で借入残高の3〜5%を目安にする、というものです。今後は意見募集、技術評価とオラクルの決定、LlamaRisk によるリスク評価、清算人の受け入れを経て Snapshot 投票と最終の AIP へ進みます。

[出典: Aave Governance](https://governance.aave.com/t/arfc-onboard-hinc-neuberger-securitize-high-income-tokenized-fund-to-aave-horizon/25500)

### 🪙 SparkLend に USDG と RLUSD、借入専用で上場へ

Spark のガバナンスに、Paxos の USDG（Global Dollar）と RLUSD を SparkLend へ上場し、あわせて Spark Liquidity Layer にも組み込む提案が出ました。実行は8月27日の spell です。両者とも扱いは同じで、LTV・清算閾値をともに0%に置いた借入専用の資産——供給・借入の上限は設けず（既存の PYUSD と同じ扱い）、リザーブファクターと清算プロトコル手数料は各10%、最適利用率95%、フラッシュローンは有効、固定金利での借入は無効です。金利は Sky Savings Rate に連動し、可変スロープ1は0.3%と PYUSD の2%より低く抑えています。Liquidity Layer 側の入出金上限は資産あたり日次1億で、引き出しに上限はありません。提案の理由として、USDG はステーブルコインの為替層構想に沿う品揃えの拡張、RLUSD は Standard Custody が NYDFS の監督下で発行し、供給17.2億ドルの約半分が Ethereum 上にあることが挙げられています。担保にはできないので裏付けの構成は動きませんが、SparkLend が USDS・USDC 以外のドル建てを調達できる場所になります。

[出典: Sky Governance](https://forum.skyeco.com/t/august-27-2026-proposed-changes-to-spark-for-upcoming-spell/28181)

### 🪙 Spark のリスク評議会廃止案、機能は既存主体へ再配分

Phoenix Labs が入れ子の貢献者という立場で、Spark のリスク評議会（SRC）を廃止する提案 SAEP-19 を出しました。8月17日に Operational Facilitator と SRC 自身の承認を得て同日 Snapshot に載り、標準の3日間の投票に入っています。3人構成の SRC は、Root Edit 提案の事前リスク審査（投票へ進ませない権限を含む）、デリゲートの緊急解任と資格剥奪の投票、鍵が漏洩した際の対応、取り消し事由となる過大なリスクの指摘、非公開のデプロイ開示の受領を担ってきました。廃止案では、審査の関門は既に整合性の確認をしている Operational Facilitator へ、デリゲート関連と鍵の漏洩対応は本人確認を扱う Spark Foundation へ、取り消し事由の指摘は条項に名前のある Sky Core Council へ、非公開のレビューは異議申立ての権利を持つ Sky エコシステムの指名レビュアーへ、それぞれ移ります。提案側の説明は、SRC の審査が既存の仕組みと重複しており、下流の Executor Agent による点検も Sky Atlas 側の安全策も残る、というもの。統治の周期が短くなり報酬の負担も消えますが、実物資産とステーブルコインを担保に抱える貸付市場で、独立した事前審査の一段が外れることにもなります。

[出典: Sky Governance](https://forum.skyeco.com/t/saep-19-remove-the-spark-risk-council/28180)

### 💳 新興国の労働者の57%、ステーブルコイン受取に前向き

Stripe が、20か国2,300人超の独立就労者に聞いたステーブルコイン受取の調査を公表しました。プラットフォームが対応すれば受け取ると答えたのは57%で、意向が最も高いのは中東の69%。それに対し新興国で実際に受け取っているのは18%にとどまり、需要と提供のあいだに開きがあります。理由として挙がったのは既存の越境送金の手数料と着金の遅さで、地域によって動機が違うのも特徴です——中南米では3分の1がアルゼンチンやコロンビアのような自国通貨の下落への備えを挙げ、中東では53%が送金コストと速度の改善を評価しました。サブサハラ・アフリカは72%がデジタルウォレットで受け取っており、38%が主な用途に「支払いの受取」を挙げています。要望として最も多かったのはプラットフォーム残高に利回りが付くこと（70%）、次いで使い方の教育（53%）でした。DoorDash・Deel・Ramp・Meta は既に対応済みで、調査は決済事業者が対応を広げる根拠として出されたものです。利回りへの要望が最上位に来た点は、受取手段としての採用が残高の置き場の話にまで及んでいることを示します。

[出典: Stripe](https://stripe.com/blog/why-global-workers-are-driving-demand-for-stablecoin-payouts)
