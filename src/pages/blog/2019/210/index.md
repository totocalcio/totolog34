---
slug: /210
date: "2020-08-03 13:27:00"
title: Stray start tag script.エラーの解消
thumbnail: 
tags: ["html"]
---
# Stray start tag script.エラーの解消
<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://validator.w3.org/" target="_blank">W3C</a>のHTMLチェックで<span class="bold-red">Stray start tag script.</span>のエラーが発生した時の対処法の一つとして紹介しておきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>確認事項</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>・開始タグと閉じタグの数は合っている。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>・Swiperを使用している。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>該当コード</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;/body>
&lt;?php wp_footer(); ?>
&lt;?php if ( is_home() || is_front_page() ) { ?>
&lt;script>
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
&lt;?php } ?>
&lt;/script>
&lt;/html></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>原因</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><span class="bold-red"><span class="fz-14px"><span class="fz-20px">&lt;/body>タグの外に出してはいけません。</span></span></span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;head>内だとうまくSwiperが動かなかったので外に出したのですが、&lt;/body>の外にまで出すとエラーになるようです。（もちろん動きはします）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>解決策</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><span class="bold-red">&lt;body>の中に記述します。</span></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;?php if ( is_home() || is_front_page() ) { ?>
&lt;script>
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
&lt;/script>
&lt;?php } ?>
&lt;/body>
&lt;?php wp_footer(); ?>
&lt;/html></code></pre>
<!-- /wp:code -->