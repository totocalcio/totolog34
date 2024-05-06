---
slug: /303
date: '2020-08-19 22:51:47'
title: React Native + Expoで始めたらPCがクラッシュし続けた
thumbnail:
tags: ['reactnative', 'expo']
---
npm start もしくは expo start を実行すると１００％の確率でモニターがブラックアウト。PC がフリーズ。強制的に電源を落として再起動するしかなくなった。

## 環境紹介

- Windows10
- wsl
- Visual Studio Code
- Android Studio

### どんな経緯をたどったか

expo init でプロジェクト作成。npm startを行うとブラウザでExpo Developer Toolsが表示される。そしてその後クラッシュする。以前ためしに公式の手順に従ってreact-native initでプロジェクト作成した時は問題なく表示されていた。しかし、おそらくこの以前プロジェクトを作成していたことがクラッシュの原因。

## エラーの内容１（Couldn't start project on Android: Error running adb）

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-18_18-21-50_No-00.jpg)

```
Couldn't start project on Android: Error running adb: No Android connected device found, and no emulators could be started automatically.
Please connect a device or create an emulator (https://docs.expo.io/versions/latest/workflow/android-studio-emulator).
Then follow the instructions here to enable USB debugging:
https://developer.android.com/studio/run/device.html#developer-device-options. If you are using Genymotion go to Settings -> ADB, select "Use custom Android SDK tools", and point it at your Android SDK directory.
```

とりあえず[リンク先](https://docs.expo.io/workflow/android-studio-emulator/?redirected)を確認してみる。

![image](/img/blog/contents/2020/08/image-25.png)

「adb システムに複数のバージョンがあると、エラーが発生する可能性があります」らしい。

### エラー解決手順

そのまま紹介されている手順通りにすすめる。

### ターミナルから adb システムのバージョンを確認する

```sh
$adb version
```

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-19_19-15-10_No-00.png)

```
Command 'adb' not found, but can be installed with:
sudo apt install adb
```

コマンドが使えないのでadbを「sudo apt install adb」でインストールする。
インストールできたら再度adb versionをたたく。

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-19_19-19-9_No-00.png)

無事表示された

### ディレクトリをコピーする

```sh
cd ~/Android/sdk/platform-tools
```

## エラーの内容２（Unable to connect to adb daemon on port:5037）

Android Studio から AMD Manager でエミュレーターを起動してみる。

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-19_19-42-12_No-00.png)<figcaption>
</figcaption>

### adb サービスを再起動する

```
AdbHostServer,cpp:102: Unable to connect to adb daemon on port:5037
```

ポート：5037が使えない・・・？のでadbサービスを再起動する。

```sh
adb kill-server
```
```
cannot connect to daemon at tcp:5037: Connection refused
```

エラーが出てしまったので管理者実行する。

```sh
adb kill-server
```

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-19_19-56-40_No-00.png)

再起動できた。
Android Studio から AVD Manager でエミュレーターを再度起動する。

![image](/img/blog/contents/2020/08/SnapCrab_NoName_2020-8-19_20-1-59_No-00.png)

エラーが消えたことを確認できたので、ここでようやくexpo startをして、Expo Developer ToolsからRun on Android device/emulatorをしてみる。

![image](/img/blog/contents/2020/08/image-26.png)

エラーがでてると思いきや、エミュレーターでUSB debuggingを聞かれているのでAllowを選択する。

そしてもう一度ブラウザのExpo Developer ToolsでRun on Android device/emulatorをクリックする

![image](/img/blog/contents/2020/08/image-27.png)

ようやくこれでビルドが完了しました！！！

## おまけ：うまくエミュレーターが動いてない

エミュレーターを下から上へスワイプするとメニュー画面が出るので、Expoをクリック（タップ）

![image](/img/blog/contents/2020/08/1.png)

ブラウザの**Expo Developer Tools**にある URL をエミュレーターの入力欄にコピペする。

![image](/img/blog/contents/2020/08/image-28.png)

表示できた！
