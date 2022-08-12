---
slug: /733
date: "2021-05-18 21:22:23"
title: NativeScript-Vueの開発環境を整える
thumbnail: 
tags: ["nativescript","vue.js"]
---
# NativeScript-Vueの開発環境を整える
<!-- wp:paragraph -->
<p>いろんなサイトで紹介されていると思いますが、情報が古かったり環境が違ったりするので、こういうものはとにかく公式ドキュメントを読んで進めたほうがいいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>公式ドキュメントに沿ってインストールしていく</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://nativescript-vue.org/ja/docs/getting-started/quick-start/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://nativescript-vue.org/ja/docs/getting-started/quick-start/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>まずはVue.js関連をインストール</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template &lt;project-name&gt;
$ cd &lt;project-name&gt;
$
$ npm install
$ # もしくは
$ yarn install
$
$ tns run android --bundle
$ # もしくは
$ tns run ios --bundle
$
$ # 新しいHMRモードを、--bundle を --hmrに書き換えることによって試すことができます。
$ # ただ、ベータ版の機能だと気を留めておいてください。</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ vue init nativescript-vue/vue-cli-template nativescript-vue-tutorial

? Project name medicine-alert
? Project description Notify by time to take medicine
? Application name NativeScript-Vue Application
? Unique application identifier com.example.nativescript.application  # APP ID
? Project version 1.0.0
? Author foo &lt;hoge@fuga.com&gt;  # 自分や会社のユーザー情報
? License MIT
? Select the programming language typescript  # TypeScriptにしました
? Select a preset (more coming soon) Simple 
? Install vuex? (state management) No
? Install vue-devtools? Yes
? Color scheme default

   vue-cli · Generated "nativescript-vue-tutorial".
   vue-cli · cd nativescript-vue-tutorial
   vue-cli · npm install
   vue-cli · tns preview
   vue-cli · # or
   vue-cli · tns run</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>cd &lt;project-name&gt;してnpm installのあと、tns previewしようとしたらエラー</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ tns preview
-bash: tns: command not found</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>ここで<a rel="noreferrer noopener" href="https://nativescript-vue.org/ja/docs/getting-started/installation/" data-type="URL" data-id="https://nativescript-vue.org/ja/docs/getting-started/installation/" target="_blank">インストール</a>のページにとんでNativeScript CLIをインストールする。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm install -g nativescript</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>途中の選択肢はEneter(no)を２回</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>✔ Do you want to help us improve NativeScript by automatically sending anonymous usage statistics? We will not use this information to identify or contact you. … no<br>If you are using bash or zsh, you can enable command-line completion.<br>✔ Do you want to enable it now? … no</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>再度 tns previewをすると正常に実行される</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>NativeScript Playgroundアプリをインストール</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>tns previewをするとQRコードとApp StoreとGoogle PlayのURLが出てくる。おそらく確認作業をアプリで行うということだと思うので、iPhoneにインストールする。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>To scan the QR code and deploy your app on a device, you need to have the NativeScript Playground app:
App Store (iOS): https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8&amp;ls=1
Google Play (Android): https://play.google.com/store/apps/details?id=org.nativescript.play</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>    NativeScript PlaygroundをインストールしてQRコードを読み込もうとしたけれど、何度やってもうまくいかないと思ったら、どうやらNativeScript Previewも必要だったようで、インストールして再度PlaygroundでQRコードを読み込んだら同期が開始されうまく行った。</p>
<!-- /wp:paragraph -->