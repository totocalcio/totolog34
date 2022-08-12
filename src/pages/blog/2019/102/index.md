---
slug: /102
date: "2020-05-26 12:03:56"
title: 【CSS】下線の作り方と特徴
thumbnail: 
tags: ["css"]
---
# 【CSS】下線の作り方と特徴
<!-- wp:paragraph -->
<p>たかが下線されど下線。<br>下線だけなのにうまくいかないこともたまにあります。<br>簡単にそれぞれの特徴も踏まえて説明します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>text-decoration</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":104,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-26.png" alt="" class="wp-image-104"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">text-decoration: underline;</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>一番一般的な下線です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>text-decorationの特徴</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><em>手軽</em></li><li><em>主にinline要素向き</em></li><li><em>色の変更は可能</em></li><li><em>線の太さの変更はできない</em></li><li><em>細かいmarginの設定はできない</em></li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3>text-decorationのオプション</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>これをオプションと呼んでいいのかはわかりませんが（多分間違っている）紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:image {"id":105,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-27.png" alt="" class="wp-image-105"/></figure>
<!-- /wp:image --></div></div>
<!-- /wp:group -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>text-decoration-color: red;</strong></pre>
<!-- /wp:preformatted --></div></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>色が変えられます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":110,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-28.png" alt="" class="wp-image-110"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">text-decoration-style: dashed;</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>線の種類が変更できます。他にも<span class="marker-under-blue">dotted（点線）</span>、<span class="marker-under-blue">double(二重線)</span>、<span class="marker-under-blue">wavy（波線）</span>などがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>border-bottom</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":113,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-29.png" alt="" class="wp-image-113"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">border-bottom: 1px solid&nbsp;#000;

/* テスト用コード
text-align: center;
width: 150px;
*/</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>枠線を下線として使用する方法です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>border-bottomの特徴</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><em>主にblock要素向き</em></li><li><em>padding-bottomやline-heightでテキストと下線の距離を調整できる</em></li><li><em>2行にわたるテキストには向かない</em>（こともあるがなんとかなる）</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>あくまでも<span class="bold-blue">枠線</span>であるということを意識しておきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>複数行でのborder-bottom</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":118,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-30.png" alt="" class="wp-image-118"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;p&gt;テスト&lt;br /&gt;テスト２&lt;/p&gt;

p{
  border-bottom: 1px solid&nbsp;#000;
  width: 150px;
}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>blockに対する枠線なので、複数行の場合想定した動きにならない時がある。<br>そんな時はinline要素に変更する。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":119,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-31.png" alt="" class="wp-image-119"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">p{<br>  display:inline;<br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>もちろん、そもそもinline要素に対して適用するように変更してもいい</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;p&gt;&lt;span&gt;テスト&lt;br /&gt;テスト２&lt;/span&gt;&lt;/p&gt;

p span{
  border-bottom: 1px solid&nbsp;#000;
}</pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2>background</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":123,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-32.png" alt="" class="wp-image-123"/></figure>
<!-- /wp:image -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;p>&lt;span>テスト&lt;/span>&lt;/p>

p span{
  background: linear-gradient(transparent 50%, #f00 50%) ;
}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>マーカーみたいな下線や、特殊な下線をひきたい場合はbackgroundを使用します。それ以外にもbackgroundでは様々な下線を表現することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>backgroundの特徴</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><em>手間がかかる</em></li><li><em>その分やれることが多い</em></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>最終的に困ったらbackgroundを利用すればいいのですが、linear-gradientだけでなく、repeating-linear-gradient等にも手を出し始めると使い方がよくわからなかったり、なぜかうまくいかないといったことも出てくるので、使う時はしっかり仕様を確認する必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient
</div></figure>
<!-- /wp:embed -->