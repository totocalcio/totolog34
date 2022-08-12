---
slug: /32
date: "2020-05-20 18:45:40"
title: WEBフォントの使い方＜サーバー、Adobe、Google＞
thumbnail: 
tags: ["css"]
---
# WEBフォントの使い方＜サーバー、Adobe、Google＞
<!-- wp:paragraph -->
<p>WEBフォントの使い方について説明します。画像が多めの説明です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>サーバーに直接フォントをアップロード</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>フォントを準備する</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まず使いたいフォントをローカルで用意します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":34,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image.png" alt="" class="wp-image-34"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>必要ならばコンバーターを使用して変換もします。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://convertio.co/ja/font-converter/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://convertio.co/ja/font-converter/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>準備ができたら<a href="https://forest.watch.impress.co.jp/library/software/ffftp/">FFFTP</a>等でサーバーにアップロードします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":36,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-1-1024x100.png" alt="" class="wp-image-36"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>CSSの記述</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>@font-face {
    font-family: 'HelveticaNeue';
    src: url('font/HelveticaNeue-Thin.eot'); /* IE9 Compat Modes */
    src: url('font/HelveticaNeue-Thin.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('font/HelveticaNeue-Thin.woff') format('woff'), /* Modern Browsers */
    url('font/HelveticaNeue-Thin.ttf')  format('truetype'); /* Safari, Android, iOS */
}

.txt {
    font-family: 'HelveticaNeue';
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>あらかじめ宣言しておいて、適用させたい部分でfont-familyで設定した名称を設定します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Adobe Fonts（有料）</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://fonts.adobe.com/my_fonts"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://fonts.adobe.com/my_fonts
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p> Adobe CCに加入しているとAdobe Fontsを無料で利用できます。<br>今回は私の普段の使い方を例に説明します。 </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":42,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-2-1024x654.png" alt="" class="wp-image-42"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p> 使用したいフォントを選びます。 </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":43,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-2-1024x418.jpg" alt="" class="wp-image-43"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p> 「Webプロジェクトに追加」します。 </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":44,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-3.png" alt="" class="wp-image-44"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p> 「新規プロジェクトを作成」を 選択するとプロジェクト名を入力できるようになるので、入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":45,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-4.png" alt="" class="wp-image-45"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>種類が多い場合は「＋さらに５個を表示」をクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":46,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-5.png" alt="" class="wp-image-46"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>使用するフォントを選んだら作成します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":47,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-3.jpg" alt="" class="wp-image-47"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>&lt;script&gt;タグはコピーして&lt;head&gt;に貼り付けます。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">.medium {<br>  font-family: source-han-serif-japanese, serif;<br>  font-weight: 500;<br>  font-style: normal;<br>}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>　 あとはフォントを適用したい部分でCSSをそのまま貼り付けます。 </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":51,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-4-1024x744.jpg" alt="" class="wp-image-51"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>もしもCSSを忘れてしまったら、<br>「My Adobe Fonts」→「Web プロジェクト」→「プロジェクトを編集」を選ぶと上記の画面になるので、「CSSをコピー」でいける。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Google Fonts（無料）</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずは<a href="https://fonts.google.com/">Google Fonts</a>のサイトへいきます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":52,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-6-1024x570.png" alt="" class="wp-image-52"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>検索ボックスで使用したいフォントを探します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":53,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-7-1024x803.png" alt="" class="wp-image-53"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>使いたいフォントを片っ端から「+ Select this style」します。<br>もちろん複数のフォントも選べます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":55,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-5-1024x745.jpg" alt="" class="wp-image-55"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>しかし選び過ぎには注意です。読み込みデータがその分重くなってしまいます。<br>選んだ後に「必要ないな」となった時は「－」で削除します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":56,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-9.png" alt="" class="wp-image-56"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>使用するフォントを選んだら「Embed」を選択します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":57,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-10.png" alt="" class="wp-image-57"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>&lt;link&gt;タグは&lt;head&gt;タグ内に貼り付けます。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">.noto {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.ex-light{
  font-family: 'Source Code Pro', monospace;
  font-weight: 200;
  font-style: italic;
}</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p> CSSもそのまま貼り付けますが、斜体や太さなどは追加で記述します。 </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":59,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-7.jpg" alt="" class="wp-image-59"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>数値等はReviewの部分を見れば簡単にわかります。</p>
<!-- /wp:paragraph -->