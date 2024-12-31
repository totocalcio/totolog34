---
_path: "/901"
date: '2022-05-21 01:08:29'
title: Gatsbyでブログ作る①〜セットアップ
thumbnail: /img/blog/thumbnail/2022/901/1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ['Gatsby']
---
リニューアルしようかなと思って。２年ぶりに触ります。

[以前さわった時の記事](https://totolog34.com/225/)

```sh
% gatsby -v
zsh: command not found: gatsby
```

パソコンも変わっているのでやはり入っていないですね。

## インストール

[公式](https://www.gatsbyjs.com/docs/tutorial/part-1/)を確認しながら進めていきます。

```sh
% npm install -g gatsby-cli
```

```sh
% gatsby -v
Gatsby CLI version: 4.14.0
```

インストールできました

## プロジェクト作成

```sh
% gatsby new
```

プロジェクトを作ります。

```sh
What would you like to call your site?
✔ · totolog34
```

サイト名を聞かれるので好きな名前を

```sh
What would you like to name the folder where your site will be created?
✔ Documents/ totolog34
```

作成するディレクトリ名を入力

```sh
? Will you be using JavaScript or TypeScript?
(Single choice) Arrow keys to move, enter to confirm
❯ JavaScript
  TypeScript
```

TypeScript で作る予定だけど、公式を見るとまずは JavaScript で作ってあとから TypeScript にしたほうがいいと書いてあるのでそうする。

> TypeScript を使用する場合は、最初にチュートリアルを実行してから、プロジェクトを TypeScript に変換することをお勧めします。[https://www.gatsbyjs.com/docs/tutorial/part-1/](https://www.gatsbyjs.com/docs/tutorial/part-1/)

```sh
? Will you be using a CMS?
(Single choice) Arrow keys to move, enter to confirm
❯ No (or I'll add it later)
–
Contentful
DatoCMS
Netlify CMS
Sanity
Shopify
WordPress
```

CMS を使うかどうか聞かれるが、「**No (or I'll add it later)**」（いいえ、またはあとで追加します）を選択。

```sh
? Would you like to install a styling system?
(Single choice) Arrow keys to move, enter to confirm
❯ No (or I'll add it later)
  –
  Emotion
  PostCSS
  Sass
  styled-components
  Theme UI
  vanilla-extract
```

スタイリングシステムを聞かれる。なんでもいいとは思うけど styled-components にしました。

```sh
? Would you like to install additional features with other plugins?
(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"
◯ Add the Google Analytics tracking script
◯ Add responsive images
◯ Add page meta tags with React Helmet
◯ Add an automatic sitemap
◯ Generate a manifest file
◯ Add Markdown and MDX support
◯ Add Markdown support (without MDX)
─────
❯ Done
```

追加でプラグインを入れるか聞かれますが、あとから必要なものを追加していくので一旦何も選ばずに終了します。

```sh
Thanks! Here's what we'll now do:

    ?  Create a new Gatsby site in the folder totolog34
    ? Get you set up to use styled-components for styling your site

? Shall we do this? (Y/n) › Yes
```

内容について確認があります。問題なければ Yes。

## 表示してみる

無事作成ができたら表示してみる。

```sh
% cd totolog34
% npm run develop
```

http\://localhost:8000/へアクセス

![image](/img/blog/contents/2022/05/2022-05-21-1.07.23.png)

表示されました
