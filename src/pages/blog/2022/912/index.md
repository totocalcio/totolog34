---
slug: /912
date: '2022-07-10 11:56:06'
title: Gatsbyでブログ作る③〜ESLint、Prettier
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ['gatsby']
---

# Gatsby でブログ作る ③〜ESLint、Prettier

## ESLint

探したら[公式](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/)に手順が書いてあった。Gatsby には ESLint のセットアップが組み込まれているので、必要に応じて設定を追加するだけでよいらしい。

```sh
npm install --save-dev eslint-config-react-app
```

```sh
touch .eslintrc.js
```

**.eslintrc.js**

```javascript
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}
```

## eslint-config-prettier

フォーマットは Prettier にまかせて、ESLint のフォーマットは無効化します。

```sh
npm install --D eslint-config-prettier
```

.eslintrc.js を編集

```javascript
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    // prettierを追加。記述は最後にすること
    'prettier',
  ]
}
```

## Prettier

公式のドキュメント内を検索すると、[スターターのドキュメント](https://www.gatsbyjs.com/docs/creating-a-starter/#basic-requirements)がひっかかったのですが、スターターキットに設定が含まれているだけ、という内容なのでインストールと設定を追加します。

```sh
npm i -D prettier
```

```sh
touch .prettierrc
```

**.prettierrc**

```javascript
{
"trailingComma": "es5",
"tabWidth": 2,
"semi": false,
"singleQuote": true
}
```

この設定に関しては個人、もしくはプロジェクトそれぞれだと思うので、[公式の設定](https://prettier.io/docs/en/options.html)を見ながら好きなものを設定していくとよいと思います。私の場合は深く考えずずっと同じ設定です。必要になったら随時変更です。

```sh
touch .prettierignore
```

次にフォーマットしたくない設定ファイルの作成です。
**.prettierignore**
```javascript
.cache
package.json
package-lock.json
public
tsconfig.json
.eslintrc.js
*.d.ts
```

フォーマットかけたくないのも個人やプロジェクトによると思うので自由でいいと思います。

### package.json 修正

prettier は保存時に自動実行されるわけではないので package.json に設定を追加します。
（保存時に自動実行する場合は VSCode など、エディタ側の設定が必要です）

```javascript
  "scripts": {
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "fmt": "prettier --write src/**/*.{tsx,ts,css}"
  },
```

設定を追加したらコマンドを実行します

```sh
npm run fmt
```

```sh
> totolog34@1.0.0 fmt
> prettier --write src/**/*.{tsx,ts,css}

src/components/header.tsx 377ms
src/pages/404.tsx 26ms
src/pages/about.tsx 6ms
src/pages/index.tsx 21ms
src/components/css/utility.module.css 54ms
```

フォーマットができました。
