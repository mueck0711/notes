# 【2026/10/25】きのうのビットコイン

## きのうのニュース

### 🇺🇸 SECのトークン化免除、対象チェーンの線引きに疑問

米SECが設けたトークン化の適用除外をめぐり、どのブロックチェーンが対象になるのかを問う声が市場参加者から上がっています。Crypto in Americaによると、トークン化した株式の取引所を3社が立ち上げる準備を進めています。そのなかで関係者は、免除の条件である「公開型で参加に許可の要らないブロックチェーン」が何を指すのかをSECにはっきりさせるよう求めています。どのチェーンが条件を満たすかによって、トークン化株式をどの基盤で流通させられるかが決まります。公開型チェーン全般が規制上どう扱われるかにも関わる論点で、SECの回答に注目が集まっています。

[出典: Crypto in America](https://www.cryptoinamerica.com/p/secs-tokenization-exemption-sparks)

### 🇺🇸 NY州司法長官、NovaTech運営者に13.7億ドル請求

ニューヨーク州の司法長官が、暗号資産のポンジ・スキームNovaTechの運営者に13億7000万ドルの支払いを命じる判決を出すよう裁判所に求めました。Bitcoin Magazineによると、この運営者は2つの詐欺を続けて行い、投資家から合わせて11億ドルを超える資金をだまし取っていました。州側は被害額に利息を加えて返すよう求めています。暗号資産をうたう投資詐欺に対し、州の当局が大規模な回収に乗り出した例です。請求が認められれば、同じような詐欺を思いとどまらせる効果も期待されます。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/news/ny-seeks-1-37-b-judgement-novatech)

### 🏦 Blockstream、機関向け助言事業を開始・ルガーノに拠点

Blockstreamが機関投資家向けのコンサルティング事業を始め、スイスのルガーノに新しい事務所を開きました。Bitcoin Magazineによると、同社は自社の技術者が持つ知見を、この新拠点から銀行や資産運用会社に提供します。ビットコインの開発企業が製品を売るだけでなく、金融機関がビットコインを扱う際の技術的な助言にも乗り出す形です。伝統的な金融機関がビットコインに関わる場面が広がるなか、技術面の支援を事業にする動きとして注目されます。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/news/blockstream-launches-institutional-service)

### ⛏️ コインベースの署名列から共通の採掘基盤を探る議論

開発者フォーラムのDelving Bitcoinに、同じアドレスへ報酬を支払っている5つのブロックについての投稿がありました。投稿者は、それぞれのコインベース取引のscriptSigに同じバイト列が繰り返し現れていることに気づきました。これが共通の採掘テンプレート生成器や採掘基盤の存在を示すのかどうか、技術的な評価を求めています。ブロックの中身から誰がどの設備で採掘しているかを推定できれば、採掘がどれだけ集中しているかを外から確かめる手がかりになります。ただし現時点では問いかけの段階で、結論は出ていません。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/can-coinbase-scriptsig-patterns-reveal-a-shared-mining-template-generator/2975)

### 🚨 Electrum 4.8.3公開、重大な脆弱性を修正し更新要請

ビットコインウォレットのElectrumが新しい版4.8.3を公開しました。GitHubのリリースノートによると、この版では重大なセキュリティ上の問題を修正しており、すべての利用者に更新を呼びかけています。Stacker Newsでも共有され、注目を集めました。脆弱性の具体的な中身は、今回の候補の情報からは分かりません。ウォレットの重大な欠陥は、利用者の資金の安全に直接関わります。Electrumを使っている人は、手元の版を確かめたうえで早めに更新する必要があります。

[出典: github.com](https://github.com/spesmilo/electrum/blob/master/RELEASE-NOTES)

### ⚡ Core Lightningに告知1つで落ちるDoS、開示

LightningのノードソフトCore Lightning（CLN）のv25.02からv26.04までに、サービス妨害（DoS）を招く不具合があったことが開示されました。もとはnishantbansal2003.github.ioで公開されたもので、議論のためDelving Bitcoinに転載されています。チャネル告知（channel_announcement）の両端node_id_1とnode_id_2に同じノードを指定すると、CLNがクラッシュします。CLNが両端が異なることを確かめていないのが原因で、ゴシップを処理するgossipdで問題が起きます。Lightningのノードは他のノードの告知を受け取るため、細工した告知1つで外から停止させられるおそれがありました。該当する版を使っている運用者は、対応状況を確かめる必要があります。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/cln-self-referential-channel-announcement-dos-disclosure/2974)
