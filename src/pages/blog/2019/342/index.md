---
slug: /342
date: "2020-08-25 10:53:45"
title: またExpoでエラー。QRコードが表示されない
thumbnail: 
tags: ["expo"]
---
# またExpoでエラー。QRコードが表示されない
<!-- wp:paragraph {"className":"is-style-alert-box"} -->
<p class="is-style-alert-box">試行錯誤の内容も書いてあります。結論は最後に書いてあります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":354,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-39.png" alt="" class="wp-image-354"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>本当にすぐにエラーが出る・・・Expo Developer ToolsもQRコードが表示されていない。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":343,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-29.png" alt="" class="wp-image-343"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>何も表示されません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="bold-red">npm start android</span>してみたら</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":344,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-30.png" alt="" class="wp-image-344"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>めっちゃエラーでた。<span class="bold-blue">package.jsonが見つからない</span>ってそのパスにはないから当然なんだけど、どうすればいいのかな・・・とりあえずpackage.json見てみる。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":346,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-31.png" alt="" class="wp-image-346"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-blue">npm start android</span>じゃなくて<span class="bold-blue">expo start --android</span>してみる</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":347,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-32.png" alt="" class="wp-image-347"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>エミュレーターがうまくいってないみたい</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":349,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-34.png" alt="" class="wp-image-349"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Android studioもエラーだしてた。前もみたよこのエラー・・・</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":350,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-35.png" alt="" class="wp-image-350"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>adbを再移動した。その後エミュレーターを起動して<span class="bold-blue">expo start</span>から<span class="bold-blue">Run on Android device/emulator</span>する</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":351,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-36.png" alt="" class="wp-image-351"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":352,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-37.png" alt="" class="wp-image-352"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ふりだしに戻る・・・もうなんなんだ・・・</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":353,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-38.png" alt="" class="wp-image-353"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>調べてもまったくわからないのでexpoをアップデートすることにした</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":357,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/名称未設定-1-1.png" alt="" class="wp-image-357"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>表示された</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>QRコードが表示されなくなったら（エミュレーターがExpoを認識しなくなったら）、どうしようもない場合expo updateする</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->