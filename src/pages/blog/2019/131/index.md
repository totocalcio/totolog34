---
slug: /131
date: "2020-05-27 15:04:27"
title: 【CSS】flexかgridか。レスポンシブデザインで不要なコードを増やさないために。
thumbnail: 名称未設定-1.jpg
tags: ["css"]
---
# 【CSS】flexかgridか。レスポンシブデザインで不要なコードを増やさないために。
<!-- wp:paragraph -->
<p>アイキャッチ画像のようなデザインをコーディングする際、どのようにコードを書きますか？flexとgridでそれぞれ考えてみます。<br><span class="fz-14px">ちなみにfloatは好きじゃないので使いません。</span></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>flexの場合</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>HTML</h3>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;p class="title sp">title&lt;/p>
&lt;div class="flex">
  &lt;div class="photo">&lt;img src="flex.jpg" alit="">&lt;/div>
  &lt;div class="textBox">
    &lt;p class="title pc">title&lt;/p>
    &lt;p class="text">text text …&lt;/p>
  &lt;/div>
&lt;/div></pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3>CSS</h3>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">.flex {<br>  display:flex;<br>}<br>.sp{<br>  display:none;<br>}<br><br>@media all and (max-width: 767px) {<br>  .flex{<br>    display:block;<br>  }<br>  .pc{<br>    display:none;<br>  }<br>  .sp{<br>    display:block;<br>  }<br>  .title{<br>    text-align:center;<br>  }<br>  .photo{<br>    width:50%;<br>    margin:0 auto;<br>  }<br>  .photo img{<br>    width:100%;<br>  }<br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>flexの場合どうしてもPC用とSP用でコードを記述しなければならない</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>gridの場合</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>HTML</h3>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">&lt;div class="grid">
  &lt;div class="photo">&lt;img src="grid.jpg" alit="">&lt;/div>
  &lt;p class="title">title&lt;/p>
  &lt;p class="text">text text …&lt;/p>
&lt;/div></pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3>CSS</h3>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">.grid{<br>  display: grid;<br>  justify-content: center;<br>  grid-template-columns: 200px 300px;<br>  grid-template-rows: 50px auto;<br>  grid-template-areas:<br>    "photo title"<br>    "photo text"<br>}<br>.photo{<br>  grid-area: photo;<br>}<br>.title{<br>  grid-area: title;<br>}<br>.text{<br>  grid-area: text;<br>}<br>@media all and (max-width: 767px) {<br>  .grid{<br>    display:block;<br>  }</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>gridではエリアを決めてそこに当てはめていけるので、余計なコードを増やさなくていいい、ということもあるかもしれません。</p>
<!-- /wp:paragraph -->