---
slug: /592
date: '2020-10-29 20:20:00'
title: 【CSS】デザインで1px以下のborderが指定された時の対処法
thumbnail: /img/blog/thumbnail/2020/592/image-30.png
tags: ['css']
---
css で border に 1px 以下の値を設定できないのはご存知でしょうか。
それでも Photoshop などでは 1px 以下を設定できてしまうので、デザイナーは何も気にせず 1px 以下を設定してくることがあります。
そんな時の対処法です。（ごまかす方法とも言えるかもしれません）

## border の紹介

### ノーマルな border

![image](/img/blog/contents/2020/10/image-25.png)

画像なので環境によっては見え方が違うと思いますがこれがまず普通の 1px border です。

### 0.5px border

![image](/img/blog/contents/2020/10/image-27.png)

これが 0.5px border です。やっぱり細い。この見た目を実現したい。

## 錯覚で細くする(hex)

![image](/img/blog/contents/2020/10/image-28.png)

若干細くなる

![image](/img/blog/contents/2020/10/image-29.png)

たしかに 0.5px に近づいているように見える。
ただこれは#000 だから簡単なだけで、普通のカラーだったら毎回近い色を探してられません。そんな時におすすめなのが **透過設定法** です。

## 透過設定法（rgba で設定する）

透過設定法なんて名前は適当です。
結局これも錯覚によるものですが、この方法の良いところはどんな色のデザインを渡されても、何も考えずに設定できるところです。
方法は簡単。border の幅の数値をアルファ値に入れるだけ！

![image](/img/blog/contents/2020/10/image-30.png)

一緒！！！！もう一緒！！！もちろん[前回](https://totolog34.com/444/)の 16 進数(Hex)8 桁で設定しても構いません。
これでもう 1px 以下の border にも困りませんね(\*´∀ ｀)
