---
slug: /210
date: '2020-08-03 13:27:00'
title: Stray start tag script.エラーの解消
thumbnail:
tags: ['html']
---

# Stray start tag script.エラーの解消
[W3C](https://validator.w3.org/)の HTML チェックでStray start tag script.のエラーが発生した時の対処法の一つとして紹介しておきます。

#### 確認事項

- 開始タグと閉じタグの数は合っている。
- Swiper を使用している。

## 該当コード

```html
</body>
<?php wp_footer(); ?>
<?php if ( is_home() || is_front_page() ) { ?>
<script>
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
});
<?php } ?>
</script>
</html>
```

## 原因

**\</body\>タグの外に出してはいけません。**

\<head\>内だとうまく Swiper が動かなかったので外に出したのですが、\</body\>の外にまで出すとエラーになるようです。（もちろん動きはします）

## 解決策

**\<body\>の中に記述します。**

```html
<?php if ( is_home() || is_front_page() ) { ?>
<script>
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }
})
</script>
<?php } ?>
</body>
<?php wp_footer(); ?>
</html>
```
