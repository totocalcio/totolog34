---
slug: /907
date: '2022-07-04 23:46:35'
title: Gatsbyでブログ作る②〜MaterialUI導入
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ['react', 'gatsby']
---

# Gatsby でブログ作る ②〜MaterialUI 導入

[前回の続き](https://totolog34.com/901/)。

そんなにデザインに凝る予定もないので styled-components で書こうと思っていたけど、少し触ってみたいという理由で MaterialUI を導入することにした。

### 前置き

Gatsby の公式で別のページにあった JS→TS の[マイグレーション](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript)見たら手間がかかりそうだったのと、[TypeScript](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/) で初期化について書かれていたのを見たので、結局やり直した。init の選択項目はほぼ一緒。

## MaterialUI 導入

[https://mui.com/](https://mui.com/)

[公式の手順](https://mui.com/material-ui/getting-started/installation/)に沿って導入していく

```sh
npm install @mui/material @emotion/react @emotion/styled
```

これであとは Component を import して使っていくだけ。

### リセット CSS

リセット CSS も導入の手順が[公式](https://mui.com/material-ui/react-css-baseline/#global-reset)にありますが、MUI が提供しているものを使います。中身は[normalize.css](https://github.com/necolas/normalize.css)に近いらしい。ルートコンポーネントで MUI のリセット CSS を import して JSX 内にかくだけでいいようです。

```javascript
// Index.tsx
import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const IndexPage = () => {
  return (
    <main>
      <CssBaseline />
      <Box component="main">
      </Box>
    </main>
  )
}

export default IndexPage
```

### レスポンシブ対応とブレークポイント

sx という属性をコンポーネントに指定することでブレークポイントとして扱うことができる。

```javascript
<AppBar component="nav">
  <Box sx={{ p: { xs: 0, sm: 1}}}>
    ...
  </Box>
</AppBar>
```

```javascript
<Toolbar sx={{minHeight:{ xs: 32, sm: 56 }}}/>
```

### CSS Modules

MUI コンポーネントの一部を上書きしたいので CSS Modules も使うことにした。いつもは styled-components を採用するけど、[公式](https://www.gatsbyjs.com/docs/tutorial/part-2/#style-components-with-css-modules)にも書いてあったのでなんとなく CSS Modules。使ったこともなかったし。

#### 型宣言が見つかりません(ts2307)

```javascript
import { link } from './module/link.module.css'
```

link コンポーネントの一部のスタイルを書き換えたかったので、link.module.css ファイルを作成し、import。しかし TypeScript のエラー。

```sh
モジュール './module/link.module.css' またはそれに対応する型宣言が見つかりません。
```

型宣言が見つからないということなので作ります。
/src/typings/css.d.ts ファイルを作成し下記のコードを記述

```javascript
declare module '*.css'
```

これでエラーが消えました。
