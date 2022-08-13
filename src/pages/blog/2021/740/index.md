---
slug: /740
date: '2021-05-21 02:01:39'
title: NativeScriptアプリでwatchOSを開発する〜プロジェクト作成からSimulator起動まで
thumbnail:
tags: ['nativescript']
---

# NativeScript アプリで watchOS を開発する〜プロジェクト作成から Simulator 起動まで

一応[前回](https://totolog34.com/733/)の続きです。

## watch アプリの新規作成

まずは Xcode を開く

![image](../../../../images/2021/05/2021-05-19-1.36.24.png)

**Create a new Xcode project**をクリック

![image](../../../../images/2021/05/2021-05-21-1.19.02.png)

**iOS App with Watch App**を選択し**Next**

![image](../../../../images/2021/05/2021-05-19-1.43.09.png)

Language は Swift ではなく**Objective-C**を選択する。NativeScript は現在 watchOS 開発では Objective-C しかサポートしていないため。

![image](../../../../images/2021/05/2021-05-19-1.51.53.png)

NativeScript で作成したディレクトリを選択し Create。

## ストーリーボード

![image](../../../../images/2021/05/2021-05-21-1.26.30.png)

WatchKit App から**Interface.storyboard**を選択する。

![image](../../../../images/2021/05/2021-05-19-19.59.41.png)

右上の**＋**からコンポーネントを追加する

![image](../../../../images/2021/05/2021-05-19-20.00.00.png)

追加したいコンポーネントをドラッグして配置

![image](../../../../images/2021/05/2021-05-19-20.00.12.png)

あとはどんどん進めて UI を作っていく

## テストする

![image](../../../../images/2021/05/2021-05-21-1.27.34.png)

左上の再生ボタン（▶）をクリック

![image](../../../../images/2021/05/2021-05-19-20.10.40.png)

Replace を選ぶ。

![image](../../../../images/2021/05/2021-05-21-1.40.27-1.png)

Simulator が起動する。

### Simulator の追加

![image](../../../../images/2021/05/2021-05-21-1.36.52.png)

左上の WatchApp Kit をクリックして**Add Additional Simulators**をクリック

![image](../../../../images/2021/05/2021-05-19-21.03.30.png)

左下の＋をクリック

![image](../../../../images/2021/05/2021-05-21-1.34.28.png)

Paired Apple Watch にチェックをいれて Next

![image](../../../../images/2021/05/2021-05-19-21.06.11.png)

Create！

![image](../../../../images/2021/05/2021-05-21-1.35.05.png)

でてきたので、作成した Simulator を選んで再生ボタンをクリック

![image](../../../../images/2021/05/2021-05-21-1.40.27.png)

Apple Watch の Simulator が起動したら、iOS の方も起動する

![image](../../../../images/2021/05/2021-05-21-1.41.35.png)

停止ボタン（■）の右側で WatchKit App だったのを iOS に切り替えて再生ボタン（▶）をクリック。

![image](../../../../images/2021/05/2021-05-21-1.48.50.png)

両方起動したら iPhone のほうで Apple Wacth のアプリを起動する。

![image](../../../../images/2021/05/2021-05-20-22.39.04.png)

同期が開始される。

![image](../../../../images/2021/05/2021-05-21-2.12.44.png)

完了しました

### 試しにフェイスを変更する

![image](../../../../images/2021/05/2021-05-21-1.56.36.png)

iPhone からフェイスを変更して同期されない場合は Simulator を再起動してみたりするのもいいかもしれない。

![image](../../../../images/2021/05/2021-05-21-1.58.10.png)

フェイスが変わったのが確認できた。
