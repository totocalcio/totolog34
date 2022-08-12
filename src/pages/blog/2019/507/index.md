---
slug: /507
date: "2020-10-27 12:30:40"
title: iPhone11だとBottomTabNavigatorが隠れてうまく表示されない
thumbnail: 
tags: ["reactnative","expo"]
---
# iPhone11だとBottomTabNavigatorが隠れてうまく表示されない
<!-- wp:paragraph -->
<p>私の環境でのテストがiPhone11だっただけで、おそらくiPhone11じゃなくても機種によっては起こりうると思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>BottomTabNavigatorが隠れる</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":550,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/Simulator-Screen-Shot-iPhone-11-Pro-Max-2020-10-06-at-18.46.26-473x1024.png" alt="" class="wp-image-550"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>隠れるというよりは高さの領域が足りていない感じです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>SafeAreaViewを追加する</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">&lt;View&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AppTabsScreen&nbsp;/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SafeAreaView/&gt;<br>&lt;/View&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SafeAreaViewを足すだけだとこのようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":551,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/Simulator-Screen-Shot-iPhone-11-2020-10-07-at-20.18.42-473x1024.png" alt="" class="wp-image-551"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>BottomTabの領域の確保はできましたが、SafeAreaViewの領域が空白になってしまいっているのでデザインの調整としてstyleでbackgroundCororを指定します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">&lt;View&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AppTabsScreen&nbsp;/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SafeAreaView&nbsp;style={{backgroundColor:"#442c2e"}}/&gt;<br>&lt;/View&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":552,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/Simulator-Screen-Shot-iPhone-11-2020-10-07-at-20.27.26-1-473x1024.png" alt="" class="wp-image-552"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>調整ができました。</p>
<!-- /wp:paragraph -->