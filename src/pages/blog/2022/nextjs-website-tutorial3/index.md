---
slug: /nextjs-website-tutorial3
date: '2022-09-25 12:41'
title: Next.jsでWebサイトを作る③〜コンポーネント開発
thumbnail: nextjs-logo.png
tags: ['next.js']
---
[前回](nextjs-website-tutorial2)の続き

## コンポーネント設計
コンポーネント設計ですが、以下の２つを検討しました。

- Presentational / Container
  - [参考](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern)
- Atomic Design

検討といっても、多分だけど今回ロジック書くことなんてほぼないと思うのでAtomicデザインくらいだけ意識しようかなと思います。

## Storybook
今回の規模でいるかな・・・とは思いつつも、経験のために触ってみます。  
参考：[公式](https://storybook.js.org/docs/react/get-started/introduction)

```sh
npx sb@latest init
```
※　`stories`ディレクトリの下のファイルは削除して空にしておきます。

### コンポーネント開発
簡単なコンポーネントを1つ作成します。  
`components/atoms/Button.tsx`  

```tsx
import * as React from 'react'

const Button: React.FC = () => {
  return <button>button</button>
}

export default Button
```

次にStorybookで表示するために `Button.stories.tsx` を作成しますが、その前にStorybookでパスエイリアスの設定をします。[以前](nextjs-website-tutorial/#パスエイリアス)`tsconfig.json` でエイリアスの設定をしましたが、Storybookのバンドルの設定は独立して存在しているので、Storybook側の設定、`.storybook/main.js` を変更する必要があります。

※　とても参考にしました  
[TypeScript + Gatsby + Storybook環境でimport aliasを利用する](https://tamalog.szmd.jp/storybook-absolute-imports/  )

```js
const path = require('path');

module.exports = {
  // ...
  webpackFinal: async (config) => {
    // ...
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../components'),
    };
    return config;
  },
}
```

パスエイリアスの設定を行ったので、`stories/Button.stories.tsx` を作成します。

```tsx
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '@/atoms/Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Default: Story = () => <Button />
```

Propsもなければデザインもありませんが、とりあえずstorybookに１つコンポーネントを登録することができました。

## CSS
今回styled-componentsでもなくCSS Modulesでもなくemotion(@emotion/css)にします。今までMUIやstyled-componentsを試しましたが、いつも頭の隅にあるのは「Sassでいい…」でした。そのためある程度emotionでSassの機能を使いつつ、場合によっては素Sassをつくっていく予定です。基本的に同じファイルにCSSを書いてしまって、共通化のCSSなどは外出しするようにしていきます。

参考：[公式](https://emotion.sh/docs/introduction)
