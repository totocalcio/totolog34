---
slug: /901
date: "2022-05-21 01:08:29"
title: Gatsbyでブログ作る①〜セットアップ
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ["gatsby"]
---
# Gatsbyでブログ作る①〜セットアップ
<!-- wp:paragraph -->
<p>リニューアルしようかなと思って。２年ぶりに触ります。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://totolog34.com/225/","type":"wp-embed","providerNameSlug":"うさ技術"} -->
<figure class="wp-block-embed is-type-wp-embed is-provider-うさ技術 wp-block-embed-うさ技術"><div class="wp-block-embed__wrapper">
https://totolog34.com/225/
</div></figure>
<!-- /wp:embed -->

<!-- wp:code -->
<pre class="wp-block-code"><code>% gatsby -v
zsh: command not found: gatsby</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>パソコンも変わっているのでやはり入っていないですね。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>インストール</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.gatsbyjs.com/docs/tutorial/part-1/">公式</a>を確認しながら進めていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>% npm install -g gatsby-cli</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>% gatsby -v
Gatsby CLI version: 4.14.0</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>インストールできました</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>プロジェクト作成</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>% gatsby new</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>プロジェクトを作ります。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>What would you like to call your site?
✔ · totolog34</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>サイト名を聞かれるので好きな名前を</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>What would you like to name the folder where your site will be created?
✔ Documents/ totolog34</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>作成するディレクトリ名を入力</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>? Will you be using JavaScript or TypeScript?
(Single choice) Arrow keys to move, enter to confirm
❯ JavaScript
  TypeScript</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>TypeScriptで作る予定だけど、公式を見るとまずはJavaScriptで作ってあとからTypeScriptにしたほうがいいと書いてあるのでそうする。</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>TypeScriptを使用する場合は、最初にチュートリアルを実行してから、プロジェクトをTypeScriptに変換することをお勧めします。</p><cite>https://www.gatsbyjs.com/docs/tutorial/part-1/</cite></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>? Will you be using a CMS?
(Single choice) Arrow keys to move, enter to confirm
❯ No (or I'll add it later)
  –
  Contentful
  DatoCMS
  Netlify CMS
  Sanity
  Shopify
  WordPress</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>CMSを使うかどうか聞かれるが、「<strong>No (or I'll add it later)</strong>」（いいえ、またはあとで追加します）を選択。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>? Would you like to install a styling system?
(Single choice) Arrow keys to move, enter to confirm
❯ No (or I'll add it later)
  –
  Emotion
  PostCSS
  Sass
  styled-components
  Theme UI
  vanilla-extract</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>スタイリングシステムを聞かれる。なんでもいいとは思うけど styled-componentsにしました。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>? Would you like to install additional features with other plugins?
(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"
 ◯ Add the Google Analytics tracking script
 ◯ Add responsive images
 ◯ Add page meta tags with React Helmet
 ◯ Add an automatic sitemap
 ◯ Generate a manifest file
 ◯ Add Markdown and MDX support
 ◯ Add Markdown support (without MDX)
  ─────
❯ Done</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>追加でプラグインを入れるか聞かれますが、あとから必要なものを追加していくので一旦何も選ばずに終了します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Thanks! Here's what we'll now do:

    ?  Create a new Gatsby site in the folder totolog34
    ? Get you set up to use styled-components for styling your site


? Shall we do this? (Y/n) › Yes</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>内容について確認があります。問題なければYes。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>表示してみる</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>無事作成ができたら表示してみる。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>% cd totolog34 
% npm run develop</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>http://localhost:8000/へアクセス</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":903,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2022/05/スクリーンショット-2022-05-21-1.07.23-1024x881.png" alt="" class="wp-image-903"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>表示されました</p>
<!-- /wp:paragraph -->