# 【2026/11/03】きのうのビットコイン

## きのうのニュース

### 📈 Bitwiseのドラゴッシュ氏、BTC適正価値19.7万ドル

Bitwiseのアンドレ・ドラゴッシュ氏がBitcoin Magazineの動画に出演し、同氏のモデルが示すビットコインの「適正価値」は19万7000ドルだと語りました。ビットコインを流動性の変化をいち早く映す「炭鉱のカナリア」と位置づけ、米連邦準備制度の政策転換や景気後退の懸念、貴金属からの資金移動にも触れています。相場が8万ドルを割り込んで弱含むなか、大手運用会社の調査責任者が現値の2倍超を適正水準とみている点で、強気の見立ての根拠を確かめる材料になります。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/videos/bitwises-andre-dragosch-bitcoins-fair-value-of-197000)

### 🏦 アダム・バック氏「年金基金は普及の第三の波」

Blockstreamのアダム・バック氏がBitcoin Magazineの動画で、ビットコイン普及の「第三の波」はまだ来ていないと語りました。同氏のいう第三の波とは、年金基金や運用ファンド、モデルポートフォリオによる組み入れのことで、スイスの銀行がすでにその受け入れ準備を進めているとも述べています。ETFを通じた資金流入の次に、長期の大口資金がどの経路でビットコインに入ってくるのかを示す見立てで、機関投資家の採用がまだ途中の段階にあるという認識を示した発言です。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/videos/adam-back-pension-funds-are-bitcoins-third-wave-of-adoption)

### 🏢 Strategyが811BTC追加、Striveも124BTC買い増し

Strategyは週次の8-Kで、10月26日から11月1日の間に811BTCを6550万ドルで買い増したと開示しました。保有量は84万9327BTCになります。Strive（ASST）も同じ週に124BTCを追加し、2社で合わせて935BTCを積み増しました。Binanceのハッキングを受けてビットコインが週間で3.6%下げた局面でも、財務にビットコインを積む企業が買いを止めていないことを示す動きです。下落局面での企業の買い姿勢は、相場の下支え要因として注目されます。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/news/strategy-mstr-adds-811-bitcoin-strive-too)

### 🐋 北朝鮮、Binance盗難資金を25秒に1財布で洗浄

Binanceから盗まれた64億3000万ドルのうち、28億5000万ドルが凍結または押収されたことが分かりました。Bybitのハッキングでは回収が約3%にとどまったのに比べ、大幅に高い水準です。一方で北朝鮮側は自動化された資金洗浄を続けており、25秒ごとに新しいウォレットを作り、その数は1万2000に及んでいます。史上最大規模の盗難で、資金の追跡と凍結がどこまで効くかを測る事例になっています。

[出典: Decrypt](https://decrypt.co/382355/north-korea-laundering-binance-hack-loot-new-wallet-every-25-seconds)

### 🚨 ブラジル最大手Mercado Bitcoinにハッキング

ブラジルの暗号資産取引所Mercado Bitcoinは11月2日、サイバー攻撃を受けて入出金をすべて停止しました。攻撃は少なくとも10のブロックチェーンにまたがってウォレットから資金を抜き取ったもので、セキュリティ企業Hypernativeは不審な流出を4000万ドル超と見積もっています。取引所は顧客資金の損失は無いと説明していますが、出金の停止は続いています。Binanceのハッキングから日を置かずに起きた大手取引所の被害で、取引所の資産管理に改めて疑問が向けられています。

[出典: TFTC](https://www.tftc.io/mercado-bitcoin-hack-10-chains-40m-suspicious-outflows)

### 🚨 BTCPay Server、旧版狙う攻撃で緊急の注意喚起

決済ソフトのBTCPay Serverがセキュリティ勧告を出しました。インシデント対応の調査で、2026年7月23日公開のバージョン2.4.1以前で動いているサーバーを狙う攻撃手口が見つかったといいます。最新の2.4.7を使っている利用者からホットウォレットが抜き取られたという信頼できる報告は無く、開発チームは改めて全利用者に更新を呼びかけています。ビットコイン決済を自分で運用する事業者が広く使うソフトなので、旧版のまま放置しているサーバーには直接の危険があります。

[出典: x.com](https://x.com/BtcpayServer/status/2117106238123123008)

### ⚡ satd、OP_RETURNデータの完全な刈り込みに対応

ビットコインのノード実装satdが、OP_RETURNの値を丸ごと刈り込めるオプションを初めて実装しました。-pruneopreturn=Nで最新ブロックから何ブロック遡った分を消すかを指定し、NODE_NETWORK_LIMITEDの保証に合わせて最小値は288です。-pruneopreturnsize=Xで対象にする値の大きさ（バイト）も決められます。OP_RETURNへのデータ書き込みをめぐる議論が続くなか、ノード運用者が保存する中身を自分で選べるようにする試みとして注目されます。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/full-op-return-value-pruning/3026)

### ⚡ BIP340一括検証の128ビット化、機械検証で健全性確認

sipa/bipsの#219と#222は、BIP340（シュノア署名）の一括検証に使う乱数を256ビットから128ビットに縮める提案で、libsecp256k1の一括検証が最大で約9%速くなります。紙の上の証明では乱数を互いに独立な一様値として扱っていますが、実装では決定的に導出しています。Delving Bitcoinへの投稿は、この導出した乱数を使っても安全性が保たれることを機械で検証したものです。署名検証の高速化は、ノードがブロックを検証する速さに直結します。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/machine-checked-soundness-of-bip340-batch-verification-with-128-bit-derived-randomizers/3019)
