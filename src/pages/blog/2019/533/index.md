---
slug: /533
date: "2020-10-26 17:19:08"
title: iOSでTextInputが見えなくならないようにKeyboardAvoidingViewを設定したらanroidでバグる
thumbnail: 
tags: ["reactnative","expo"]
---
# iOSでTextInputが見えなくならないようにKeyboardAvoidingViewを設定したらanroidでバグる
<!-- wp:paragraph -->
<p>Androidだと何も設定をしなくてもTextInputにフォーカスをしたらキーボードが表示されて、キーボード分せり上がって、入力ボックスが見えるけれど、iOSだと隠れてしまう。そのためにKeyboardAvoidingViewでラップする必要がある。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">&lt;KeyboardAvoidingView&nbsp;style={{&nbsp;flex:&nbsp;1&nbsp;}}&nbsp;behavior="padding"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかしこれでは不十分。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":535,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-10.png" alt="" class="wp-image-535"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>何も設定していない状態</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":534,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2020/10/image-9.png" alt="" class="wp-image-534"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-red"><strong>behavior="padding"</strong></span>を設定したことによって想定外の動きになってしまう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>想定した動きにするためにはiOSで条件分岐し、値を設定する。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"is-style-sticky-gray"} -->
<p class="is-style-sticky-gray">&lt;KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}></p>
<!-- /wp:paragraph -->