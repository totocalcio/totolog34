---
slug: /444
date: "2020-10-28 17:32:14"
title: 【CSS】カラーコード＋透過を１６進数(Hex8桁)とrgbaで実装
thumbnail: image-15.png
tags: ["css"]
---
# 【CSS】カラーコード＋透過を１６進数(Hex8桁)とrgbaで実装
<!-- wp:heading -->
<h2>backgroundとopacityを分けるとうまくいかない</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここによくあるボタンのデザインがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":582,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-19.png" alt="" class="wp-image-582"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>CSSを設定するために数値を見てみます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":589,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-24.png" alt="" class="wp-image-589"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-blue">Hex：#E9952C</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そして</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":584,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-21.png" alt="" class="wp-image-584"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-green">不透明度：80%</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>もしもこの2種類のプロパティを素直にかいた場合、下記のようになるかもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">background-color:<strong>#</strong>E9952C<br>opacity:0.8</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかしこれではテキストも透過されてしまうので、カラーコードに対して透過を設定しないといけません。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>16進数(Hex)で設定する</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>デザインソフトではHex値が6桁表示になっていますが、8桁で設定することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>8桁にすると下二桁は透明度を指します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>アルファ値の数値はこちらが参考になります。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://qiita.com/CUTBOSS/items/6166cf79b9f18c45a010"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://qiita.com/CUTBOSS/items/6166cf79b9f18c45a010
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>つまり<span class="marker-blue"><strong>#</strong>E9952Cと透明度80%</span>は、<span class="marker"><span class="marker-red"><strong>#</strong>E9952C+CC</span></span>となるので、CSSはこのように設定します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">background-color:<strong>#</strong>E9952CCC</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>rgbaで設定する</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>rgbaの場合はデザインソフトでrgbで表示するように切り替えます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":585,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-22.png" alt="" class="wp-image-585"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":586,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-23.png" alt="" class="wp-image-586"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>切り替えたらそのまま数値と透明度(今回は0.8)を設定すればおしまいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">background-color:rgba(233,149,44,0.8)</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Sassで設定する※一番簡単</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hex8桁はアルファ値を調べないといけないし、rgbaはいちいちカラーコードを切り替えないといけない＆手打ちだし、手間がかかります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="marker-red"><strong>そんな問題をSassが解決してくれます。</strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-ok-box"} -->
<p class="is-style-ok-box">rgba(<strong>#</strong>E9952C,0.8)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sassならばrgbaに16進数を設定しても変換してくれます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>もちろん変数も使えます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-blank-box-pink"} -->
<p class="is-style-blank-box-pink">$color:<strong>#</strong>E9952C;<br>$alpha:0.8;<br>rgba($color,$alpha)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>引数だって。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">background-color:&nbsp;rgba($color:#E9952C,$alpha:0.8);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>開発環境やプロジェクトによってはSassが使えないこともあると思うので、その時は手間ですが通常のCSSで設定しましょう。</p>
<!-- /wp:paragraph -->