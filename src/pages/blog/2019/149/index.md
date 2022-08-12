---
slug: /149
date: "2020-05-31 15:44:04"
title: 「JavaScriptをはじめよう」をはじめる
thumbnail: 
tags: ["道のり","javascript"]
---
# 「JavaScriptをはじめよう」をはじめる
<!-- wp:paragraph -->
<p><span class="marker-under"><strong><em>注意：この記事はよくわからないまま進めているポイントがありますが、詰まった部分もあえて共有する目的で公開しています。</em></strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://note.com/erukiti/n/nc716e70fa9a1?magazine_key=m586c4ddc9ee1"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://note.com/erukiti/n/nc716e70fa9a1?magazine_key=m586c4ddc9ee1
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><a href="https://totolog34.com/141/">前回の記事</a>の続きになりますが、完全にこちらの記事に沿って学んでいくことにしました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Nodistをインストールする</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>最新版のNodistをダウンロード</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://github.com/nullivex/nodist/releases" target="_blank">https://github.com/nullivex/nodist/releases</a>&nbsp;から最新版のexeファイルをダウンロードします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":150,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-34.png" alt="" class="wp-image-150"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>NodistSetup-v0.9.1.exe</strong>をダウンロードします。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Nodistをインストール</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":151,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-35.png" alt="" class="wp-image-151"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-under-red"><strong>Next</strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":152,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-36.png" alt="" class="wp-image-152"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-under-red"><strong>I Agree</strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":153,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-37.png" alt="" class="wp-image-153"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-under-red"><strong>Install</strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":154,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-38.png" alt="" class="wp-image-154"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-blue">待ちます</span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":155,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-39.png" alt="" class="wp-image-155"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-red">Finish</span></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Nodistを使ってNode.jsをインストール</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":156,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-40.png" alt="" class="wp-image-156"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Windows + Rで「ファイル名を指定して実行」を開いて「powershell」を実行し、「nodist」を入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":157,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-41.png" alt="" class="wp-image-157"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>エラーが出る時はPowerShellを管理者実行する必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":158,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-42.png" alt="" class="wp-image-158"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>「スタートメニュー」</strong>→<strong>「Windows PowerShell」</strong>→<strong>「Windows PowerShell」</strong>を<span class="bold-blue">右クリック</span>→<strong>「管理者として実行する」</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">Set-ExecutionPolicy Unrestricted</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Windows PowerShell</strong>が起動したら上記のコマンドを入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":159,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-43.png" alt="" class="wp-image-159"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-red">"Y"</span>を入力し（小文字のyでもいい)、<span class="bold-blue">Enter</span>を押します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":160,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-44.png" alt="" class="wp-image-160"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Nodistが動くようになりました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Node.jsの安定版（LTS）をインストールする</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><span class="marker-under"><strong><em>注意：</em></strong></span><span class="marker-under"><strong><em>ここから</em></strong></span><span class="marker-under"><strong><em>が</em></strong></span><span class="marker-under"><strong><em>よくわからないポイント</em></strong></span><span class="marker-under"><strong><em>。</em></strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://github.com/nodejs/Release" target="_blank">リリース計画</a>からLTSのバージョンを確認します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":161,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-45.png" alt="" class="wp-image-161"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><span class="bold-blue">10.x</span></strong>と<strong><span class="bold-blue">12.x</span></strong>のStatusは<span class="bold-red">LTS</span>なので、上記の場合<span class="bold-blue">12.x</span>になります。<span class="bold-green">Current</span>は最新版ですが、少し不安定かもしれないバージョンなのでLTSを選択しておくのが確実です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>PowerShellでLTSをインストール</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>LTSは12.xなので<span class="bold-red">「nodist + 12」</span>を入力しインストールします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":162,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-46.png" alt="" class="wp-image-162"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これで、LTSのバージョン12がインストールできまし...ん？</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":163,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-47.png" alt="" class="wp-image-163"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>v<span class="bold-red">10</span>.15.3</strong>・・・？<span class="bold-red">12</span>じゃない・・・？</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>うまくいかないのであれこれ試す</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":165,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-48.png" alt="" class="wp-image-165"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-red">nodist +12</span>で<span class="bold-blue">最新版をインストール</span>して、<br><span class="bold-red">nodist 12</span>で<span class="bold-blue">バージョン12を動く</span>ようにして、<br><span class="bold-red">node -v</span>で<span class="bold-blue">バージョンを確認する</span>と、<span class="bold-green">10</span>！！！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="fz-22px"><strong>なんでやねん！！！</strong></span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":166,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-49.png" alt="" class="wp-image-166"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>12の最新版じゃなくて、バージョンを完全に指定してみるもダメ。<br>あ、そうか。vをつけないといけないのかなｗ？</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":167,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-50.png" alt="" class="wp-image-167"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-green"><span class="fz-18px"><span class="fz-20px">違う、そうじゃない。</span></span></span>（らしい）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>何度やっても12が動かない。。。<br>えー、なんでだ。。。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>解決策</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><span class="bold-red"><span class="fz-24px">結論：わかりませんでした。</span></span></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":168,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-51.png" alt="" class="wp-image-168"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ある程度は調べてみましたが、リリース計画見ると10はActiveだし、動作に問題なさそうだし、ここで調べる時間を割いてももったいないという判断で切り上げます！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>いつか、誰かがコメントで教えてくれるかもしれません。。。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":174,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-52.png" alt="" class="wp-image-174"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="fz-14px"><span class="green">（これで誰かがコメントしてくれるとは</span></span><span class="fz-14px"><span class="green">今は</span></span><span class="fz-14px"><span class="green">思えないけれど・・・）</span></span></p>
<!-- /wp:paragraph -->