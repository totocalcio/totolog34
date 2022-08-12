---
slug: /64
date: "2020-05-21 19:00:26"
title: 【WordPress】スパム対策に特化したプラグインを入れてみよう
thumbnail: 
tags: ["wordpress"]
---
# 【WordPress】スパム対策に特化したプラグインを入れてみよう
<!-- wp:paragraph -->
<p>今回入れるプラグインは３つです。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Akismet Anti-Spam</li><li>Wordfence Security</li><li>SiteGuard WP Plugin</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Akismet Anti-Spam</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>WordPressをインストールすると最初からインストールされているAkismetですが、無料の範囲内でできるとこまで設定します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><strong>Akismet</strong>のアカウントを設定する</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":66,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-11.png" alt="" class="wp-image-66"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>プラグインの画面で大きく目立つアカウント設定ボタンがあるのでクリック。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":67,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-12.png" alt="" class="wp-image-67"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>そのまま「<span class="bold-red">Akismetアカウントを設定</span>」へ進みます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":68,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-13.png" alt="" class="wp-image-68"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「<span class="bold-red">SET UP YOUR AKISMET ACCOUNT</span>」をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":69,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-14.png" alt="" class="wp-image-69"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「<span class="bold-red">Get Personal</span>」をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":70,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-15.png" alt="" class="wp-image-70"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>右側の金額のスライダーを￥０に動かします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":71,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-16.png" alt="" class="wp-image-71"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4>Your Email Address</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>認証コードが届きますのでメールアドレスを設定</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>First Name　/　Last Name</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>名前を入力</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Personal Site URL where you will use Akismet:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回Akismetを登録するサイトのURLを設定</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>３つのチェックボックス</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>全てにチェックを入れます。入れないと登録できません。もしもチェック項目に該当する場合は有料の商用プランを選択する必要があります。&nbsp;<br><br><span class="bold-blue">I don’t have ads on my site</span> ＝ サイトに広告がない<br><span class="bold-blue">I don’t sell products/services on my site</span> ＝ サイトで商品やサービスを販売していない<br><span class="bold-blue">I don’t promote a business on my site</span> ＝ サイトでビジネスの宣伝をしていない</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>全ての項目が記入できたら「<span class="bold-red">CONTINUE WITH PERSONAL SUBSCRIPTION</span>」をクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>認証コード入力</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":72,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-2-1.jpg" alt="" class="wp-image-72"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>上記の画面に遷移したら先程入力したメールBOXを開きます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":76,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-2.png" alt="" class="wp-image-76"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>届いたメールに書いてあるコードを入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":77,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-3.png" alt="" class="wp-image-77"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>メールBOXを更新するとAPI KEYが届いています。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>WordPress側にAPI KEYを設定</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここまできてようやくWordPressの管理画面に戻ります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":78,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-17.png" alt="" class="wp-image-78"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-red">Manually enter an API key</span>をクリックし、先程のAPI KEYを入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":79,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-4.png" alt="" class="wp-image-79"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これで設定完了です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Wordfence Security</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":80,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-18.png" alt="" class="wp-image-80"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>プラグインを検索してインストールし、有効化します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":83,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-21.png" alt="" class="wp-image-83"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>メールアドレスの登録を促されるので登録します。<br>WordPressやWordfenceのニュースを受け取るかどうか選びます。どちらでもいいです。<br>プライバシーポリシーにはチェックを入れましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":84,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-22.png" alt="" class="wp-image-84"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「<span class="bold-blue">CONTINUE</span>」をクリックするとライセンスキーの入力の画面に遷移しますが、持っていないので「<span class="bold-blue">No Thanks</span>」を選びます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>以上でインストールは完了ですが、インストール後の詳細設定はこちらの記事が参考になります。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://easy-wordpress.work/wordpress/security-wordfence/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://easy-wordpress.work/wordpress/security-wordfence/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>SiteGuard WP Plugin</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":86,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-23.png" alt="" class="wp-image-86"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>プラグインを検索してインストールし、有効化します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":87,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/image-24.png" alt="" class="wp-image-87"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>プラグインを有効化すると強制的にログインページのURLが変更されます。<br>個人のブログでは問題ないのですが、客先等で共有している場合は変更しない方がいいかもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":88,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-5.png" alt="" class="wp-image-88"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>左のメニューから「<span class="bold-blue">SiteGuard</span>」→「<span class="bold-blue">ログインページ変更</span>」→「<span class="bold-red">ON/OFF</span>」で変更できます。また、このページではログインページのURLも確認できます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SiteGuardの詳細設定はこちらが参考になります。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://webst8.com/blog/wordpress-siteguard/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://webst8.com/blog/wordpress-siteguard/
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":4} -->
<h4>通知を消す</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>常時表示されているのは気になるので消します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":89,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/05/名称未設定-6.png" alt="" class="wp-image-89"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「<span class="bold-blue">DISMISS</span>」と「<span class="bold-blue">Yes. enable auto update</span>」を選択すると表示が消えます。</p>
<!-- /wp:paragraph -->