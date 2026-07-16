# ローカルで見た目を確認するためだけのもの。GitHub Pages のブランチビルドは
# このファイルを読まず、常に自前の gem 一式で組む（→ 本番は無影響）。
source "https://rubygems.org"

# 本来は gem "github-pages" と書けば本番と版がそろう。しかしそれが固定する
# liquid 4.0.3 は Ruby 3.2 で削除された tainted? を呼ぶため、現行の Ruby では
# 起動しない（GitHub Pages 側は古い Ruby で走らせているので成立している）。
# そこで本番と同じ Jekyll 3.9 系を直接指定する。liquid は 4.0.4 が入り、
# tainted? の問題を踏まない。
gem "jekyll", "~> 3.9.5"

# 本番（github-pages）が既定で有効にするプラグインのうち、このサイトが
# 依存している2つ。_config.yml の plugins と一致させること。
#   optional-front-matter … front matter の無い README.md を描画する
#   readme-index          … README.md をフォルダの index.html にする
group :jekyll_plugins do
  gem "jekyll-optional-front-matter", "~> 0.3"
  gem "jekyll-readme-index", "~> 0.3"
end

# _config.yml が kramdown の input: GFM を指定しているため必要。
gem "kramdown-parser-gfm", "~> 1.1"

# jekyll serve 用。Ruby 3.0 で標準添付から外れた。
gem "webrick"

# Jekyll 3.9 が require するが、Ruby 3.4 以降で標準ライブラリから切り出された。
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"
