---
slug: /667
date: "2020-11-25 20:03:04"
title: [github]個人用リリース手順
thumbnail: 
tags: ["その他"]
---
# [github]個人用リリース手順
<!-- wp:paragraph -->
<p>リリースの手順を忘れてしまうので備忘録として。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>rebase</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>リリースする機能を実装し終えて、動作確認も終えたらdevelopブランチをreleaseブランチにrebaseする。</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">git checkout release
git rebase develop</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>rebaseを終えたらreleaseブランチのデータをデプロイして最終確認する。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>プルリクエスト＆マージ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>releaseブランチからmainブランチへプルリクエストを出す。プルリクエストの内容を確認したらマージする。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>リリースタグ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>mainブランチへのマージとリリースの完了全てを終えたら、リリースタグもつけておく。</p>
<!-- /wp:paragraph -->