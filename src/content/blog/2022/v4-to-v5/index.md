---
_path: "/v4-to-v5"
date: '2022-12-25 16:44'
title: Gatsbyをv4からv5に移行するのにやったこと
thumbnail: /img/blog/thumbnail/2022/v4-to-v5/gatsby-logo.png
description: 記事を読んだところ特に大きく問題となるところは見当たらなかったので、v5へアップグレードする。
tags: ['Gatsby']
---
## マイグレーションガイド
公式が公開している記事を読む。([公式](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/))

## えいや
記事を読んだところ特に大きく問題となるところは見当たらなかったので、v5へアップグレードする。  
**package.json**
```shell
npm install gatsby@latest
```
## エラー解消
build失敗しているので解消していく

### "gatsby-transformer-sharp" threw an error while running the createSchemaCustomization lifecycle:
```shell
 ERROR #11321  API.NODE.EXECUTION
"gatsby-transformer-sharp" threw an error while running the createSchemaCustomization lifecycle:
Class constructor GraphQLList cannot be invoked without 'new'
  TypeError: Class constructor GraphQLList cannot be invoked without 'new'
```
`gatsby-transformer-sharp`プラグインでエラー。
`クラス コンストラクター GraphQLList は、'new' なしでは呼び出すことができません`とのこと。  
使っている箇所としては、`gatsby-config.js`で定義しているだけ。

#### GraphQLDocumentError: Unknown type "ImageSharpFluid". Did you mean "ImageSharp" or "ImageSharpEdge"?

それらしい[issue](https://github.com/gatsbyjs/gatsby/discussions/36609#discussioncomment-4057299)を発見した。他のパッケージも全部更新する必要があったらしい。([Update Gatsby related packages](https://v5.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/#update-gatsby-related-packages))  
マイグレーションの記事を理解しきれていなかった。

`gatsby-*`のバージョンが5を超えていたら、`gatsby-*-next`に変更、5に達していない場合`gatsby-*-next.5`に変更。`package.json`を修正したら、関連プラグインをアップデートする。

### gatsby-cliが古い
ここでめちゃくちゃはまった。何をしてもビルドが通らない。graphqlの自動型生成がうまくいっていないみたい。  
調べていたところグローバルにインストールされている`gatsby-cli`が古いということがわかった。  
まずグローバルのnodeをインストールする
```
volta install node
```
そして`gatsby-cli`をアップデート
```
npm i -g gatsby-cli
```
`volta list all`で確認
```
gatsby-cli@5.3.1 (default)
    binary tools: gatsby
    platform:
      runtime: node@18.9.1
      package manager: npm@built-in
```
更新されている…（ここまで3日かかった）

### graphqlのバリデーションにひっかかる
#### descriptionがない
`gatsby-plugin-react-helmet`が入っていたので使用していたが、`gatsby-source-filesystem`が指しているパスのいずれにも含まれていないからエラーらしい。最低一つでもマークダウンファイルに存在している必要がある。
[参考](https://stackoverflow.com/questions/62209671/gatsby-keeps-complaining-cannot-query-field-fields-on-type-markdownremark-wh)

#### fieldValue.slugがとれない
構造が変わったのか、チェックが厳密になったのかよくわからなかったが、いらないなと思ったので削除して対応した

## 結論
関連プラグインも全てアップデートしよう。
グローバルにインストールされているパッケージも忘れずに（忘れずに）
