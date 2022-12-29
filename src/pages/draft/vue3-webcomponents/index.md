---
slug: /vue3-webcomponents
date: '2022-09-26 15:49'
title: Vue3でWebComponents作る
thumbnail: 
tags: ['vue.js','web-components']
---
## インストール
cliをインストールする必要はない
```sh
npm create vite@latest
```

引数を設定してプロジェクトを作成する
今回は Vue.js + TypeScript なので`vue-ts`にする

```sh 
npm create vite@latest web-components -- --template vue-ts
```

インストールができたらディレクトリを移動してパッケージをインストールして起動してみる

```sh
Done. Now run:

  cd web-components
  npm install
  npm run dev
```

## eslint,prettier
### eslintをインストール
関連パッケージをまとめてインストール
```
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue
```
.eslintrc.cjsファイルを作成する

node18とVite3を使う場合、.jsを使うと効かない可能性があるので、.eslintrcファイルの拡張子を.cjsにする。

```cjs
module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
  },
}
```

### package.jsonのスクリプトに追加
```json
"lint": "eslint --fix src/*.{ts.vue} && eslint --fix src/**/*.{ts.vue}"
```

`vite-env.d.ts` は `npm run lint` でひっかかるので、`.eslintignore`を作成
```
vite-env.d.ts
```

### eslint-plugin-vuejs-accessibilityを追加
アクセシビリティのlint
```
npm install -D eslint-plugin-vuejs-accessibility
```
`.eslintrc.cjs` 修正
```cjs
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:vuejs-accessibility/recommended",

  ],
  "plugins": [
    "vue",
    "@typescript-eslint",
    "vuejs-accessibility"
  ],
```

### prettier
prettier関連をインストール
```
npm i -D prettier @vue/eslint-config-prettier
```
`.prettierrc.cjs` を作成
```cjs
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 160,
  trailingComa: 'all'
}
```

package.jsonにscript追加
```json
"fmt": "prettier -w src/*.{ts.vue} && prettier -w src/**/*.{ts.vue}"
```

## Vue Axe
開発中にアクセシビリティをチェックすることができる。
```
npm i -D axe-core vue-axe@next
```
Vue Axe を開発中のみ有効化するために main.ta を編集。
```ts
import { createApp, h, Fragment, App as IApp } from "vue";
import './style.css'
import App from "./App.vue";

const setup = async () => {
  let app: IApp<Element>;
  if (import.meta.env.DEV) {
    const VueAxe = await import("vue-axe");
    app = createApp({
      render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)]),
    });
    //コントラストは無視する
    app.use(VueAxe.default,{
      config: {
        rules: [
          { id: "color-contrast", enabled:false },
        ]
      },
    })
  } else {
    app = createApp(App);
  }

  return app;
};

setup().then((app) => app.mount("#app"));
```

vue-axe.d.tsの型定義ファイル追加
```
declare module "vue-axe"
```
vite.config.tsも修正
```ts
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["axe-core"],
  },
});
```

## Sassにする
scssの当て方は2種類ある

```
npm i -D sass
```
sassをインストールするだけでstyleにかくことができる

### import する
