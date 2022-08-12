---
slug: /558
date: "2020-11-04 13:34:13"
title: react-native-sliderの小数点が想定外の表示
thumbnail: image.png
tags: ["reactnative"]
---
# react-native-sliderの小数点が想定外の表示
<!-- wp:paragraph -->
<p>そもそも浮動小数点の問題は多分これです。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://stackoverflow.com/questions/2100490/floating-point-inaccuracy-examples/2100502#2100502"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://stackoverflow.com/questions/2100490/floating-point-inaccuracy-examples/2100502#2100502
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2>Sliderの設定を確認する</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":559,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-11.png" alt="" class="wp-image-559"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;Slider
step={0.2}
minimumValue={1}
maximumValue={4}
minimumTrackTintColor="#ffffff"
maximumTrackTintColor="#442c2e"
onValueChange={(weight) => setWeight(weight)}
thumbTintColor="#d9376e"
value={weight}
/></pre>
<!-- /wp:preformatted -->

<!-- wp:image {"id":560,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-12.png" alt="" class="wp-image-560"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>setWeightのタイミングで調整してみる</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>制作したアプリではweightを複数箇所で使用している。それならば、基準値を自然数にして、setWeightのタイミングで計算してしまえばよい…かと思えばそう単純ではない。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>例えば次のようにコードを変更するとする。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">step={2}
minimumValue={10}
maximumValue={40}
{(weight) => setWeight(weight/10)}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>すると表示は確かに小数点第一位となるが、毎回weightがレンダリングされ、weightの数値と紐付いているスライダーの表記がおかしくなってしまう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>関数を用意して調整する</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>関数を用意して表示するタイミングでの調整を試す。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">const calcWeight = (weight) =&gt; weight / 10</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>weightで呼び出していたところを関数呼び出しに変更</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":562,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-13.png" alt="" class="wp-image-562"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":563,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-14.png" alt="" class="wp-image-563"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-red">weight</span>の部分を<span class="bold-red">calcWeight(weight)</span>に書き換えた。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":564,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-15.png" alt="" class="wp-image-564"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>想定通りの表示を実現することができた。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Math.floorを使用する</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>解決できたとおもわれたがしぶとく残っていた。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":574,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-16.png" alt="" class="wp-image-574"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Math.floorをつけて制御する。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":577,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-18.png" alt="" class="wp-image-577"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>きっともっとスマートな解決法はあると思うけれど、一旦は解決した。解決はしたが、全てにMath.floorをつけるという、力技のように思えるので、またリファクタリングすることにする。</p>
<!-- /wp:paragraph -->