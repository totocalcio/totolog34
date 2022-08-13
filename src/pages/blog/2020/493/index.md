---
slug: /493
date: "2020-10-22 12:59:17"
title: 'Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider'
tags: ["reactnative","expo"]
---

# Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider

react-native-safe-area-context がうまくいってないというケースが多いみたいです。そしてこうなったら一旦 react-native-safe-area-context を全部削除して入れ直します。

## <span style="text-align: -webkit-match-parent;">node_modules とロックファイルを削除

### ロックファイルを削除

- <span style="text-align: -webkit-match-parent;">react-native-safe-area-context」の部分を削除。
- <span style="text-align: -webkit-match-parent;">react-native-safe-area-context」の部分を削除。
- react-native-safe-area-context**」の部分を削除。

### node_modules を削除

1. node_modules ＞ expo ＞ node_modulesに移動し、そこから**react-native-safe-area-context**を削除。
2. `node_modules` の `expo ＞ package.json`から**react-native-safe-area-context**を削除。
3. **react-native-safe-area-context**を削除。

## install しなおす

`react-native-safe-area-context` を `expo install` する

<p class="is-style-blank-box-green">expo install react-native-safe-area-context
