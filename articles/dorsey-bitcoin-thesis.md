---
title: Jack Dorsey は何を主張してきたか
description: 2018年の「インターネットは単一の通貨を持つ」から、Web3 批判とステーブルコインへの譲歩、Twitter が会社になったことへの後悔と Nostr、「価値保存だけなら無関係化して失敗する」という決済論、採掘の分散とエネルギー、Bitkey と信託銀行の申請、100万ドル予想、2026年の人員削減まで。本人の発言と Block の実装を引きながら通して読む。
date: 2026-09-16
category: ビットコイン論
status: done
tags: [bitcoin, Jack Dorsey, Block, Nostr, Lightning, 決済]
---

# Jack Dorsey は何を主張してきたか

Jack Dorsey は、ビットコインを論じるより先に、ビットコインを使う道具を作ってきた経営者です。
1976年にミズーリ州セントルイスに生まれ、Twitter を共同創業して2007年から2008年と2015年から2021年の二度 CEO を務め、2009年には Jim McKelvey と決済会社 Square を作りました[^1]。
2021年11月29日に Twitter の CEO を退き、その二日後の12月1日に Square は社名を Block に改めます[^1][^2]。
Cash App、Square、Bitkey、Proto、Spiral という Block の事業はどれもビットコインに触れており、本人は個人資産からもビットコインと Nostr の開発者に寄付を続けています。
[Saifedean Ammous](https://bitcoin-economics.org/articles/ammous-bitcoin-thesis.html) が貨幣史から、[Lyn Alden](https://bitcoin-economics.org/articles/lyn-alden-bitcoin-thesis.html) がマクロと技術史からビットコインを説明したのに対して、Dorsey の出発点は貨幣ではなくインターネットです。
彼の主張は2018年からほとんど変わっておらず、変わったのはそれを実現する手段の方でした。

## インターネットのネイティブ通貨

Dorsey がビットコインについて最初に広く引用された発言は、2018年3月の The Times のインタビューです。
「世界は最終的に単一の通貨を持ち、インターネットも単一の通貨を持つ。私は個人的に、それがビットコインになると信じている」[^3]。
時期は「おそらく10年以上、ただしもっと早いかもしれない」とし、当時のビットコインは「遅くて高い。しかし持つ人が増えれば、その問題は消えていく」と述べました[^3]。
同じ週に彼は Lightning Labs の250万ドルのシードラウンドに個人で出資しています[^3]。
その二か月後の Consensus 2018 では、言い方が少しだけ慎重になります。
「インターネットはネイティブ通貨を持つに値する。それがビットコインであってほしい」[^4]。

この時点で、彼の会社はすでにビットコインを売っていました。
Square の送金アプリ Cash App は2017年秋に一部の利用者へビットコインの売買を試験提供し、2018年1月31日に全利用者へ開放しています[^3]。
Consensus の壇上で彼は、Cash App の利用者が Cash Card でビットコインを買おうとしているのを見て「人々が意図を示していたので、そのまま組み込んだ」と説明しました[^4]。
主張が先にあって製品が続いたのではなく、利用者の行動を見て製品を出し、その製品を説明する言葉として「ネイティブ通貨」を選んだ、という順番です。

六年後の2024年5月、Block の株主向け書簡は同じ主張を会社の方針として書き直しました。
「世界には、誰にも所有されず、誰にも管理されない、開かれた貨幣のプロトコルが必要だと私たちは信じている。ビットコインがそのプロトコルになりうる最良にして唯一の候補であり、最終的にインターネットのネイティブ通貨になると信じている」[^5]。
「最良にして唯一」という言い方に、次の節で述べる彼の選別が表れています。

## 通貨であって crypto ではない

Dorsey はビットコイン以外の暗号資産を一貫して拒んできました。
2019年に Facebook が Libra の協会への参加を打診したとき、彼の返事は「絶対に嫌だ」の一言でした[^6]。
2021年12月には、当時流行していた Web3 について「あなたは『web3』を所有していない。所有しているのは VC と、その出資者だ。それは彼らの動機から決して逃れられない」と投稿し、Andreessen Horowitz を名指しで批判します[^7]。
「VC が問題なのだ」と続け、Marc Andreessen にブロックされると「私は公式に web3 から追放された」と書きました[^7]。
Ethereum を含む他のチェーンには、発行主体や資金提供者という単一障害点があり、ビットコインにはそれがない、というのが彼の一貫した線引きです。

この線引きは2025年にも変わっていません。
2025年10月19日の X への投稿は「ビットコインは通貨である」「ビットコインは crypto ではない」の二文で、少額決済への課税免除を求める文脈で書かれました[^8]。
ビットコインを投機商品として扱う税制と規制が、日常の支払いに使うという本来の設計を歪めている、という主張です。

ただし、2026年3月に一つだけ譲歩がありました。
Block は Cash App でステーブルコインの売買と入金に対応すると発表し、Dorsey は WIRED に「ステーブルコインを支援するのは気に入らないが、顧客が使いたがっている」と語りました[^6]。
同じインタビューで彼は「一つの門番から別の門番へ移るのが賢明だとは思わない」とも述べています[^6]。
ドル建てのステーブルコインは発行体という門番を持つので、彼の基準では「開かれたプロトコル」ではありません。
それでも対応した理由は、顧客の需要であって思想の変更ではない、と本人が明言した形です。

## 会社であることへの後悔

Dorsey のビットコイン観は、Twitter を会社として作ってしまったことへの後悔と切り離せません。
2021年6月4日、マイアミの Bitcoin 2021 の壇上で、彼は Human Rights Foundation の Alex Gladstein に向かってこう言いました。
「ビットコインは絶対にすべてを変える」「私の人生で、これ以上に取り組む価値のあるものはないと思う」[^9]。
「もし Square や Twitter にいなかったら、私はビットコインに取り組んでいた」とも述べ、会場から Twitter の検閲について野次が飛ぶと「いま取り組んでいる」と答えています[^9]。
このとき彼が語った目標は、ビットコインの価格でも普及率でもありませんでした。
「いまの私の人生の目標は、私たちの会社から企業らしさをできるかぎり取り除き、オープンソースのコミュニティとのよりよい接点を見つけることだ」[^9]。

2022年8月、Elon Musk による買収をめぐる混乱の中で、彼はこの後悔をもっと直接に書きます。
「最大の問題であり、私の最大の後悔は、それが会社になってしまったことだ」[^10]。
Twitter は国家にも他の会社にも所有されるべきでなく、電子メールのように誰のものでもない「プロトコル」であるべきだった、という説明が続きました[^10]。
ビットコインが彼にとって特別なのは、それが会社を持たないプロトコルとして十数年動き続けている、ほとんど唯一の実例だからです。

この基準は、彼自身が支援した Bluesky にも向けられました。
Dorsey は2019年に Bluesky を Twitter 社内の構想として立ち上げ、2022年2月に取締役に就きましたが、2024年5月に退任します[^1]。
理由は「彼らは、私たちが会社としてやったすべての過ちを文字どおり繰り返している」であり、「プロトコルに取締役会は要らないし、欲しくもない。取締役会があるなら、それは私が作りたかったものでも、資金を出したかったものでもない」と語りました[^11]。
代わりに彼が選んだのが Nostr です。
「Bluesky に望んでいたものの100パーセントだった。ただし会社から生まれたのではなく、完全に独立していた」[^12]。
Nostr の作者 fiatjaf に14ビットコインを個人で送ったのを皮切りに、2023年5月には非営利団体 OpenSats へ1,000万ドル（ビットコインと Nostr に半分ずつ）[^13]、2024年5月にはさらに2,100万ドル（一般基金に1,500万ドル、Nostr 基金に500万ドル、運営費に100万ドル）を寄付しています[^14]。

Nostr への投資は、2026年に Block の製品として現れました。
7月21日、Block は Nostr 上に構築した作業環境 Buzz を Apache 2.0 ライセンスで公開します[^15]。
人間の従業員と AI エージェントがそれぞれ暗号鍵の身元を持って同じ場に参加する設計で、Dorsey は「モデルに依存せず、分散していて、自己主権的で、オープンソース」と説明し、社内では Slack と GitHub の置き換えに使うとしました[^15]。
同じ月、彼が2025年に出した Bluetooth メッシュのメッセージアプリ BitChat は、インドのサイバー犯罪対策機関から「匿名で分散型である」という設計そのものを理由に、GitHub からの削除を命じられています[^16]。
会社を持たないプロトコルは、会社を締め出す手段が効かないぶん、コードそのものが標的になります。
Dorsey の言う検閲耐性は、そこまでを含んだ話です。

## 価値保存だけなら無関係化する

Dorsey がビットコインの支持者の中で異色なのは、「デジタルゴールド」という成功の像を明確に退ける点です。
2025年4月、Presidio Bitcoin の番組でビットコインはどう失敗しうるかと問われ、彼はこう答えました。
「無関係化によって失敗すると思う。日々の暮らしの中で人々に関係のあるものであることに失敗する。単なる価値保存で終わり、それ以上のものにならないなら、関係のあるものにはまったくならないと思う」[^17]。
「日常で関係のあるものになるには、決済でなければならない。そうでなければ、買って忘れて、緊急時か現金に戻したいときにだけ使う何かにすぎない」[^17]。
ビットコインが投資対象として認められるほど、彼の言葉は厳しくなっていきました。
ETF が承認され、上場企業が財務資産として積み上げる2020年代半ばは、彼の基準では成功の途中ではなく、失敗の一形態に近づいている時期です。

この危機感は、そのまま Block の製品計画になっています。
2025年5月27日、Block は Square の決済端末でビットコインを受け取れるようにすると発表しました[^18]。
Lightning Network を使い、客が QR コードを読み取って支払い、売上は既定でドルに即時換算されます。
2025年後半から段階的に始め、2026年中に対象となる全加盟店へ広げる計画でした[^18]。
そして2026年3月30日、Square は対象の米国加盟店に対してビットコイン受け取りを自動で有効にします[^19]。
加盟店側の設定は不要で、2026年いっぱいは決済手数料もかかりません。
Block のビットコイン製品責任者 Miles Suter は「これが、日常の貨幣としてのビットコインの始まり方だ」と書き、Dorsey はその投稿に「今日」とだけ添えました[^19]。

供給側を整えた翌週、彼は需要側にも手を打ちます。
2026年4月4日に「ビットコインのフォーセットが戻ってくる」と投稿し、4月6日から10日の Bitcoin Day に合計100万ドル分のビットコインを配りました[^20]。
フォーセットとは、2010年に Gavin Andresen が始めた、簡単な作業と引き換えに少額のビットコインを無料で配る仕組みです。
ただし Block 版は無条件ではなく、Cash App、Square、Bitkey のそれぞれで特定の操作をした人に配る、製品への導線でした[^20]。
「一度でも使った人を増やす」という目標は決済論と整合しています。
一方で、16年前の手法を持ち出さなければ新しい利用者が入ってこない、という現状の裏返しでもあります。

## 採掘の分散とエネルギー

Dorsey にとって、ビットコインの検閲耐性は採掘の分散があって初めて成り立ちます。
2021年4月21日、Square は ARK Invest と共同で白書「Bitcoin is Key to an Abundant, Clean Energy Future」を出しました[^21]。
採掘者は電力の買い手として場所と時間を選ばないので、送電網が吸収しきれない太陽光や風力の余剰を買い取り、再生可能エネルギーへの投資を後押しできる、という主張です。
Dorsey は「#bitcoin は再生可能エネルギーを促進する」と一言添えて共有し、Elon Musk が「その通り」と返しました[^21]。
同年6月のマイアミでも「採掘者は利益を出さなければならない。安い再生可能エネルギーを手に入れることが、利益の可能性を最大にする」と、道徳ではなく採算の問題として説明しています[^9]。

2023年11月29日、彼は Bitcoin Core 開発者 Luke Dashjr が立ち上げた採掘プール OCEAN の620万ドルのシードラウンドを主導しました[^22]。
「OCEAN は、ビットコイナーの誰もが感じていると思う問題を解いている。採掘プールのさらなる集中がビットコインを蝕みかねず、私たちが大切にしているビットコインの性質の多くを危うくする、という問題だ」[^22]。
プールの運営者を経由せず、採掘者が報酬をネットワークから直接受け取る非カストディの設計を、彼はこの理由で支持しています。

Block 自身は、採掘機の製造に入りました。
2024年7月10日、Block は3ナノメートルの自社設計チップを Core Scientific に供給する契約を発表します。
15エクサハッシュ毎秒という、ハッシュレート換算で業界最大級の ASIC 契約でした[^23]。
2024年11月には、分散型ウェブの開発部門 TBD をたたみ、採掘機と Bitkey に資源を集中すると発表しています[^24]。
2025年8月26日には、9枚の基板と電源を数秒で交換できるモジュール構造の Proto Rig を公開しました。
Bitmain が採掘機のおよそ8割を握る市場で、Dorsey はこれを「大手だけでなく、採掘業界のすべての参加者への約束」と呼びました[^25]。

このハードウェア事業には、2026年7月に厳しい数字が出ています。
Core Scientific は2024年7月から2026年1月までに Block へ6,790万ドルを支払ったうえで、残りの購入義務から抜けるために4,190万ドルの損失を計上しました[^26]。
買うのをやめる権利に4,190万ドルを払った計算です。
同社が同じ時期に AMD と結んだデータセンターの賃貸契約の方が、Block の採掘機を回すより有利だった、と Protos は読んでいます[^26]。
採掘の分散という目標は変わらなくても、それを製品として成り立たせるのは別の問題です。

## 自己保管と Block の帳簿

Dorsey は「鍵を自分で持つ」ことを製品にしてきました。
2021年のマイアミで、ソフトウェアもハードウェアの設計も公開する非カストディの財布を作ると予告し[^9]、それが2023年12月7日に発売された Bitkey です[^27]。
利用者の端末、Bitkey 本体、Block のサーバーの三つの鍵のうち二つで署名する設計で、Block 単独では顧客の資産を動かせません。

会社の帳簿にもビットコインを載せています。
2020年10月、Square は総資産の約1パーセントにあたる5,000万ドルでビットコインを買い、「会社の目的に沿う」と説明しました[^28]。
2024年5月からは、ビットコイン製品の月間粗利益の10パーセントを毎月ビットコインの購入に充てています[^5]。
2026年第1四半期の時点で、Block の自己保有は8,997ビットコイン、Cash App の顧客分は19,357ビットコインで、合わせて約22億ドルです[^29]。
同年4月には、公開したアドレスとオンチェーンの署名で第三者が残高を検証できる準備金証明のダッシュボードを出しました[^29]。

その五か月後、Block は自己保管とは逆向きに見える申請をします。
2026年9月、米通貨監督庁（OCC）に対し、ビットコインとデジタル資産のカストディに特化した連邦免許の信託銀行 Builders Bank & Trust の設立を申請しました[^30]。
預金も貸出もしない無保険の信託銀行で、州ごとに取っていた50を超える送金業者ライセンスを一つの連邦免許にまとめる狙いです。
Circle、Ripple、Paxos、BitGo、Fidelity が2025年12月に条件付き認可を得た枠組みに、Block も入ることになります[^30]。
「鍵を自分で持て」と言い続けてきた人物の会社が、他人の鍵を預かる免許を取りに行く。
本人はこの点について語っていませんが、Cash App で1万9,000ビットコインを預かっている以上、預かる側の規制対応を整える必要は前からあった、という読み方はできます。

## 価格と時間軸

Dorsey は価格を語りたがりません。
2024年5月9日、Pirate Wires の Mike Solana に2030年の価格を聞かれて、こう答えています。
「分からない。少なくとも100万ドル以上。その数字に届き、さらに超えていくと思う」[^31]。
続けて彼は、価格は面白い部分ではないとし、面白いのは「ビットコインに取り組む人、ビットコインで報酬を受け取る人、自分のために買う人、それを良くしようと努力する人の全員が、生態系全体を良くしていて、それが価格を押し上げる」構造だと述べました[^31]。
価格は原因ではなく、開発と利用の結果として出てくるもの、という順序です。

時間軸はさらに長く取っています。
2021年7月21日、Elon Musk と Cathie Wood と並んだ The B Word で、彼はビットコインに何を望むかと問われて「世界平和を作るか、作る手助けをすることが私の希望だ」と答えました[^32]。
「少しばかげて聞こえるかもしれないが、土台の層を直せば、その上にあるすべてが劇的に良くなる」[^32]。
いまの通貨制度には「コストと気の散る要因」が大きすぎて、本来向き合うべき問題から注意を奪っている、というのが彼の診断です[^32]。
同じ年のマイアミでは「これが唯一の出口だ」とも言っています[^9]。
2018年の「10年以上」も、2021年の「長期になる」も、2024年の「2030年に100万ドル」も、どれも彼の中では同じ長さの話です。

## 2026年の Block

2026年の Block は、ビットコインより AI で報じられました。
2月26日、Dorsey は4,000人を超える従業員（全体の約4割）の削減を発表し、「知能のツールは、会社を作り運営することの意味を変えた」「はるかに小さなチームが、私たちが作っているツールを使って、より多くをより良くできる」と説明しました[^33]。
「来年のうちに、大多数の会社が同じ結論に達すると私は信じている」[^33]。
ステーブルコインへの譲歩を語った WIRED のインタビューも、同じ時期のものです[^6]。

この転回は、彼のビットコイン論と矛盾しているようで、実は同じ型をしています。
Buzz が人間と AI エージェントに同じ暗号鍵の身元を与えたように、彼は AI の時代にも「会社ではなくプロトコル」「鍵を持つ主体が直接やりとりする」という設計を持ち込もうとしています。
ビットコインはその設計の貨幣の層であり、Nostr は通信の層であり、AI エージェントはその上で動く新しい参加者です。
一方で、Block の株価と業績は Cash App と Square の決済事業で決まり、ビットコインの売買は粗利益の一部にとどまります。
ビットコインを「唯一の候補」と呼ぶ経営者が率いる会社が、ビットコインだけでは食べていけない、という構造は2026年も変わっていません。

## 実装者としてのビットコイン論

Dorsey の主張は、三つの文で言い尽くせます。
インターネットにはネイティブ通貨が必要で、それはビットコインしかありえない。
会社に所有されないプロトコルだけが検閲に耐え、そのプロトコルは決済に使われなければ無関係化する。
だから決済の道具と採掘の道具と保管の道具を作り、開発者に金を出す。
Ammous のように貨幣の歴史で、Alden のように流動性と財政で説明することはほとんどなく、根拠はいつも Twitter を会社にしてしまった自分の経験です。

だからこそ、彼の主張は言葉ではなく実装で検証されます。
Square でビットコインを受け取れるようになった約100万の加盟店で[^34]、客がどれだけ QR コードを読み取るのか。
フォーセットで配った少額を、受け取った人が次に使うのか。
Proto の採掘機が Bitmain の8割を実際に削るのか。
どれも2026年の時点では答えが出ておらず、Core Scientific の離脱のように、出た答えが彼の側に不利なこともあります。
それでも「価値保存だけなら失敗する」と言い切って、失敗の条件を自分で定義した支持者は多くありません。
ビットコインが10年後に日常の支払いに使われていなければ、Dorsey の基準では失敗です。
その基準を公開したまま、彼は道具を作り続けています。

## 出典

[^1]: Wikipedia, "Jack Dorsey". https://en.wikipedia.org/wiki/Jack_Dorsey
[^2]: Square, Inc., "Square, Inc. Changes Name to Block" (2021-12-01). https://squareup.com/us/en/press/square-changes-name-to-block
[^3]: TechCrunch, "Jack Dorsey believes bitcoin will be the world's sole currency within 10 years" (2018-03-21). The Times のインタビューの引用。 https://techcrunch.com/2018/03/21/bitcoin-jack-dorsey-quote-single-currency/
[^4]: Crowdfund Insider, "Twitter and Square CEO Jack Dorsey Says He Hopes Bitcoin Becomes the Internet's Native Currency" (2018-05). Consensus 2018 での Elizabeth Stark との対談。 https://www.crowdfundinsider.com/2018/05/133528-twitter-and-square-ceo-jack-dorsey-says-he-hopes-bitcoin-becomes-the-internets-native-currency/
[^5]: The Block, "Dorsey's Block to invest 10% of bitcoin profits into BTC each month" (2024-05-02). 株主向け書簡の引用。 https://www.theblock.co/post/292301/dorseys-block-to-invest-10-of-bitcoin-profits-into-btc-each-month-shares-rise-on-q1-earnings-beat
[^6]: CoinDesk, "Bitcoin purist Jack Dorsey's firm is reluctantly giving in to stablecoin craze" (2026-03-07). WIRED のインタビューの引用。 https://www.coindesk.com/business/2026/03/07/bitcoin-purist-jack-dorsey-s-firm-is-reluctantly-giving-in-to-stablecoin-craze
[^7]: CoinDesk, "Jack Dorsey Goes on Unfollowing Frenzy After Web 3 Beef" (2021-12-23). https://www.coindesk.com/business/2021/12/23/jack-dorsey-goes-on-unfollowing-frenzy-after-web-3-beef
[^8]: U.Today, "'Bitcoin Is Money, Not Crypto': Jack Dorsey Pushes Traditional Vision for BTC by 2026" (2025-10-19). https://u.today/bitcoin-is-money-not-crypto-jack-dorsey-pushes-traditional-vision-for-btc-by-2026
[^9]: Bitcoin Magazine, "Bitcoin Is The Only Way Out: The Jack Dorsey Interview" (2021-06-04). Bitcoin 2021 での Alex Gladstein との対談。 https://bitcoinmagazine.com/culture/the-jack-dorsey-bitcoin-interview
[^10]: Euronews, "Twitter founder Jack Dorsey says his biggest regret about the platform is it became a company" (2022-08-26). https://www.euronews.com/next/2022/08/26/twitter-founder-jack-dorsey-says-his-biggest-regret-about-the-platform-is-it-became-a-comp
[^11]: Engadget, "Jack Dorsey claims Bluesky is 'repeating all the mistakes' he made at Twitter" (2024-05). Pirate Wires のインタビューの引用。 https://www.engadget.com/jack-dorsey-claims-bluesky-is-repeating-all-the-mistakes-he-made-at-twitter-234326121.html
[^12]: Reason, "Can Nostr make Twitter's dreams come true?" (2024-08-13). https://reason.com/2024/08/13/can-nostr-make-twitters-dreams-come-true/
[^13]: Bitcoin Magazine, "Bitcoin Focused Non-Profit OpenSats Receives $10 Million From Jack Dorsey's #Startsmall Initiative" (2023-05-04). https://bitcoinmagazine.com/business/opensats-receives-10-million-from-jack-dorseys-startsmall-initiative
[^14]: CoinGape, "Jack Dorsey Pledges $21 Million for Bitcoin Development" (2024-05-04). https://coingape.com/jack-dorsey-pledges-21-million-for-bitcoin-development/
[^15]: metir, "Block's Buzz: Jack Dorsey's Nostr-Based AI Agent Workspace" (2026-07). https://www.metirai.com/blog/block-buzz-jack-dorsey-ai-agent-collaboration-2026
[^16]: TFTC, "India orders GitHub to take down Bitchat" (2026-07). https://www.tftc.io/india-bitchat-github-takedown-i4c-iff-unconstitutional
[^17]: The Daily Hodl, "Billionaire Jack Dorsey Issues Bitcoin Warning, Says BTC Risks Becoming Irrelevant if This Happens" (2025-04-08). Presidio Bitcoin の番組の引用。 https://dailyhodl.com/2025/04/08/billionaire-jack-dorsey-issues-bitcoin-warning-says-btc-risks-becoming-irrelevant-if-this-happens/
[^18]: Block, "Block to roll out bitcoin payments on Square" (2025-05-27). https://squareup.com/us/en/press/block-to-roll-out-bitcoin-payments-on-square
[^19]: CoinDesk, "Bitcoin payments go mainstream as Square auto-enables BTC for small businesses" (2026-03-30). https://www.coindesk.com/business/2026/03/30/jack-dorsey-s-square-auto-enables-bitcoin-payments-for-millions-of-u-s-businesses
[^20]: Stocktwits, "Jack Dorsey's Block Is Bringing Back Bitcoin's Old-School 'Faucet' Playbook" (2026-04). https://stocktwits.com/news-articles/markets/cryptocurrency/jack-dorsey-s-block-is-bringing-back-bitcoin-s-old-school-faucet-playbook/cZJTb8QRI8C
[^21]: Cointelegraph, "'Bitcoin incentivizes renewable energy' agree Elon Musk and Jack Dorsey" (2021-04). 白書は Square, "Bitcoin is Key to an Abundant, Clean Energy Future" (2021-04-21) https://squareup.com/us/en/press/bcei-white-paper 。 https://cointelegraph.com/news/bitcoin-incentivizes-renewable-energy-agree-elon-musk-and-jack-dorsey
[^22]: The Block, "Jack Dorsey leads $6.2 million seed round for decentralized Bitcoin mining pool OCEAN" (2023-11-29). https://www.theblock.co/post/265120/jack-dorsey-seed-round-decentralized-bitcoin-mining-pool-ocean
[^23]: Decrypt, "Jack Dorsey's Block Sells First Bitcoin Mining Chips to Core Scientific" (2024-07-10). https://decrypt.co/239277/jack-dorsey-block-bitcoin-mining-chips-core-scientific
[^24]: CNBC, "Jack Dorsey dramatically shutters Block's TBD crypto unit" (2024-11-08). https://www.cnbc.com/2024/11/08/jack-dorsey-dramatically-shutters-blocks-tbd-crypto-unit.html
[^25]: Bitcoin Magazine, "Could Jack Dorsey's Proto Rig Finally Break Bitmain's Bitcoin Mining Stranglehold?" (2025-08-26). https://bitcoinmagazine.com/bitcoin-mining/block-inc-launches-proto-rig-modular-bitcoin-miner-challenging-bitmains-dominance
[^26]: Protos, "Escaping Jack Dorsey's BTC miners cost $41.9 million" (2026-07-28). https://protos.com/escaping-jack-dorseys-btc-miners-cost-41-9-million/
[^27]: Wikipedia, "Bitkey". https://en.wikipedia.org/wiki/Bitkey
[^28]: CNBC, "Square buys $50 million in bitcoin, says cryptocurrency 'aligns with company's purpose'" (2020-10-08). https://www.cnbc.com/2020/10/08/square-buys-50-million-in-bitcoin-says-cryptocurrency-aligns-with-companys-purpose.html
[^29]: CoinDesk, "Jack Dorsey's Block nears 9,000 BTC in treasury after Q1 addition" (2026-04-28). https://www.coindesk.com/business/2026/04/28/jack-dorsey-s-block-nears-9-000-bitcoin-in-treasury-after-q1-addition
[^30]: The Industry Spread, "Block files for Builders Bank, an uninsured bitcoin trust bank" (2026-09). https://theindustryspread.com/block-builders-bank-occ-trust-charter-bitcoin-custody/
[^31]: CoinDesk, "Former Twitter CEO Jack Dorsey Says Bitcoin Will Go Beyond $1 Million in 2030" (2024-05-10). Pirate Wires のインタビューの引用。 https://www.coindesk.com/markets/2024/05/10/former-twitter-ceo-jack-dorsey-says-bitcoin-will-go-beyond-1-million-in-2030
[^32]: Vice, "Jack Dorsey Thinks Bitcoin Can Bring 'World Peace'" (2021-07-22). The B Word での発言。 https://vice.com/en/article/g5gm57/jack-dorsey-thinks-bitcoin-can-bring-world-peace
[^33]: Yahoo Finance, "Jack Dorsey lays off 4,000, says others will do same 'within the next year'" (2026-02-27). https://finance.yahoo.com/news/jack-dorsey-lays-off-4-002036006.html
[^34]: Atlas21, "Square: over one million merchants enabled for Bitcoin payments" (2026-06-24). 有効化された加盟店の数であり、実際にビットコインで決済した件数や金額は公表されていない。 https://atlas21.com/square-over-one-million-merchants-enabled-for-bitcoin-payments/
