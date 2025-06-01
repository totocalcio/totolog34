---
slug: /css2023
date: '2024-01-15 15:07'
title: '2023年実装されたCSSの機能をいろいろ使ってみた'
thumbnail: css2023.png
tags: ['CSS']
---
## 概要
去年ブログを書くつもりだったけど年をまたいでしまった。

2023年も[Interop 2023](https://wpt.fyi/interop-2023)の取り組みもあってか、沢山の機能がブラウザに実装された。

とは言っても、新しい機能はなかなか実務ですぐに使う機会もなく、使い方がいまいちピンとこないものもあったので、いろいろと機能を詰め込んだWebサイトを作った。2023年だけでなく、ここ数年実装された機能も含まれている。
無理やり詰め込んだ機能もあるけど、なぜ使ったか、どういう使い方をしたかなどを簡単に紹介。

※ 記事内の「全ブラウザ」はChrome, Edge, Safari, Firefoxを指します。

### 作ったサイト
- [ポケミクファンサイト](https://pokemiku-fun-site.pages.dev/)
- [ソースコード / Github](https://github.com/totocalcio/pokemiku-fun-site)

ポケミクって何？という方は[公式](https://www.project-voltage.jp/)を見てください。

### 使用した技術
- Vue.js
- Nuxt3

## @layer
[@layer / MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@layer)  
`Interop 2022` で実装され、すでに全ブラウザで使用可能。

> @layer は CSS のアットルールで、カスケードレイヤーを宣言するために使用し、また複数のカスケードレイヤーがある場合に、優先順位を定義するためにも使用することができます。

[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/pages/index.vue#L31)
```css
@import url('~/assets/css/destyle.css') layer(base);
```

### @layer を使ってみて
安易に使おうとすると今後自分の首を締めることになりそうだし、実務で使おうものなら、考えてCSS設計しないと大きな負債となりそうと感じて、なかなか使う機会がこなかった。使用しているサイトもなかなかお目にかかることはないけど、唯一脳死でやってしまってもいいかなと考えてるのが `base` レイヤーとして設定すること。リセットCSSであったり、`FLOCSS` でいう `Foundation` レイヤーにあたるものはレイヤー設定して、レイヤー未設定CSSが必ず適用されるようにする。

## @scope
[CSS Cascading and Inheritance Level 6 / W3C](https://drafts.csswg.org/css-cascade-6/#scoped-styles)  
現在 `chromium` ベースの `Chrome` と `Edge` のみ。今後もどうなるかまだわからない。

### @scope 簡易説明
- スコープ内の要素にのみスタイルを適用する。
- 詳細度が同じ場合、スコープルートへ近いCSSが適用される近接性という概念がある。

### @scope 実装例
[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/main/components/MonsterBall/MonsterBall.vue)

```html
<div class="monster-ball" :class="{ 'is-shake': isShake }">
  <div class="top"></div>
  <div class="button"></div>
  <div class="bottom"></div>
</div>
```
```css
@scope (.monster-ball) {
  // スコープルートに設定した自身へのスタイルは:scope疑似クラスを使用する。
  :scope {
    ...
    container-type: size;
    container-name: monsterBall;
  }
  // ここのコンテナクエリは後述
  @container monsterBall (width > 0px) {
    .top {
      ...
    }
    .bottom {
      ...
    }
    .button {
      ...

      &::before {
        ...
      }
    }
  }
}
```

### @scope を使ってみて
`@scope` も、`@layer` 同様に気軽に使えない。理由として、たしかにスコープ内へのスタイルの適用だけど、`ShadowDOM` のようなカプセル化ではないので、スコープ外から簡単に影響を受けてしまうため、使い方が限定されてしまう。  
メリットとしては、`BEM` による長くなりがちなクラス名を、近接性を利用することで短縮することができる。但し、実装例のような `.top` や `.button` といったクラス名はどこで使われてもおかしくないので、メリットと引き換えに大きすぎる制約が発生してしまう。その代わりに今回は他に影響が出ないように全てのコンポーネントで `@scope` を使用したので堅牢にはなったかもしれない…(Scoped CSSに任せよう)

## color-mix()
[color-mix() / MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value/color-mix)  
全ブラウザで使用可能

### color-mix() 実装例
[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/components/MonsterBall/MonsterBall.vue#L107)
```css
background-color: color-mix(in srgb, $bg_color_top, black 10%);
```

### color-mix() を使ってみて
`color-mix()` は[以前の記事](/color-mix)でも紹介したけど、個人的にめちゃくちゃ使いやすい。気軽に使えるので重宝している。今回みたいに「もうちょっと色を明るくしたい、暗くしたい」という時に `#fff` や `#000` を混ぜて調整したり、`opacity` で薄くしたり使うときもある。但し、デザインがしっかり決まっていればこんな小細工する必要はない…

## Trigonometric functions
[Trigonometric functions in CSS / web.dev](https://web.dev/articles/css-trig-functions)  
いわゆるCSS三角関数。全ブラウザで使用可能。

### Trigonometric functions 実装例
[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/main/components/MonsterBall/MonsterBallMenu.vue)
```html
<li
  v-for="(item, index) in distMenuList"
  :key="index"
  class="item"
  :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
  :style="{ '--index': index }"
>
```
```css
@scope (.monster-ball-menu-list) {
  @container layout (width > 0px) {
    .item {
      ...
      &.is-open {
        animation: fadeIn 0.5s ease-in-out forwards;
      }
    }
  }
}
@mixin fadeTranslate() {
  --angle: calc(200deg + calc(140deg / 4 * var(--index)));
  --x: calc(cos(var(--angle)) * clamp(120px, 20vw, 300px));
  --y: calc(sin(var(--angle)) * clamp(120px, 20vw, 300px));
  translate: calc(var(--x) - 50%) calc(var(--y) - 50%);
}

@keyframes fadeIn {
  0% {
    width: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    @include fadeTranslate();
  }
}
```

### Trigonometric functions 使ってみて
使い方については、ICS MEDIAの記事を参考にしすぎているので、そちらを見てください。
- [CSSの三角関数を理解しよう！sin()とcos()でできる表現](https://ics.media/entry/230126/)
CSS三角関数は、今のところ円形上に要素を配置する以外の使い方を見たことがないので、もっと違う有効な使い方があれば知りたい。

## Container Queries
[CSS コンテナークエリー / MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_container_queries)  
全ブラウザで使用可能。

### Container Queries 実装例
[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/components/MonsterBall/MonsterBall.vue#L105)

```css
$button_size: 46cqmin;
$button_inner_size: 18cqmin;

@scope (.monster-ball) {
  :scope {
    ...
    container-type: size;
    container-name: monsterBall;
  }
  @container monsterBall (width > 0px) {
    ...
    .button {
      background-color: $bg_color_bottom;
      width: $button_size;
      height: $button_size;
      border-radius: 50%;
      border: 4px solid $border_color;
      position: absolute;
      top: calc(50% - ($button_size / 2));
      left: calc(50% - ($button_size / 2));
      z-index: 1;

      &::before {
        content: '';
        border: 3px solid $border_color;
        background-color: $bg_color_bottom;
        width: $button_inner_size;
        height: $button_inner_size;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - ($button_inner_size / 2));
        left: calc(50% - ($button_inner_size / 2));
      }
    }
  }
}
```

### Container Queries 使ってみて
- せっかくコンテナクエリを使ったので、レスポンシブで確認しようとしたけど、@scopeを使用したために、スマホでも見ることができなくなって、今回はいいかと諦めた。
- `vmin` であったり今回の `cqmin` は正円や正方形の場合に使う時がある。
- コンテナ単位使いたいだけだったので仕方なく `(width > 0px)` としたけど、いい方法があれば知りたい。

### Container Queries 注意点
何も考えずにコンテナクエリー使うとツールチップ等の併用で事故る可能性がある。（実務で使用して事故った。）
- [container-typeはスタッキングコンテキストをつくる](https://github.com/mdn/content/pull/26761)

## Media Queries Level 4
- [@media / MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@media)  
- [Syntax improvements in Level 4 / MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4)  
- [Media Queries Level 4(2.4.2. Evaluating Media Features in a Boolean Context) / W3C](https://w3c.github.io/csswg-drafts/mediaqueries/#mq-boolean-context)  
`Media Queries Level 4` で非常にメディアクエリーが書きやすくなった。全ブラウザ対応。

### Media Queries Level 4 簡易説明（実装分）
- @media(hover:hover)を省略して書けるようになった。
- range記法が書きやすくなった。

### Media Queries Level 4 実装例
[該当ソースコード(hover)](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/components/MonsterBall/MonsterBall.vue#L89)

```css
.monster-ball-button {
  position: relative;
  z-index: 1;
  transition: 0.25s;
  @media (hover) {
    &:hover {
      filter: brightness(1.1);
    }
  }
}
```

[該当ソースコード(range記法)](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/components/VideoDialog.vue#L86)
```css
@scope (.youtube-dialog) {
  :scope {
    padding: 0;
    aspect-ratio: 16/9;
    width: 100dvmin;
    ...
    @media (width < 768px) {
      width: calc(100dvmin - 4rem);
    }
  }
}
```

### Media Queries Level 4 使ってみて
`range` 記法は、`@media screen and (min-width: 900px)` って結局どっち！？といつもなるし、ブレークポイント増えると非常にわかりづらくなったりするので、直感的になって非常に書きやすくなった。

## Individual Transform Properties
[Finer grained control over CSS transforms with individual transform properties / web.dev](https://web.dev/articles/css-individual-transform-properties)  
全ブラウザ対応

### Individual Transform Properties 簡易説明
- `transform` プロパティで指定していた `<transform-function>` を個別に設定できるようになった。
- `translate`, `rotate`, `scale`の3種類。
  - `skewX()` や `matrix()` などは対応していない。

### Individual Transform Properties 実装例
[該当ソースコード](https://github.com/totocalcio/pokemiku-fun-site/blob/f8da4b3791a41dff1a8194536b3a1b9480a1cf8e/components/MonsterBall/MonsterBall.vue#L147)

```css
.is-shake {
  animation: shake 1s ease 3;
}
.is-load {
  animation: roll 0.7s linear 3, move 2.1s linear;
}

@keyframes shake {
  0% {
    translate: 0;
    rotate: 0;
  }
  25% {
    translate: -10px 0;
    rotate: -30deg;
  }
  50% {
    translate: 10px 0;
    rotate: 30deg;
  }
  75% {
    translate: 0;
    rotate: 0;
  }
}
@keyframes move {
  0% {
    margin-left: 100vw;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    margin-left: 0;
  }
}
@keyframes roll {
  from {
    rotate: 360deg;
  }
  to {
    rotate: 0deg;
  }
}
```

### Individual Transform Properties 使ってみて
プロパティが独立したことにより、記述量も少なくなり、可読性もあがったし、何より複数のアニメーションを簡単に設定できるようになったので非常に使いやすくなった。
