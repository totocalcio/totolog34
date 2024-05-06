---
slug: /102
date: '2020-05-26 12:03:56'
title: 【CSS】下線の作り方と特徴
thumbnail:
tags: ['css']
---
たかが下線されど下線。
下線だけなのにうまくいかないこともたまにあります。
簡単にそれぞれの特徴も踏まえて説明します。

## text-decoration

![image](/img/blog/contents/2020/05/image-26.png)

```css
text-decoration: underline;
```

一番一般的な下線です。

### text-decoration の特徴

- _手軽_
- _主に inline 要素向き_
- _色の変更は可能_
- _線の太さの変更はできない_
- _細かい margin の設定はできない_

### text-decoration のオプション

これをオプションと呼んでいいのかはわかりませんが（多分間違っている）紹介します。
![image](/img/blog/contents/2020/05/image-27.png)

```css
text-decoration-color: red;
```

色が変えられます。

![image](/img/blog/contents/2020/05/image-28.png)

```css
text-decoration-style: dashed;
```

線の種類が変更できます。他にもdotted（点線）、double(二重線)、wavy（波線）などがあります。

## border-bottom

![image](/img/blog/contents/2020/05/image-29.png)

```css
border-bottom: 1px solid #000;

/**  テスト用コード
text-align: center;
width: 150px;
*/
```

枠線を下線として使用する方法です。

### border-bottom の特徴

- _主に block 要素向き_
- _padding-bottom や line-height でテキストと下線の距離を調整できる_
- _2 行にわたるテキストには向かない_（こともあるがなんとかなる）

あくまでも枠線であるということを意識しておきます。

### 複数行での border-bottom

![image](/img/blog/contents/2020/05/image-30.png)

```html
<p>テスト<br />テスト２</p>

p {
  border-bottom: 1px solid #000;
  width: 150px;
}
```

block に対する枠線なので、複数行の場合想定した動きにならない時がある。
そんな時は inline 要素に変更する。

![image](/img/blog/contents/2020/05/image-31.png)

```css
p {
  display: inline;
}
```

もちろん、そもそも inline 要素に対して適用するように変更してもいい

```html
<p>
  <span>テスト<br />テスト２</span>
</p>

p span{
  border-bottom: 1px solid #000;
}
```

## background

![image](/img/blog/contents/2020/05/image-32.png)

```html
<p><span>テスト</span></p>

p span{
 background: linear -gradient(transparent 50%, #f00 50%);
}
```

マーカーみたいな下線や、特殊な下線をひきたい場合は background を使用します。それ以外にも background では様々な下線を表現することができます。

### background の特徴

- _手間がかかる_
- _その分やれることが多い_

最終的に困ったら `background` を利用すればいいのですが、`linear-gradient` だけでなく、`repeating-linear-gradient` 等にも手を出し始めると使い方がよくわからなかったり、なぜかうまくいかないといったことも出てくるので、使う時はしっかり仕様を確認する必要があります。

[https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient](https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient)

