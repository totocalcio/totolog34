---
slug: /827
date: '2021-09-21 01:09:00'
title: 第2回ReactNativeアプリ開発②〜UIコンポーネント選定
thumbnail: /img/blog/thumbnail/2021/827/2021-09-19-11.24.43.png
tags: ['ReactNative', 'Expo']
---
ReactNative では UI コンポーネントのライブラリがいくつかありますが、今回は[Material Kit React Native](https://www.creative-tim.com/product/material-kit-react-native)を使うことにしました。なんとなくデザインが一番しっくりきたからです。

## テンプレートをダウンロード

[前回の記事](https://totolog34.com/813/)で expo init でプロジェクトを作成しましたがもう一度最初から作り直します。
理由は ReactNativePaper のように npm インストールして使うのではなく、そもそもコンポーネントが定義されているキットとして配布されているためです。ダウンロードで zip ファイルを落とすことができますが、git clone の方が個人的に楽なのでそうします。

```sh
git clone https://github.com/creativetimofficial/material-kit-react-native.git sample
```

cloneもしくは、サイトからzipファイルを落としてきたらディレクトリに移動して、関連パッケージをインストールするためにyarn installもしくはnpm installします。

```sh
$ yarn install
```

インストールが完了したら yarn start します。

```sh
$ yarn start
```

## エラー

```sh
$ yarn start
yarn run v1.22.10
$ cross-env REACT_EDITOR=code expo start
ERROR: Node.js version 14.0.0 is no longer supported.
expo-cli supports following Node.js versions:
>=10.13.0 <11.0.0 (Active LTS)
>=12.0.0 <13.0.0 (Active LTS)
>=13.0.0 <14.0.0 (Current Release)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

node.js のバージョンがサポートしていないということで、node.js を v13.14.0 に下げたら今度は expo-cli のバージョンがあっていないとエラーが出て、いろいろ調整しててよくわからなくなったので、すべて戻して expo start したら普通に起動した。。。。

```sh
$ expo start
```

```
"md-switch" is not a valid icon name for family "ionicons"
```

warning が出ているけどひとまず気にしない

![image](/img/blog/contents/2021/09/2021-09-20-20.15.20.png)

シュミレーターも問題なく動きました
