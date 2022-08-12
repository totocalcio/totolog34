---
slug: /912
date: "2022-07-10 11:56:06"
title: Gatsbyでブログ作る③〜ESLint、Prettier
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ["gatsby"]
---
# Gatsbyでブログ作る③〜ESLint、Prettier
<!-- wp:heading -->
<h2>ESLint</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>探したら<a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/">公式</a>に手順が書いてあった。GatsbyにはESLintのセットアップが組み込まれているので、必要に応じて設定を追加するだけでよいらしい。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm install --save-dev eslint-config-react-app</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>touch .eslintrc.js</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>.eslintrc.js</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>eslint-config-prettier</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>フォーマットはPrettierにまかせて、ESLintのフォーマットは無効化します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm install --D eslint-config-prettier</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>.eslintrc.jsを編集</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: &#91;
    'react-app',
    // prettierを追加。記述は最後にすること
    'prettier',
  ]
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>Prettier</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p> 公式のドキュメント内を検索すると、<a href="https://www.gatsbyjs.com/docs/creating-a-starter/#basic-requirements">スターターのドキュメント</a>がひっかかったのですが、スターターキットに設定が含まれているだけ、という内容なのでインストールと設定を追加します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm i -D prettier</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>touch .prettierrc</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>.prettierrc</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>この設定に関しては個人、もしくはプロジェクトそれぞれだと思うので、<a rel="noreferrer noopener" href="https://prettier.io/docs/en/options.html" target="_blank">公式の設定</a>を見ながら好きなものを設定していくとよいと思います。私の場合は深く考えずずっと同じ設定です。必要になったら随時変更です。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>touch .prettierignore</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>次にフォーマットしたくない設定ファイルの作成です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>.prettierignore</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>.cache
package.json
package-lock.json
public
tsconfig.json
.eslintrc.js
*.d.ts</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>フォーマットかけたくないのも個人やプロジェクトによると思うので自由でいいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>package.json修正</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>prettierは保存時に自動実行されるわけではないのでpackage.jsonに設定を追加します。<br>（保存時に自動実行する場合はVSCodeなど、エディタ側の設定が必要です）</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>  "scripts": {
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "fmt": "prettier --write src/**/*.{tsx,ts,css}"
  },</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>設定を追加したらコマンドを実行します</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm run fmt</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>> totolog34@1.0.0 fmt
> prettier --write src/**/*.{tsx,ts,css}

src/components/header.tsx 377ms
src/pages/404.tsx 26ms
src/pages/about.tsx 6ms
src/pages/index.tsx 21ms
src/components/css/utility.module.css 54ms</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>フォーマットができました。</p>
<!-- /wp:paragraph -->