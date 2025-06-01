---
slug: /493
date: "2020-10-22 12:59:17"
title: 'Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider'
tags: ["reactnative","expo"]
---
react-native-safe-area-context がうまくいってないというケースが多いみたいです。そしてこうなったら一旦 react-native-safe-area-context を全部削除して入れ直します。

## node_modules とロックファイルを削除

### ロックファイルを削除

- package-lock.jsonから「react-native-safe-area-context」の部分を削除。
- yarn.lockから「react-native-safe-area-context」の部分を削除。
- package.jsonからも「react-native-safe-area-context」の部分を削除。

### node_modules を削除

1. node_modules＞expo＞node_modulesに移動し、そこからreact-native-safe-area-contextを削除。
2. node_modulesのexpo＞package.jsonからreact-native-safe-area-contextを削除。
3. node_modules＞react-native-safe-area-contextを削除。

## install しなおす

`react-native-safe-area-context` を `expo install` する

```
expo install react-native-safe-area-context
```
