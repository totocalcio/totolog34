---
slug: /813
date: '2021-09-20 01:00:00'
title: 第2回ReactNativeアプリ開発①〜Expoでプロジェクトを作成
thumbnail: /img/blog/thumbnail/2021/813/2021-09-19-12.43.48.png
tags: ['reactnative', 'expo']
---
まずは[最新のドキュメント](https://reactnative.dev/docs/environment-setup)を確認すると、ExpoCLI か ReactNativeCLI で始めることは１年前と変わらないみたい。どちらで始めようか悩んだが、必要となったら eject すればいいやと expo ではじめることにした。

## ExpoCLI をインストール

インストールされているか確認

```sh
$ expo-cli --version
-bash: react-native: command not found
```

あれ？去年作ってたよな・・・と思ったが去年は Windows で開発を行っていたので、今回の Mac にはインストールされていなくて当然だった。

```sh
$ npm install -g expo-cli
```

インストールが完了したら念の為確認してみる。

```sh
$ expo-cli --version
4.11.0
```

無事 ExpoCLI がインストールされました

## プロジェクトを作成する

```sh
$ expo init sample
```

expo init "プロジェクト名"で実行するとテンプレートを選べます。

![image](../../../../images/2021/09/2021-09-19-12.18.45.png)

今回はblank(TypeScript)にしました。

## アプリを起動

```sh
$cd sample
$yarn start
```

作成したプロジェクトのディレクトリに移動して yarn start するとブラウザが起動し、QR コードを読み込むと実機で確認でき・・・ませんでした。

ちなみにの話。以前はexpo startで起動してたな・・・と思いexpo startを実行してみましたが、同様に動きました

### 使用可能なデータが見つかりません

![image](../../../../images/2021/09/IMG_3521.jpg)

なにせ１年程近く触ってないので記憶が曖昧。試しに iOS シュミレーターの起動をしてみる。

![image](../../../../images/2021/09/2021-09-19-12.31.12.png)

![image](../../../../images/2021/09/2021-09-19-12.31.20.png)

![image](../../../../images/2021/09/2021-09-19-12.33.12.png)

普通に起動した

そういえばシュミレーターの時 Expo のアプリ起動してたな、と思って実機 iPhone 確認

![image](../../../../images/2021/09/IMG_3522.jpg)

アンインストールしてますね…もう使わないと思ったんでしょう。
再インストールして、もう一度 QR コードを読み取ってみます。

![image](../../../../images/2021/09/IMG_3524.png)

無事起動できました。
