---
slug: /303
date: "2020-08-19 22:51:47"
title: React Native + Expoで始めたらPCがクラッシュし続けた
thumbnail: 
tags: ["reactnative","expo"]
---
# React Native + Expoで始めたらPCがクラッシュし続けた
<!-- wp:paragraph -->
<p>npm startもしくはexpo startを実行すると１００％の確率でモニターがブラックアウト。PCがフリーズ。強制的に電源を落として再起動するしかなくなった。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>環境紹介</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Windows10</li><li>wsl</li><li>Visual Studio Code</li><li>Android Studio</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3>どんな経緯をたどったか</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>expo init でプロジェクト作成。npm startを行うとブラウザでExpo Developer Toolsが表示される。そしてその後クラッシュする。以前ためしに公式の手順に従って<span class="has-inline-color has-cyan-color">react-native initでプロジェクト作成した</span>時は問題なく表示されていた。しかし、おそらくこの<span class="bold-red">以前プロジェクトを作成していたことがクラッシュの原因</span>。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>エラーの内容１（Couldn't start project on Android: Error running adb）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":306,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-18_18-21-50_No-00-1024x187.jpg" alt="" class="wp-image-306"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"className":"is-style-blank-box-pink"} -->
<p class="is-style-blank-box-pink">Couldn't start project on Android: Error running adb: No Android connected device found, and no emulators could be started automatically.<br>Please connect a device or create an emulator (https://docs.expo.io/versions/latest/workflow/android-studio-emulator).<br>Then follow the instructions here to enable USB debugging:<br>https://developer.android.com/studio/run/device.html#developer-device-options. If you are using Genymotion go to Settings -&gt; ADB, select "Use custom Android SDK tools", and point it at your Android SDK directory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とりあえず<a href="https://docs.expo.io/workflow/android-studio-emulator/?redirected">リンク先</a>を確認してみる。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":307,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-25-1024x62.png" alt="" class="wp-image-307"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="bold-blue">「adbシステムに複数のバージョンがあると、エラーが発生する可能性があります</span>」らしい。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>エラー解決手順</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>そのまま紹介されている手順通りにすすめる。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>ターミナルからadbシステムのバージョンを確認する</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"is-style-blank-box-blue"} -->
<p class="is-style-blank-box-blue">$adb version</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":312,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-19_19-15-10_No-00.png" alt="" class="wp-image-312"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"className":"is-style-ng-box"} -->
<p class="is-style-ng-box">Command 'adb' not found, but can be installed with:<br>sudo apt install adb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>コマンドが使えないのでadbを「<span class="bold-red">sudo apt install adb</span>」でインストールする。<br>インストールできたら再度<span class="bold-blue">adb version</span>をたたく。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":313,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-19_19-19-9_No-00.png" alt="" class="wp-image-313"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>無事表示された</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>ディレクトリをコピーする</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"is-style-blank-box-blue"} -->
<p class="is-style-blank-box-blue">cd ~/Android/sdk/platform-tools</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>エラーの内容２（Unable to connect to adb daemon on port:5037）</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Android StudioからAMD Managerでエミュレーターを起動してみる。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":318,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-19_19-42-12_No-00.png" alt="" class="wp-image-318"/><figcaption><br></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>adbサービスを再起動する</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"is-style-ng-box"} -->
<p class="is-style-ng-box">AdbHostServer,cpp:102: Unable to connect to adb daemon on port:5037</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ポート：5037が使えない・・・？のでadbサービスを再起動する。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-blank-box-blue"} -->
<p class="is-style-blank-box-blue">adb kill-server</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-ng-box"} -->
<p class="is-style-ng-box">cannot connect to daemon at tcp:5037: Connection refused</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>エラーが出てしまったので管理者実行する。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-blank-box-blue"} -->
<p class="is-style-blank-box-blue">sudo adb kill-server</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":319,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-19_19-56-40_No-00.png" alt="" class="wp-image-319"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>再起動できた。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Android StudioからAVD Managerでエミュレーターを再度起動する。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":320,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/SnapCrab_NoName_2020-8-19_20-1-59_No-00.png" alt="" class="wp-image-320"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>エラーが消えたことを確認できたので、ここでようやく<span class="bold-red">expo start</span>をして、<span class="bold-red">Expo Developer Tools</span>から<span class="bold-red">Run on Android device/emulator</span>をしてみる。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":324,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-26-1024x204.png" alt="" class="wp-image-324"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>エラーがでてると思いきや、エミュレーターでUSB debuggingを聞かれているので<span class="bold-red">Allow</span>を選択する。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そしてもう一度ブラウザの<span class="bold-red">Expo Developer Tools</span>で<strong><span class="bold-red">Run on Android device/emulator</span></strong>をクリックする</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":325,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-27-1024x293.png" alt="" class="wp-image-325"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ようやくこれでビルドが完了しました！！！</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>おまけ：うまくエミュレーターが動いてない</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>エミュレーターを下から上へスワイプするとメニュー画面が出るので、<span class="bold-blue">Expo</span>をクリック（タップ）</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":326,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/名称未設定-1.png" alt="" class="wp-image-326"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ブラウザの<strong><span class="bold-red">Expo Developer Tools</span></strong>にあるURLをエミュレーターの入力欄にコピペする。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":328,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/08/image-28.png" alt="" class="wp-image-328"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>表示できた！</p>
<!-- /wp:paragraph -->