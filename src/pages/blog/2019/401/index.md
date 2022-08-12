---
slug: /401
date: "2020-09-29 17:19:01"
title: summaryタグの使い方に注意。構文エラーとiOSバグ。
thumbnail: 
tags: ["css","html"]
---
# summaryタグの使い方に注意。構文エラーとiOSバグ。
<!-- wp:paragraph -->
<p>HTML5で追加された&lt;summary>タグをご存知でしょうか。CSSすら不要でお手軽にアコーディオンがつくれてしまうタグです。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"http://www.htmq.com/html5/summary.shtml"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
http://www.htmq.com/html5/summary.shtml
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>しかしsummaryタグで気をつけないといけないことがいくつかありますのでご紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>summaryタグでできること</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>できないことより先にできることとして、HTMLとCSSを調整したサンプルを紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="265" theme_id="light" slug_hash="abNXMVz" default_tab="css,result" user="totocalcio"]See the Pen <a href="https://codepen.io/totocalcio/pen/abNXMVz">summary</a> by totocalcio (<a href="https://codepen.io/totocalcio">@totocalcio</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><span class="bold-red"><span class="bold-green"><span class="marker-under"><span class="bold-blue">「summary　アコーディオン」</span></span></span></span>等で検索して、<span class="marker-under"><span class="bold-blue">（アニメーションつけたいな）</span></span>って考えたらだいたい出てくるのは<span class="marker-red"><span class="bold-green"><span class="bold-red">高さを固定にする方法</span></span></span>です。全ての要素が固定ならそれも可能ですが、例えばサンプルのようにQ&amp;Aなどで答えの文字数（高さ）がばらばらだったりするとそうはいきません。<br><br>スラスラするアニメーションの設定は面倒なので、そのかわりふわっとしたアニメーションならばうまくごまかせるかもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それではここからが本題の<span class="bold-red">できないこと</span>です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>summaryタグでできないこと</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>スラスラしづらい</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>できないわけじゃないけど、使いづらい。<span class="bold-blue">できること</span>で説明した内容です。<br>いわゆるjQueryのslideToggle()的なことです。<br>高さを固定にしてtransitionを指定すれば可能ですが、レスポンシブを気にする必要もあるのにテキスト量も考えて...なんてことはやっぱり使いづらいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>flexがきかない(iOS)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>下記のサンプルコードを見て下さい。</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="265" theme_id="light" slug_hash="WNwWqdZ" default_tab="css,result" user="totocalcio"]See the Pen <a href="https://codepen.io/totocalcio/pen/WNwWqdZ">summary2</a> by totocalcio (<a href="https://codepen.io/totocalcio">@totocalcio</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>環境によっては別に問題なさそうに見える人もいるかもしれないけれど、実はiOSのみflexがきいていない。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":478,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/09/IMG_1785-576x1024.png" alt="" class="wp-image-478"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これはiOSのバグのようなので仕方ありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="bold-green">参考：</span><br><a rel="noreferrer noopener" href="https://github.com/philipwalton/flexbugs#flexbug-9" data-type="URL" data-id="https://github.com/philipwalton/flexbugs#flexbug-9" target="_blank">https://github.com/philipwalton/flexbugs#flexbug-9</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>バグの解決策</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>解決策は冒頭のコードを確認してもらえばわかると思いますが、要素を別のタグでラップして、そこにflexを設定します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし１点注意が必要で、<span class="bold-red">divタグは使えない</span>ということです。<br>もし使うと構文エラーになります。（もちろん表示はされますが）</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":479,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/09/image-18.png" alt="" class="wp-image-479"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>そういう理由でサンプルコードではspanタグを使用しています。</p>
<!-- /wp:paragraph -->