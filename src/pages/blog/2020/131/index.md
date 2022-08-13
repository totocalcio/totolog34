---
slug: /131
date: '2020-05-27 15:04:27'
title: 【CSS】flexかgridか。レスポンシブデザインで不要なコードを増やさないために。
thumbnail: 1.jpg
tags: ['css']
---

# 【CSS】flex か grid か。レスポンシブデザインで不要なコードを増やさないために。

アイキャッチ画像のようなデザインをコーディングする際、どのようにコードを書きますか？flex と grid でそれぞれ考えてみます。
ちなみに float は好きじゃないので使いません。

## flex の場合

### HTML

```html
<p class="title sp">title</p>

  ![image](flex.jpg" alit="" />

    <p class="title pc">title</p>
    <p class="text">text text …</p>
```

### CSS

```css
.flex {
  display: flex;
}
.sp {
  display: none;
}

@media all and (max-width: 767px) {
  .flex {
    display: block;
  }
  .pc {
    display: none;
  }
  .sp {
    display: block;
  }
  .title {
    text-align: center;
  }
  .photo {
    width: 50%;
    margin: 0 auto;
  }
  .photo img {
    width: 100%;
  }
}
```

flex の場合どうしても PC 用と SP 用でコードを記述しなければならない

## grid の場合

### HTML

```html

  ![image](grid.jpg" alit="" />
  <p class="title">title</p>
  <p class="text">text text …</p>

```

### CSS

```css
.grid{
display: grid;
justify-content: center;
grid-template-columns: 200px 300px;
grid-template-rows: 50px auto;
grid-template-areas:
"photo title"
"photo text"
}
.photo{
grid-area: photo;
}
.title{
grid-area: title;
}
.text{
grid-area: text;
}
@media all and (max-width: 767px) {
.grid{
display:block;
}
```

grid ではエリアを決めてそこに当てはめていけるので、余計なコードを増やさなくていいい、ということもあるかもしれません。
