---
slug: /813
date: "2021-09-20 01:00:00"
title: 第2回ReactNativeアプリ開発①〜Expoでプロジェクトを作成
thumbnail: スクリーンショット-2021-09-19-12.43.48.png
tags: ["reactnative","expo"]
---
# 第2回ReactNativeアプリ開発①〜Expoでプロジェクトを作成
<!-- wp:paragraph -->
<p>まずは<a href="https://reactnative.dev/docs/environment-setup">最新のドキュメント</a>を確認すると、ExpoCLIかReactNativeCLIで始めることは１年前と変わらないみたい。どちらで始めようか悩んだが、必要となったらejectすればいいやとexpoではじめることにした。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>ExpoCLIをインストール</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>インストールされているか確認</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ expo-cli --version
-bash: react-native: command not found</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>あれ？去年作ってたよな・・・と思ったが去年はWindowsで開発を行っていたので、今回のMacにはインストールされていなくて当然だった。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm install -g expo-cli</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>インストールが完了したら念の為確認してみる。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ expo-cli --version<br>4.11.0</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>無事ExpoCLIがインストールされました</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>プロジェクトを作成する</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ expo init sample</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>expo init "プロジェクト名"で実行するとテンプレートを選べます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":814,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-19-12.18.45-1024x181.png" alt="" class="wp-image-814"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>今回は<span class="marker">blank(TypeScript)</span>にしました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>アプリを起動</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$cd sample
$yarn start</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>作成したプロジェクトのディレクトリに移動してyarn startするとブラウザが起動し、QRコードを読み込むと実機で確認でき・・・ませんでした。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><span class="fz-12px"><span class="fz-14px"><span class="blue">ちなみにの話。以前はexpo startで起動してたな・・・と思いexpo startを実行してみましたが、同様に動きました</span></span></span></pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3>使用可能なデータが見つかりません</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":815,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/IMG_3521.jpg" alt="" class="wp-image-815"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>なにせ１年程近く触ってないので記憶が曖昧。試しにiOSシュミレーターの起動をしてみる。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":816,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-19-12.31.12.png" alt="" class="wp-image-816"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":817,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-19-12.31.20-1024x137.png" alt="" class="wp-image-817"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":818,"width":269,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-19-12.33.12-538x1024.png" alt="" class="wp-image-818" width="269" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-blue">普通に起動した</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そういえばシュミレーターの時Expoのアプリ起動してたな、と思って実機iPhone確認</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":819,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/IMG_3522.jpg" alt="" class="wp-image-819"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>アンインストールしてますね…もう使わないと思ったんでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>再インストールして、もう一度QRコードを読み取ってみます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":821,"width":288,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/IMG_3524-576x1024.png" alt="" class="wp-image-821" width="288" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>無事起動できました。</p>
<!-- /wp:paragraph -->