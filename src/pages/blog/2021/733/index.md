---
slug: /733
date: '2021-05-18 21:22:23'
title: NativeScript-Vueの開発環境を整える
thumbnail:
tags: ['nativescript', 'vue.js']
---

# NativeScript-Vue の開発環境を整える

いろんなサイトで紹介されていると思いますが、情報が古かったり環境が違ったりするので、こういうものはとにかく公式ドキュメントを読んで進めたほうがいいと思います。

## 公式ドキュメントに沿ってインストールしていく

[https://nativescript-vue.org/ja/docs/getting-started/quick-start/](https://nativescript-vue.org/ja/docs/getting-started/quick-start/)

まずは Vue.js 関連をインストール

```sh
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # もしくは
$ yarn install
$
$ tns run android --bundle
$ # もしくは
$ tns run ios --bundle
$
$ # 新しいHMRモードを、--bundle を --hmrに書き換えることによって試すことができます。
$ # ただ、ベータ版の機能だと気を留めておいてください。
```

```sh
$ vue init nativescript-vue/vue-cli-template nativescript-vue-tutorial

? Project name medicine-alert
? Project description Notify by time to take medicine
? Application name NativeScript-Vue Application
? Unique application identifier com.example.nativescript.application # APP ID
? Project version 1.0.0
? Author foo <hoge@fuga.com> # 自分や会社のユーザー情報
? License MIT
? Select the programming language typescript # TypeScript にしました
? Select a preset (more coming soon) Simple
? Install vuex? (state management) No
? Install vue-devtools? Yes
? Color scheme default

vue-cli · Generated "nativescript-vue-tutorial".
vue-cli · cd nativescript-vue-tutorial
vue-cli · npm install
vue-cli · tns preview
vue-cli · # or
vue-cli · tns run
```

cd <project-name>して npm install のあと、tns preview しようとしたらエラー

```sh
$ tns preview
-bash: tns: command not found
```

ここで[インストール](https://nativescript-vue.org/ja/docs/getting-started/installation/)のページにとんで NativeScript CLI をインストールする。

```sh
$ npm install -g nativescript
```

途中の選択肢は Eneter(no)を２回

```sh
✔ Do you want to help us improve NativeScript by automatically sending anonymous usage statistics? We will not use this information to identify or contact you. … no
If you are using bash or zsh, you can enable command-line completion.
✔ Do you want to enable it now? … no
```

再度 tns preview をすると正常に実行される

## NativeScript Playground アプリをインストール

tns preview をすると QR コードと App Store と Google Play の URL が出てくる。おそらく確認作業をアプリで行うということだと思うので、iPhone にインストールする。

```sh
To scan the QR code and deploy your app on a device, you need to have the NativeScript Playground app:
App Store (iOS): https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8&amp;ls=1
Google Play (Android): https://play.google.com/store/apps/details?id=org.nativescript.play
```

NativeScript Playground をインストールして QR コードを読み込もうとしたけれど、何度やってもうまくいかないと思ったら、どうやら NativeScript Preview も必要だったようで、インストールして再度 Playground で QR コードを読み込んだら同期が開始されうまく行った。
