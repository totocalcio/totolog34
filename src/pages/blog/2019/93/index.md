---
slug: /93
date: "2020-05-22 18:59:04"
title: ウィンドウサイズが可変で要素を中央維持する（左右）
thumbnail: 名称未設定-2-2.jpg
tags: ["css"]
---
# ウィンドウサイズが可変で要素を中央維持する（左右）
<!-- wp:paragraph -->
<p>CSSを学び始めた初期で躓いたやつです。<br>考え方はこうです。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>親要素の<span class="bold-blue">半分の位置にする</span></li><li>子要素の幅を<span class="bold-blue">半分戻す</span></li><li><span class="bold-blue">中心が合う</span></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>説明はいいからコードだけほしいという方は最後まで飛ばしてください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>親要素の半分の位置にする</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":96,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-2-3.jpg" alt="" class="wp-image-96"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>親を基準にして位置調整を行うので<span class="bold-red">position</span>を使います。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">親{<br>  position:relative;<br>}<br>子{<br>  position:absolute;<br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>これで親要素を基準に子要素の位置を決められるようになりました。まずは半分の位置にしたいのですが、</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">子{
  position:absolute;
  left:250px;
}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>とかやってしまうと、可変の時に中心がずれるのでやってはいけない。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">子{<br>  position:absolute;<br>  <span class="bold-red">left:50%;</span><br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>これで<span class="bold-red">子要素の頭の位置が常に中心</span>になりました。ただし頭の位置なので、子要素の中心とはまだあっていません。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>子要素の幅を<strong>半分戻す</strong></h2>
<!-- /wp:heading -->

<!-- wp:image {"id":98,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-3-1.jpg" alt="" class="wp-image-98"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ここで注意するのは<span class="bold-blue">子要素のサイズも可変だとうまくいかない</span>ことです。例えば子要素がimgとかでウィンドウサイズに合わせて可変するようでしたら固定します。（あくまで今回は）</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">子{<br>  position:absolute;<br>  left:50%;<br>  width:80px;<br>  <span class="bold-red">margin-left:-40px;</span><br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2><strong>中心が合う</strong>（完成コード）</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>子要素のwidthを固定して、その半分をマイナスで戻せば完成です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":100,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-6.jpg" alt="" class="wp-image-100"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>最後にコードをまとめておきます。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">親{<br>  position:relative;<br>}<br>子{<br>  position:absolute;<br>  left:50%;<br>  width:80px;<br>  margin-left:-40px;<br>}</pre>
<!-- /wp:preformatted -->