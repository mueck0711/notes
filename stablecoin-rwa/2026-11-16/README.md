# 【2026/11/16】今週のステーブルコイン & RWA

## 今週のニュース

### 🪙 21行がドル建て共同ステーブルコイン「Project Faro」に2.7億ドル

Castle Island の週次回で取り上げられた話題です。Bloomberg が11月10日に報じたところでは、21の金融機関が「Project Faro」に約2億7,000万ドルを拠出します。名前が挙がっているのは Goldman Sachs、Citigroup、Banco Santander、Deutsche Bank で、Wells Fargo、BBVA、UBS、MUFG Bank、Fidelity Investments も加わると伝えられています。拠出金は新設する米国法人の5年分の運営費で、コインの準備金ではありません。目標は2027年前半の米ドル建てステーブルコインの発行です。ただし現時点で最高経営責任者は決まっておらず、トークンも発行されていません。社名は9月1日の声明で「追って発表」とされたままです。これまでの銀行のトークン化は自行の預金に閉じた取り組みが中心でした。複数行が共同で発行体を立てるのは、既存の二強に対抗する試みと言えます。次に注目すべきは経営陣の人選と、どの規制枠組みの下で発行するかです。同じ回では、NYSE が計画中のトークン化株式の取引所に Avalanche を選んだ件も扱われています。

[出典: Castle Island](https://castleisland.vc/weekly-roundup-11-13-26-jensen-exits-nvidia-21-banks-back-project-faro-stablecoin-warren-prepares-her-agenda-mexc-sanctions-violations-vitalik-on-eth-sov-ep-749/) ・ [参考: ledgerinsights.com](https://www.ledgerinsights.com/goldman-citi-ubs-18-others-fund-project-faro-stablecoin-what-is-a-bank-coin-for/)

### 🪙 Tether Gold、KPMG の監査で適正意見

Tether は11月12日、KPMG U.S. が TG Commodities, S.A. de C.V. の2025年度財務諸表の独立監査を終え、無限定適正意見を出したと発表しました。同社は金連動のステーブルコイン Tether Gold（XAU₮）の発行体です。Tether は8月に、USD₮ の発行体 Tether International でも同じく大手4監査法人による監査を終えており、XAU₮ はそれに続く2本目になります。Tether の準備金はこれまで、監査ではなく限定的な保証報告（アテステーション）で開示されてきました。そのため裏付けの透明性に対する批判が繰り返されてきました。今回の監査で、ドル建てに加えてコモディティを裏付けにしたトークンまで、財務諸表の水準で第三者の検証を受けたことになります。金という実物資産をオンチェーンの請求権にする仕組みは、ステーブルコインと RWA の両方にまたがります。今後は、ほかの Tether 系トークンにも監査が広がるかが注目点です。

[出典: Tether](https://tether.io/news/tether-gold-xaut-becomes-tethers-second-stablecoin-to-complete-a-big-four-audit/)

### 🏗️ トークン化株式を担保に USDC を借りる、Ondo Stocks が Solana の Spout に

Ondo は、Solana で始動予定の貸付基盤 Spout Finance が Ondo Stocks を担保に採用すると発表しました。利用者はトークン化された株式や ETF を預け、担保価値の最大50%まで USDC を借りられます。たとえば1万ドル分の担保なら5,000ドルまでです。Spout は借り手から利息を取りません。代わりに、Alpaca の Instant Tokenization Network でトークンを裏付けの株式へ転換し、週次でカバードコールを売ります。そのオプション料が貸し手の利回りになります。借り手は権利行使価格を超える値上がり益をあきらめることになり、コールが行使されると保有するトークンの枚数が減る場合があります。株価が下がって担保が不足すれば、担保は売却されます。Spout は Ondo の生態系を支援する2億5,000万ドルの取り組み「Ondo Catalyst」の対象です。トークン化株式の担保利用が実際に動き出した例で、始動日はまだ示されていません。

[出典: Ondo Finance](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout)

### 🏗️ 銀行はトークン化 MMF も扱うべき、Tempo が3種の即時交換を提案

Tempo の主張の出発点は、ステーブルコインが普及すると法人顧客はステーブルコインを多く持つようになり、トークン化預金の需要も増える、という見立てです。そこへトークン化 MMF を加えれば、銀行は顧客の資金をより広く取り込めます。従来の MMF は日末の残高にしか利回りが付きませんが、一部のトークン化ファンドは秒単位で利回りを按分します。担保の差し入れも、T+1 の三者間方式からオンチェーンでの即時の差し入れに変わります。換金については、流動性供給者と組めば週末でも数分で済みます。商品は3種類に分けられています。登録 MMF（WTGXX・BENJI・JLTXX）、海外の流動性ファンド（BUIDL・USYC・iBENJI）、トークン化ノート（USDY）です。rwa.xyz によると、10月30日時点で上位7本の合計は100億ドルを超えます。銀行がこの交換を担わなければ、顧客は取引所を経由することになり、手数料と残高が外へ流れる、と警告しています。

[出典: Tempo](https://tempo.xyz/blog/why-banks-should-offer-tokenized-money-market-funds/)

### 🔗 Ondo Bridge、Fidelity の FCAT を必須の検証者に

Ondo は11月10日、Ondo Bridge で Ondo Stocks を移転する際に、FCAT の検証ネットワーク（DVN）による確認を必須にしたと発表しました。FCAT は Fidelity Investments のイノベーション部門です。各取引は、FCAT を含む検証者の定足数が確認してから移転先のチェーンで確定します。対象は、HyperEVM へ移す35銘柄と、ほかの対応ネットワーク上にある450超の全銘柄です。Ondo Bridge は2026年2月から、LayerZero を通じて FCAT の DVN をトークン化資産に使ってきました。今回はそれを「任意の1つ」から「欠かせない1つ」へ格上げした形です。トークン化株式の総額は30億ドルを超えています。Fidelity は19.9兆ドルの管理資産を持つと公表しています。チェーンをまたぐ移転はハッキングが集中してきた箇所で、そこに伝統的な金融機関が検証者として入る意味は小さくありません。移転できるのは米国外の適格投資家に限られます。

[出典: Ondo Finance](https://ondo.finance/blog/ondo-bridge-adds-fcat-as-required-verifier)

### 🔗 Spark の USDC 経路を CCTP V2 へ、Sky が7件の変更を提案

Sky のガバナンスフォーラムに、11月19日の実行（spell）に向けた Spark の変更案が出ました。全2部のうち第1部で、Ethereum、OP Mainnet、Unichain、Avalanche、X-Layer の5つのチェーンにまたがる7件の変更を含みます。中心は、Ethereum 上の Spark Liquidity Layer にある流動性管理コントローラを MainnetController v1.11.0 へ上げる変更です。これにより、USDC をチェーン間で移す方法が、すべての経路で Circle の CCTP V1 から CCTP V2 に切り替わります。Spark Liquidity Layer は、Sky の USDS や USDC の流動性を各チェーンへ配る仕組みです。どの移送規格を使うかは、ステーブルコインの供給がチェーン間をどう流れるかに直接かかわります。候補の要約から読み取れるのはここまでで、ほかのチェーン向けの変更内容と実行の可否は、今後の投票で確定します。

[出典: Sky Governance](https://forum.skyeco.com/t/november-19-2026-proposed-changes-to-spark-for-upcoming-spell/28390)

### 🏛️ ユーロ圏の消費者の5%がステーブルコインを保有、ECB が初の実態調査

ECB の経済報告に載った分析で、データは消費者期待調査（ユーロ圏の大きい11か国）です。暗号資産の保有率は2024年11月の9.8%から2025年8月には13%へ上がり、ステーブルコインの保有者は消費者の5%に達しました。保有額は少額に偏りますが、2025年11月時点で保有者の1割近くが1万ユーロ以上を持つと推計されています。暗号資産の保有者に占める割合は USDT が17%、USDC が12%、ユーロ建ての EURC が10%で、ドル建てが優勢です。外国生まれの回答者は保有率が2.1ポイント高く、国際送金に使われている可能性を示唆しています。ただし予備的な証拠にとどまります。現時点では銀行の資金調達への影響は小さいと結論づけています。一方で、普及が進んだ場合の脆弱性として、取り付けと脱ペッグ、ドル建て準備金の売却の波及、通貨代替の3点を挙げました。MiCA がこれらのリスクの多くを抑えているとし、継続的な監視を求めています。

[出典: ECB 刊行物](https://www.ecb.europa.eu//press/economic-bulletin/focus/2026/html/ecb.ebbox202607_08~f4ddf0117c.en.html)

### 🏛️ デジタルユーロ法案の年内成立を要請、ECB のチポローネ理事

ECB のピエロ・チポローネ専務理事は11月10日、欧州議会の経済金融委員会で演説しました。デジタルユーロと現金の両方を法律で担保すべきだとし、三者協議を急いで単一通貨パッケージを2026年内に採択するよう求めています。欧州議会の本会議は7月9日に自らの立場を可決済みです。試験運用は2027年後半に始まり、法定通貨の地位を持たないベータ版を使います。決済事業者は50超の応募から36社を選びました。オンライン加盟店は2027年初めに選定する予定です。トークン化の観点で目を引くのは Pontes です。市場の DLT 基盤を ECB の決済システム TARGET につなぐ仕組みで、9月に18の参加者で始動し、11月2日には欧州安定メカニズム（ESM）の、初めからデジタルで発行された10億ユーロの指標債の決済を行いました。演説はステーブルコインに触れていません。それでも、民間のドル建てステーブルコインに対抗する公的な選択肢の工程表として読めます。

[出典: ECB](https://www.ecb.europa.eu//press/key/date/2026/html/ecb.sp261110~9422461bad.en.html) ・ [参考: ecb.europa.eu](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp261110~9422461bad.en.html)
