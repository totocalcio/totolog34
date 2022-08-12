---
slug: /647
date: "2020-11-19 15:11:17"
title: ImagePickerでカメラロールのPermissionがgranted：falseなのにアクセスできてしまう
thumbnail: 
tags: ["reactnative","expo"]
---
# ImagePickerでカメラロールのPermissionがgranted：falseなのにアクセスできてしまう
<!-- wp:image {"id":648,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/11/image-5.png" alt="" class="wp-image-648"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>公式ドキュメントを参考にしたはずだけど、初回起動時のPermissionで拒否したらずっとalertが出るようになってしまうし、その上拒否したにも関わらず強行突破でカメラロールにアクセスできてしまう。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://docs.expo.io/versions/latest/sdk/imagepicker/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://docs.expo.io/versions/latest/sdk/imagepicker/
</div></figure>
<!-- /wp:embed -->

<!-- wp:image {"id":649,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/11/image-6.png" alt="" class="wp-image-649"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>公式にImagePickerの別のページがあったのでそっちのコードを参考にしてみた。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://docs.expo.io/tutorial/image-picker/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://docs.expo.io/tutorial/image-picker/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>「写真を選ぶ」を押すとAlertが表示され、カメラロールへのアクセスを拒否してくれるが、一度拒否したらアプリ上から許可の設定を行う導線が消えてしまうので不親切。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Alertの場合再度Permissionの処理を行いたいが、Alertは処理を待ってくれないので工夫しなければならない。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":650,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/11/image-7.png" alt="" class="wp-image-650"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>そこでReactNativeのAlertを利用する。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://reactnative.dev/docs/alert"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://reactnative.dev/docs/alert
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>本当は再度許可するかどうかのウィンドウを出したかったのだけど、うまくいかなかったので直接設定画面をひらくようにする。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":652,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/11/image-8.png" alt="" class="wp-image-652"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これで一応、無許可でカメラロールにアクセスすることも回避できて、許可していなかった場合に設定できる導線も確保できた。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>と、思ったらやはりAndroidだと設定画面にいかないので処理を分ける必要がある。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":656,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/11/image-9.png" alt="" class="wp-image-656"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Androidは許可していなかったら毎回許可するかのウィンドウがでるので、<br>メッセージのみの表示にした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ひとまずこれで目的は達成できた。</p>
<!-- /wp:paragraph -->