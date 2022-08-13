---
slug: /32
date: '2020-05-20 18:45:40'
title: WEBフォントの使い方＜サーバー、Adobe、Google＞
thumbnail:
tags: ['css']
---

# WEB フォントの使い方＜サーバー、Adobe、Google ＞

WEB フォントの使い方について説明します。画像が多めの説明です。

## サーバーに直接フォントをアップロード

### フォントを準備する

まず使いたいフォントをローカルで用意します。

![image](../../../../images/2020/05/image.png)

必要ならばコンバーターを使用して変換もします。

[https://convertio.co/ja/font-converter/](https://convertio.co/ja/font-converter/)

準備ができたら[FFFTP](https://forest.watch.impress.co.jp/library/software/ffftp/)等でサーバーにアップロードします。

![image](../../../../images/2020/05/image-1.png)

### CSS の記述

```css
@font-face {
  font-family: 'HelveticaNeue';
  src: url('font/HelveticaNeue-Thin.eot'); /* IE9 Compat Modes */
  src: url('font/HelveticaNeue-Thin.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('font/HelveticaNeue-Thin.woff') format('woff'),
    /* Modern Browsers */ url('font/HelveticaNeue-Thin.ttf') format('truetype'); /* Safari, Android, iOS */
}

.txt {
  font-family: 'HelveticaNeue';
}
```

あらかじめ宣言しておいて、適用させたい部分で font-family で設定した名称を設定します。

## Adobe Fonts（有料）

[https://fonts.adobe.com/my_fonts](https://fonts.adobe.com/my_fonts)

Adobe CC に加入していると Adobe Fonts を無料で利用できます。
今回は私の普段の使い方を例に説明します。

![image](../../../../images/2020/05/image-2.png)

使用したいフォントを選びます。

![image](../../../../images/2020/05/2.jpg)

「Web プロジェクトに追加」します。

![image](../../../../images/2020/05/image-3.png)

「新規プロジェクトを作成」を 選択するとプロジェクト名を入力できるようになるので、入力します。

![image](../../../../images/2020/05/image-4.png)

種類が多い場合は「＋さらに５個を表示」をクリックします。

![image](../../../../images/2020/05/image-5.png)

使用するフォントを選んだら作成します。

![image](../../../../images/2020/05/3.jpg)

\<script\>タグはコピーして\<head\>に貼り付けます。

```css
.medium {
  font-family: source-han-serif-japanese, serif;
  font-weight: 500;
  font-style: normal;
}
```

あとはフォントを適用したい部分で CSS をそのまま貼り付けます。

![image](../../../../images/2020/05/4.jpg)

もしも CSS を忘れてしまったら、
「My Adobe Fonts」→「Web プロジェクト」→「プロジェクトを編集」を選ぶと上記の画面になるので、「CSS をコピー」でいける。

## Google Fonts（無料）

まずは[Google Fonts](https://fonts.google.com/)のサイトへいきます。

![image](../../../../images/2020/05/image-6.png)

検索ボックスで使用したいフォントを探します。

![image](../../../../images/2020/05/image-7.png)

使いたいフォントを片っ端から「+ Select this style」します。
もちろん複数のフォントも選べます。

![image](../../../../images/2020/05/5.jpg)

しかし選び過ぎには注意です。読み込みデータがその分重くなってしまいます。
選んだ後に「必要ないな」となった時は「－」で削除します。

![image](../../../../images/2020/05/image-9.png)

使用するフォントを選んだら「Embed」を選択します。

![image](../../../../images/2020/05/image-10.png)

\<link\>タグは\<head\>タグ内に貼り付けます。

```css
.noto {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.ex-light {
  font-family: 'Source Code Pro', monospace;
  font-weight: 200;
  font-style: italic;
}
```

CSS もそのまま貼り付けますが、斜体や太さなどは追加で記述します。

![image](../../../../images/2020/05/7.jpg)

数値等は Review の部分を見れば簡単にわかります。
