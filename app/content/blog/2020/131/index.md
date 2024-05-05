---
slug: /131
date: '2020-05-27 15:04:27'
title: 【CSS】flexかgridか。レスポンシブデザインで不要なコードを増やさないために。
thumbnail: /img/blog/thumbnail/2020/131/1.jpg
tags: ['css']
---
アイキャッチ画像のようなデザインをコーディングする際、どのようにコードを書きますか？flex と grid でそれぞれ考えてみます。
ちなみに float は好きじゃないので使いません。

## flex の場合

### HTML

```html
<p class="title sp">title</p>
<div class="flex">
  <div class="photo"><img src="flex.jpg" alit=""></div>
  <div class="textBox">
    <p class="title pc">title</p>
    <p class="text">text text …</p>
  </div>
</div>
```

### CSS

```css
.flex {
  display:flex;
}
.sp{
  display:none;
}

@media all and (max-width: 767px) {
  .flex{
    display:block;
  }
  .pc{
    display:none;
  }
  .sp{
    display:block;
  }
  .title{
    text-align:center;
  }
  .photo{
    width:50%;
    margin:0 auto;
  }
  .photo img{
    width:100%;
  }
}
```

flex の場合どうしても PC 用と SP 用でコードを記述しなければならない

## grid の場合

### HTML

```html
<div class="grid">
  <div class="photo"><img src="grid.jpg" alit=""></div>
  <p class="title">title</p>
  <p class="text">text text …</p>
</div>
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
