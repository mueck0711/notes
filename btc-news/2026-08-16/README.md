# 【2026/08/16】きのうのビットコイン

## きのうのニュース

### 🏦 Tudor、IBIT を10.9万株買い増しコールは85%圧縮

ヘッジファンドの Tudor Investment が提出した2026年第2四半期の13F で、BlackRock のビットコイン現物ETF「IBIT」を109,446株買い増していたことが明らかになりました。一方でコール型の建玉に相当するエクスポージャーは約85%削減しており、オプションで上値だけを取りにいく戦術的な持ち方から、現物ETF をそのまま抱える形へ重心が移ったことになります。同じ規模でも、値動きに賭ける建玉と保有し続ける現物とでは市場に対する意味が違うため、著名ファンドがどちらへ寄せたのかは他の運用者にとっても判断材料になります。

[出典: TFTC](https://www.tftc.io/tudor-investment-ibit-shares-call-reduction-q2-2026-13f)

### 🏦 大手2社 Edelman と Tudor、ビットコイン保有を開示

Bitcoin Magazine が、Edelman Financial と Tudor Investment という2つの大手投資会社が、まとまった規模のビットコイン関連の保有を開示したと伝えました。記事は Mathew Di Salvo が執筆しています。四半期ごとの保有報告は、機関投資家がビットコインをどこまで組み入れているかを外部から確認できる数少ない機会です。運用資産の大きい会社の名前が並ぶこと自体が、現物ETF を通じた保有が例外的な扱いではなくなりつつあることを示します。Tudor については同じ四半期の届け出内容が個別にも報じられており、複数の媒体が同じ開示を追っている状況です。

[出典: Bitcoin Magazine](https://bitcoinmagazine.com/news/edelman-financial-reveals-bitcoin-positio)

### 🏛️ ノルウェーとUAEの政府系ファンド、BTC 保有が過去最高

ノルウェーの政府系ファンド NBIM が、Strategy をはじめとする株式の保有を通じて、ビットコイン換算で過去最高となる11,549BTC 相当を実質的に抱えていることが分かりました。アブダビの Mubadala も BlackRock の IBIT を2024年第4四半期以降、毎四半期買い増しています。いずれのファンドもビットコインを持つこと自体を目的にしていたわけではなく、株式やETF の保有の結果として積み上がっている点が特徴です。国家の運用資金が意図せず露出を増やしている構図は、機関投資家の受け入れ方が別の経路でも進んでいることを示します。

[出典: TFTC](https://www.tftc.io/norway-uae-sovereign-wealth-funds-bitcoin-exposure-record-mstr-ibit)

### ⛏️ ロシア、モスクワの採掘を2032年末まで全面禁止

ロシアのミシュスチン首相が政令第936号に署名し、モスクワ市とモスクワ州、クルスク州の一部で、2026年8月15日から2032年12月31日まで、ビットコインのマイニングとマイニングプールへの参加を全面的に禁止しました。首都圏の送電網におよそ1GW の採掘負荷がかかっていることが理由とされています。禁止の対象は個人の採掘だけでなくプールへの参加も含み、地域内で採掘に関わる行為が広く塞がれます。期限を6年以上先に置いた長期の措置で、電力の逼迫を理由に採掘を地域単位で締め出す動きが規制の型として定着しつつあることを示します。

[出典: TFTC](https://www.tftc.io/russia-moscow-bitcoin-mining-ban-decree-936-2032)

### ⚡ Bitcoin Core の合意コードを zkVM で実行し証明生成

開発者フォーラム Delving Bitcoin に、Bitcoin Core v28 の合意ルール部分のコードをそのまま riscv32im 向けにコンパイルし、RISC0 の zkVM 上で実行して、メインネットのブロックが合意ルール上正しいことを示す STARK 証明を生成したという報告が投稿されました。合意ルールを別の言語で書き直す再実装ではなく、実際に動いている Core のコードを使っている点が要点です。検証の重い処理を証明で置き換える研究は以前からありますが、実装のずれという最大の危険を避けた形で成立させたことになります。

[出典: Delving Bitcoin](https://delvingbitcoin.org/t/running-cores-real-consensus-code-inside-a-zkvm/2811)

### ⚡ Optech、Bitcoin Core 静的バイナリのテスト呼びかけ

Bitcoin Optech の週報が、テスト用に用意された Bitcoin Core の静的バイナリについて、動作確認への協力を呼びかけました。同じ号では、Lightning Network のチャネルを詰まらせる jamming 攻撃を緩和するための契約プロトコルの提案と、Bitcoin Core が接続先ごとに掛けていたトランザクションの流量制限を、ノード全体で一つの上限として扱う方式へ置き換える変更も取り上げられています。いずれも利用者からは見えにくい部分ですが、ソフトウェアの配布と取引の中継という土台に関わる変更です。

[出典: Bitcoin Optech](https://bitcoinops.org/en/newsletters/2026/08/14/#static-bitcoin-core-binaries-available-for-testing)
