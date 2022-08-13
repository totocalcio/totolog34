---
slug: /533
date: '2020-10-26 17:19:08'
title: iOSでTextInputが見えなくならないようにKeyboardAvoidingViewを設定したらanroidでバグる
thumbnail:
tags: ['reactnative', 'expo']
---

# iOS で TextInput が見えなくならないように KeyboardAvoidingView を設定したら anroid でバグる

Android だと何も設定をしなくても TextInput にフォーカスをしたらキーボードが表示されて、キーボード分せり上がって、入力ボックスが見えるけれど、iOS だと隠れてしまう。そのために KeyboardAvoidingView でラップする必要がある。

```html
<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
```
しかしこれでは不十分。

![image](../../../../images/2020/10/image-10.png)

何も設定していない状態

![image](../../../../images/2020/10/image-9.png)

**behavior="padding"**を設定したことによって想定外の動きになってしまう。
想定した動きにするためには iOS で条件分岐し、値を設定する。

```html
<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
```
