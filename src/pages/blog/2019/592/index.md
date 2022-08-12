---
slug: /592
date: "2020-10-29 20:20:00"
title: 【CSS】デザインで1px以下のborderが指定された時の対処法
thumbnail: image-30.png
tags: ["css"]
---
# 【CSS】デザインで1px以下のborderが指定された時の対処法
<!-- wp:paragraph -->
<p>cssでborderに1px以下の値を設定できないのはご存知でしょうか。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それでもPhotoshopなどでは1px以下を設定できてしまうので、デザイナーは何も気にせず1px以下を設定してくることがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな時の対処法です。（ごまかす方法とも言えるかもしれません）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>borderの紹介</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>ノーマルなborder</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":596,"width":669,"height":136,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-25.png" alt="" class="wp-image-596" width="669" height="136"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>画像なので環境によっては見え方が違うと思いますがこれがまず普通の1px borderです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>0.5px border</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":598,"width":637,"height":165,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-27.png" alt="" class="wp-image-598" width="637" height="165"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これが0.5px borderです。やっぱり細い。この見た目を実現したい。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>錯覚で細くする(hex)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":601,"width":619,"height":113,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-28.png" alt="" class="wp-image-601" width="619" height="113"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>若干細くなる</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":602,"width":408,"height":251,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-29.png" alt="" class="wp-image-602" width="408" height="251"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>たしかに0.5pxに近づいているように見える。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただこれは#000だから簡単なだけで、普通のカラーだったら毎回近い色を探してられません。そんな時におすすめなのが<span class="bold-red">透過設定法</span>です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>透過設定法（rgbaで設定する）</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>透過設定法なんて名前は適当です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>結局これも錯覚によるものですが、この方法の良いところはどんな色のデザインを渡されても、何も考えずに設定できるところです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>方法は簡単。<span class="bold-red">borderの幅の数値をアルファ値に入れるだけ！</span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":603,"width":461,"height":281,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-30.png" alt="" class="wp-image-603" width="461" height="281"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一緒！！！！もう一緒！！！もちろん<a href="https://totolog34.com/444/" data-type="URL" data-id="https://totolog34.com/444/">前回</a>の16進数(Hex)8桁で設定しても構いません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これでもう1px以下のborderにも困りませんね(*´∀｀)</p>
<!-- /wp:paragraph -->