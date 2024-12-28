---
_path: "/667"
date: "2020-11-25 20:03:04"
title: "【github】個人用リリース手順"
tags: ['その他']
---
リリースの手順を忘れてしまうので備忘録として。

## rebase

リリースする機能を実装し終えて、動作確認も終えたら develop ブランチを release ブランチに rebase する。

```sh
git checkout release
git rebase develop
```

rebase を終えたら release ブランチのデータをデプロイして最終確認する。

## プルリクエスト＆マージ

release ブランチから main ブランチへプルリクエストを出す。プルリクエストの内容を確認したらマージする。

## リリースタグ

main ブランチへのマージとリリースの完了全てを終えたら、リリースタグもつけておく。
