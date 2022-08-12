---
slug: /740
date: "2021-05-21 02:01:39"
title: NativeScriptアプリでwatchOSを開発する〜プロジェクト作成からSimulator起動まで
thumbnail: 
tags: ["nativescript"]
---
# NativeScriptアプリでwatchOSを開発する〜プロジェクト作成からSimulator起動まで
<!-- wp:paragraph -->
<p>一応<a href="https://totolog34.com/733/" data-type="URL" data-id="https://totolog34.com/733/">前回</a>の続きです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>watchアプリの新規作成</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはXcodeを開く</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":741,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-1.36.24.png" alt="" class="wp-image-741"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>Create a new Xcode project</strong>をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":772,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.19.02-1024x731.png" alt="" class="wp-image-772"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>iOS App with Watch App</strong>を選択し<strong>Next</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":743,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-1.43.09-1024x721.png" alt="" class="wp-image-743"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>LanguageはSwiftではなく<strong>Objective-C</strong>を選択する。NativeScriptは現在watchOS開発ではObjective-Cしかサポートしていないため。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":744,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-1.51.53-1024x578.png" alt="" class="wp-image-744"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>NativeScriptで作成したディレクトリを選択しCreate。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>ストーリーボード</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":773,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.26.30-1024x540.png" alt="" class="wp-image-773"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>WatchKit Appから<strong>Interface.storyboard</strong>を選択する。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":747,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-19.59.41-1024x777.png" alt="" class="wp-image-747"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>右上の<strong>＋</strong>からコンポーネントを追加する</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":748,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-20.00.00-1024x741.png" alt="" class="wp-image-748"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>追加したいコンポーネントをドラッグして配置</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":749,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-20.00.12.png" alt="" class="wp-image-749"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>あとはどんどん進めてUIを作っていく</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>テストする</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":774,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.27.34.png" alt="" class="wp-image-774"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>左上の再生ボタン（▶）をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":751,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-20.10.40.png" alt="" class="wp-image-751"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Replaceを選ぶ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":790,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.40.27-1.png" alt="" class="wp-image-790"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Simulatorが起動する。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Simulatorの追加</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":777,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.36.52.png" alt="" class="wp-image-777"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>左上のWatchApp Kitをクリックして<strong>Add Additional Simulators</strong>をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":757,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-21.03.30-1024x962.png" alt="" class="wp-image-757"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>左下の＋をクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":776,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.34.28-1024x536.png" alt="" class="wp-image-776"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Paired Apple WatchにチェックをいれてNext</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":759,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-19-21.06.11-1024x532.png" alt="" class="wp-image-759"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Create！</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":778,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.35.05-1024x413.png" alt="" class="wp-image-778"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>でてきたので、作成したSimulatorを選んで再生ボタンをクリック</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":779,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.40.27.png" alt="" class="wp-image-779"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Apple WatchのSimulatorが起動したら、iOSの方も起動する</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":780,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.41.35-1024x301.png" alt="" class="wp-image-780"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>停止ボタン（■）の右側でWatchKit AppだったのをiOSに切り替えて再生ボタン（▶）をクリック。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":781,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.48.50-915x1024.png" alt="" class="wp-image-781"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>両方起動したらiPhoneのほうでApple Wacthのアプリを起動する。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":770,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-20-22.39.04-487x1024.png" alt="" class="wp-image-770"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>同期が開始される。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":792,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-2.12.44-521x1024.png" alt="" class="wp-image-792"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>完了しました</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>試しにフェイスを変更する</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":783,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.56.36-1024x871.png" alt="" class="wp-image-783"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>iPhoneからフェイスを変更して同期されない場合はSimulatorを再起動してみたりするのもいいかもしれない。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":782,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/05/スクリーンショット-2021-05-21-1.58.10-712x1024.png" alt="" class="wp-image-782"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>フェイスが変わったのが確認できた。</p>
<!-- /wp:paragraph -->