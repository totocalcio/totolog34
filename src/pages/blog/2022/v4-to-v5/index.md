---
slug: /v4-to-v5
date: '2022-12-25 16:44'
title: Gatsbyをv4からv5に移行するのにやったこと
thumbnail: gatsby-logo.png
tags: ['gatsby']
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

### 他のエラーに対応・・・するはずだった
他にもいくつかエラーが出ていたが、上記対応ですべて解決してしまった。

## 結論
関連プラグインも全てアップデートしよう。
