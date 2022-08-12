---
slug: /493
date: "2020-10-22 12:59:17"
title: Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider
thumbnail: 
tags: ["reactnative","expo"]
---
# Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider
<!-- wp:paragraph -->
<p>react-native-safe-area-contextがうまくいってないというケースが多いみたいです。そしてこうなったら一旦react-native-safe-area-contextを全部削除して入れ直します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2><span style="text-align: -webkit-match-parent;">node_modulesとロックファイルを削除</span></h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>ロックファイルを削除</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><span style="text-align: -webkit-match-parent;"><span class="marker-blue">package-lock.json</span>から「<span class="bold-green">react-native-safe-area-context</span></span>」の部分を削除。</li><li><span style="text-align: -webkit-match-parent;"><span class="marker-blue">yarn.lock</span></span>から「<span class="bold-green">react-native-safe-area-context</span>」の部分を削除。</li><li><span class="marker-blue">package.json</span>からも「<strong><span class="bold-green">react-native-safe-area-context</span></strong>」の部分を削除。</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3>node_modulesを削除</h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><li><span class="bold-green">node_modules＞expo＞node_modules</span>に移動し、そこから<span class="marker-blue"><strong>react-native-safe-area-context</strong></span>を削除。</li><li><span class="bold-green">node_modulesのexpo＞package.json</span>から<span class="bold"><span class="marker-blue">react-native-safe-area-context</span></span>を削除。</li><li><span class="bold-green">node_modules</span>＞<span class="marker-blue"><strong>react-native-safe-area-context</strong></span>を削除。</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>installしなおす</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>react-native-safe-area-contextをexpo installする</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-blank-box-green"} -->
<p class="is-style-blank-box-green">expo install react-native-safe-area-context</p>
<!-- /wp:paragraph -->