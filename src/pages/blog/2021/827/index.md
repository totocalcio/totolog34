---
slug: /827
date: "2021-09-21 01:09:00"
title: 第2回ReactNativeアプリ開発②〜UIコンポーネント選定
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative","expo"]
---
# 第2回ReactNativeアプリ開発②〜UIコンポーネント選定
<!-- wp:paragraph -->
<p>ReactNativeではUIコンポーネントのライブラリがいくつかありますが、今回は<a rel="noreferrer noopener" href="https://www.creative-tim.com/product/material-kit-react-native" target="_blank">Material Kit React Native</a>を使うことにしました。なんとなくデザインが一番しっくりきたからです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>テンプレートをダウンロード</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://totolog34.com/813/">前回の記事</a>でexpo initでプロジェクトを作成しましたがもう一度最初から作り直します。<br>理由はReactNativePaperのようにnpmインストールして使うのではなく、そもそもコンポーネントが定義されているキットとして配布されているためです。ダウンロードでzipファイルを落とすことができますが、git cloneの方が個人的に楽なのでそうします。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git clone https://github.com/creativetimofficial/material-kit-react-native.git sample</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>cloneもしくは、サイトからzipファイルを落としてきたらディレクトリに移動して、関連パッケージをインストールするために<span class="bold-blue">yarn install</span>もしくは<span class="bold-blue">npm install</span>します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ yarn install</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>インストールが完了したらyarn startします。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ yarn start</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>エラー</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ yarn start
yarn run v1.22.10
$ cross-env REACT_EDITOR=code expo start
<span class="red">ERROR: Node.js version 14.0.0 is no longer supported.
expo-cli supports following Node.js versions:
&gt;=10.13.0 &lt;11.0.0 (Active LTS)
&gt;=12.0.0 &lt;13.0.0 (Active LTS)
&gt;=13.0.0 &lt;14.0.0 (Current Release)
error </span>Command failed with exit code 1.
<span class="blue">info</span> Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>node.jsのバージョンがサポートしていないということで、node.jsをv13.14.0に下げたら今度はexpo-cliのバージョンがあっていないとエラーが出て、いろいろ調整しててよくわからなくなったので、すべて戻してexpo startしたら普通に起動した。。。。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ expo start</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code><span class="has-inline-color has-amber-color">"md-switch" is not a valid icon name for family "ionicons"</span></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>warningが出ているけどひとまず気にしない</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":829,"width":251,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-20-20.15.20-501x1024.png" alt="" class="wp-image-829" width="251" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>シュミレーターも問題なく動きました</p>
<!-- /wp:paragraph -->