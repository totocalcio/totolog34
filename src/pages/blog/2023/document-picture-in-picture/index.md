---
slug: /document-picture-in-picture
date: '2023-09-10 19:01'
title: 'Document Picture-in-Picture APIで簡単なWebアプリを作成'
thumbnail: pip.png
tags: ['Vue']
---
## Document Picture-in-Picture APIについて

最新バージョンのChrome116で`Document Picture-in-Picture API`が実装されました。

`Picture-in-Picture API`自体はすでに実装されていたのですが、使用できるのは`video`要素のみでした。
今回のアップデートにより、`video`要素に限らず、ウェブページ上の任意の要素を`Picture-in-Picture`モードで表示できるようになりました。

## 作成したWebアプリ

`Document Picture-in-Picture API`の機能を使って、簡単なWebアプリを作成しました。
テキストエリアに入力した内容を`Picture in Picture`モードで表示します。
それ以外の機能としては、文字色と文字の大きさを簡単に変えられるようになっていることと、`1/319`の確率で**宇宙一かわいいうさぎの画像が表示**されます。（強制的に表示させる隠しコマンドもある。）

[MEMO IN](https://memo-in.vercel.app/)

## コードの紹介

今回`Nuxt`でつくったので`Vue.js`のコードで紹介します。

JavaScriptのコードは[参考サイト](https://developer.chrome.com/docs/web-platform/document-picture-in-picture/#examples)を参照してください。

### ウインドウを表示する

`requestWindow()`にはオプションとして`width`と`height`を渡しています。
```vue
<script lang="ts" setup>
...
const inputVal = ref<string>('')
const pipContainer = ref<HTMLElement | null>(null)
const pipBody = ref<HTMLElement | null>(null)
const pipWindow = ref<WindowWithPictureInPicture | null>(null)
const isPip = ref<boolean>(false)
const onOpen = async () => {
  isPip.value = true
  const option = {
    width: 300,
    height: 300,
  }
  // Picture-in-Picture ウィンドウを開く.
  pipWindow.value = await window.documentPictureInPicture.requestWindow(option)
  // 入力されたテキストを Picture-in-Picture ウィンドウに挿入する.
  pipWindow.value.document.body.append(pipBody.value)
}
</script>
<template>
  <main>
    <textarea v-model="inputVal" ></textarea>
    <div ref="pipContainer">
      <div ref="pipBody">{{ inputVal }}</div>
    </div>
    <button v-if="!isPip" type="button" @click="onOpen" aria-pressed="false">開く</button>
    <button v-else type="button" @click="onClose" aria-pressed="true">閉じる</button>
  </main>
</template>
```

### ウインドウを閉じる
```vue
<script lang="ts" setup>
const onClose = async () => {
  isPip.value = false
  // Picture-in-Picture ウィンドウを閉じる.
  pipWindow.value?.close()
}
</script>
```

### ウインドウを閉じた時のイベント
```vue
<script lang="ts" setup>
const onOpen = async () => {
  ...
  pipWindow.value.addEventListener('pagehide', (event: Event) => {
    pipContainer.value?.append(pipBody.value as string | Node)
    isPip.value = false
  })
}
</script>
```

### Demo
ここまでのコードをまとめたものは下記を参考にしてください。
- [CodeSandBox(ソースコード)](https://codesandbox.io/p/sandbox/wizardly-wildflower-nrhln8?file=/src/components/DocumentPip.vue:1,1)
- [CodeSandBox(demo)](https://nrhln8-5173.csb.app/)

### 注意点
`Picture in Picture`ウィンドウは元ウィンドウからCSSが引き継がれません。そのため`JavaScript`で`CSS`をコピーする必要があります。
- [参考](https://developer.chrome.com/docs/web-platform/document-picture-in-picture/#copy-style-sheets-to-the-picture-in-picture-window)

以前はオプションで`copyStyleSheets`を指定するのみでよかったのですが、議論の末に削除されたという経緯があります。
- [Remove copyStyleSheets](https://github.com/WICG/document-picture-in-picture/pull/79)

## まとめ
Chrome116で実装された`Document Picture-in-Picture API`について紹介しました。  
現在はChrome,Edgeのみしか使用できませんが、helpやtipsなどの表示であったり、今回作成したWebアプリのように、常にデスクトップの見える位置に配置するといった使い方で、利用価値のある場面もあるのかなと思いました。

## 参考
- [New in Chrome 116](https://developer.chrome.com/blog/new-in-chrome-116/)
- [Picture-in-Picture for any Element, not just \<video\>](https://developer.chrome.com/docs/web-platform/document-picture-in-picture/)
