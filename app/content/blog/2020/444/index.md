---
slug: /444
date: '2020-10-28 17:32:14'
title: 【CSS】カラーコード＋透過を１６進数(Hex8桁)とrgbaで実装
thumbnail: /img/blog/2020/444/image-15.png
tags: ['css']
---
## background と opacity を分けるとうまくいかない

ここによくあるボタンのデザインがあります。

![image](../../../../images/2020/10/image-19.png)

CSS を設定するために数値を見てみます。

![image](../../../../images/2020/10/image-24.png)

`Hex：#E9952C`。そして

![image](../../../../images/2020/10/image-21.png)

`不透明度：80%`

もしもこの 2 種類のプロパティを素直にかいた場合、下記のようになるかもしれません。

```css
background-color:#E9952C
opacity:0.8
```
しかしこれではテキストも透過されてしまうので、カラーコードに対して透過を設定しないといけません。
## 16進数(Hex)で設定する

デザインソフトでは Hex 値が 6 桁表示になっていますが、8 桁で設定することができます。
8 桁にすると下二桁は透明度を指します。
アルファ値の数値はこちらが参考になります。

[https://qiita.com/CUTBOSS/items/6166cf79b9f18c45a010](https://qiita.com/CUTBOSS/items/6166cf79b9f18c45a010)

つまり`#E9952C`と`透明度80%`は、`#E9952C+CC`となるので、CSSはこのように設定します。

```css
background-color:#E9952CCC
```
## rgbaで設定する

rgba の場合はデザインソフトで rgb で表示するように切り替えます。

![image](../../../../images/2020/10/image-22.png)

![image](../../../../images/2020/10/image-23.png)

切り替えたらそのまま数値と透明度(今回は 0.8)を設定すればおしまいです。

```css
background-color:rgba(233,149,44,0.8)
```
## Sassで設定する※一番簡単

Hex8 桁はアルファ値を調べないといけないし、rgba はいちいちカラーコードを切り替えないといけない＆手打ちだし、手間がかかります。
**そんな問題を Sass が解決してくれます。**

```css
rgba(#E9952C,0.8)
```
Sassならばrgbaに16進数を設定しても変換してくれます。
もちろん変数も使えます。
```css
$color:#E9952C;
$alpha:0.8;
rgba($color,$alpha)
```
引数だって。
```css
background-color: rgba($color:#E9952C,$alpha:0.8);
```
開発環境やプロジェクトによっては Sass が使えないこともあると思うので、その時は手間ですが通常の CSS で設定しましょう。
