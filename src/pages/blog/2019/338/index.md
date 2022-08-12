---
slug: /338
date: "2020-08-25 11:37:33"
title: React Nativeでアプリを作る①～導入
thumbnail: 
tags: ["reactnative"]
---
# React Nativeでアプリを作る①～導入
<!-- wp:paragraph -->
<p>現在プログラミングの学習としてはJavaScriptばかりをしているけれど、Reactもモチベーション維持で触りたい、ということでReact Nativeをさわることにした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Expoをつかう</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>React Native Cliでもできますが、Expoにしました。公式もExpo Cliを推奨しています。</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p><strong>If you are new to mobile development</strong>, the easiest way to get started is with Expo CLI.</p><cite>https://reactnative.dev/docs/environment-setup</cite></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>なんでExpoがいいのかはこちらの動画がわかりやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:core-embed/youtube {"url":"https://youtu.be/Mp0-Avyi8Ec","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/Mp0-Avyi8Ec
</div></figure>
<!-- /wp:core-embed/youtube -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>React Native Paperをつかう</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://reactnativepaper.com/">React Native Paper</a>はReactでいうMaterial UIでGoogleのマテリアルデザインをReact Native用にカスタマイズしたコンポーネントのコレクションです。<br>デザイン力が皆無なので利用を決めました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Glitchをつかう</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":360,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-41.png" alt="" class="wp-image-360"/><figcaption>ここまで作ってだいぶイメージわくようになった</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>デザイン力が思った以上に無さすぎて、Material Desiginのサイトを眺めていたら、Build a Material Themeを知り、<a href="https://glitch.com/">Glitch</a>というサービスを使うことにしました</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://material.io/resources/build-a-material-theme"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://material.io/resources/build-a-material-theme
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Glitchについては<a href="https://laboradian.com/glitch/">こちらのページ</a>で詳しく紹介されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>React Navigationをつかう</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>React Native Paperでデザイン部分を頼っても、画面遷移ってどうすればいいんだ・・・ということに気づきました。React Nativeの画面遷移のライブラリはいくつかありますが、<a href="https://reactnavigation.org/">React Navigation</a>を使うことにしました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>詳しくは<a href="https://codezine.jp/article/detail/12150">こちらのサイト</a>で紹介されています。というより今からReact Native始めるって方はこの連載は全部目を通して損はないと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://codezine.jp/article/corner/772"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://codezine.jp/article/corner/772
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ここまできてようやく開発のスタート地点に立てた気がします…（たっててほしい）</p>
<!-- /wp:paragraph -->