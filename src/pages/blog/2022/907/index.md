---
slug: /907
date: "2022-07-04 23:46:35"
title: Gatsbyでブログ作る②〜MaterialUI導入
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ["react","gatsby"]
---
# Gatsbyでブログ作る②〜MaterialUI導入
<!-- wp:paragraph -->
<p><a href="https://totolog34.com/901/">前回</a>の続き。<br>そんなにデザインに凝る予定もないのでstyled-componentsで書こうと思っていたけど、少し触ってみたいという理由でMaterialUIを導入することにした。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>前置き</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Gatsbyの公式で別のページにあったJS→TSの<a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript">マイグレーション</a>見たら手間がかかりそうだったのと、<a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">TypeScriptで初期化</a>について書かれていたのを見たので、結局やり直した。initの選択項目はほぼ一緒。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>MaterialUI導入</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://mui.com/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://mui.com/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><a href="https://mui.com/material-ui/getting-started/installation/">公式の手順</a>に沿って導入していく</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm install @mui/material @emotion/react @emotion/styled</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>これであとはComponentをimportして使っていくだけ。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>リセットCSS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>リセットCSSも導入の手順が<a href="https://mui.com/material-ui/react-css-baseline/#global-reset">公式</a>にありますが、MUIが提供しているものを使います。中身は<a href="https://github.com/necolas/normalize.css">normalize.css</a>に近いらしい。ルートコンポーネントでMUIのリセットCSSをimportしてJSX内にかくだけでいいようです。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// Index.tsx
import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const IndexPage = () =&gt; {
  return (
    &lt;main&gt;
      &lt;CssBaseline /&gt;
      &lt;Box component="main"&gt;
      &lt;/Box&gt;
    &lt;/main&gt;
  )
}

export default IndexPage
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>レスポンシブ対応とブレークポイント</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>sx</code>&nbsp;という属性をコンポーネントに指定することでブレークポイントとして扱うことができる。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>      &lt;AppBar component="nav"&gt;
        &lt;Box sx={{ p: { xs: 0, sm: 1}}}&gt;
          ...
        &lt;/Box&gt;
      &lt;/AppBar&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;Toolbar sx={{minHeight:{ xs: 32, sm: 56 }}}/&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>CSS Modules</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MUIコンポーネントの一部を上書きしたいのでCSS Modulesも使うことにした。いつもはstyled-componentsを採用するけど、<a href="https://www.gatsbyjs.com/docs/tutorial/part-2/#style-components-with-css-modules">公式</a>にも書いてあったのでなんとなくCSS Modules。使ったこともなかったし。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4> 型宣言が見つかりません(ts2307)</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import { link } from './module/link.module.css'</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>linkコンポーネントの一部のスタイルを書き換えたかったので、link.module.cssファイルを作成し、import。しかしTypeScriptのエラー。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>モジュール './module/link.module.css' またはそれに対応する型宣言が見つかりません。</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>型宣言が見つからないということなので作ります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>/src/typings/css.d.tsファイルを作成し下記のコードを記述</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>declare module '*.css'</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>これでエラーが消えました。</p>
<!-- /wp:paragraph -->