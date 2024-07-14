---
slug: /renewal-gatsby
date: '2022-09-03 14:23'
title: WordPressのブログをGatsbyでリニューアルした
thumbnail: /img/blog/thumbnail/2022/renewal-gatsby/renewal-gatsby-thumb.webp
tags: ['日記','Gatsby']
---
タイトルの通り、もともとWordPressだったブログをGatsbyでリニューアルしました。  
※一覧のサムネは `Midjourney` で作りました

## 背景
リニューアルのきっかけ、及びモチベーション

- フロントエンドエンジニアなんだからJavaScriptのフレームワーク使いたい
- WordPressの管理画面みにくい・・・
- エディタも使いにくい・・・
- Markdownで記事書きたい
- 学んだ技術のアウトプットとして

## リニューアルについて
- サーバー
  - 引き続きCORESERVER
  - ドメイン移管もなし
- 制作期間
  - 約２ヶ月
  - 土日にちまちま作っていった
- Gatsbyを選んだ理由
  - 前に一度少しさわった
  - ネットに情報が多い
  - フォローしているエンジニアの方々がGatsbyだった
  - GraphQLも触りたかった
- デザインカンプ
  - なし

## 機能や使用ライブラリなど
- TypeScript
- Material UI
- styled-components
- FTP-Deploy-Action

他Gatsbyのプラグインは[gatsby-config.js](https://github.com/totocalcio/totolog34/blob/main/gatsby-config.js)をみて下さい。

## 苦労したこと

### リダイレクト設定
- Gatsby内で設定されるタグのパスは `gatsby-node` で書き換える
- 旧URLは `.htaccess` でリダイレクト

### WordPressの記事をMarkdownファイルへ変換
- phpスクリプトを作成する
- サーバーで実行

#### phpスクリプトの内容とMarkdownファイル作成
- サムネやタイトル、日時などは `Front Matter` に書き出されるようにしておく
- 一旦ディレクトリに全て書き出す
  - ディレクトリと公開する記事のパスは一致しない
  - 記事のパスはMarkdownファイル内の `Front Matter` で制御
- いらないコメント、`HTML` タグを手動削除

### 自動デプロイ
- `Github Actions` で設定したFTPの自動デプロイがうまくいかない
- `FTP-Deploy-Action@4.3.1`を使用していた
  - 必ず途中でエラー終了する。
  - おそらくファイル数かタイムアウト
  - 2.0.0に落として解決した

## SEOまわり
### .htaccess
- プラグインで全ての問題を解決できないので使用しない
- 前述の通りリダイレクトや、404に飛ばすために設定。
- ルートディレクトリに404.htmlあったら勝手に見に行くと思っていた
  - 確かに `github serve` で確認すると404ページが表示される
  - しかしデプロイすると404ページが表示されない
    - (多分ビルドの設定)

### robots.txt
`gatsby-plugin-robots-txt` を使用

### サイトマップ
`gatsby-plugin-sitemap` を使用

### GoogleAnalytics
もともとタグマネージャーで管理していたので `gatsby-plugin-google-tagmanager` を使用

### metaタグ関連
`gatsby-plugin-react-helmet` を使用
