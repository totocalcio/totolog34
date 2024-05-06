---
slug: /nextjs-website-tutorial
date: '2022-09-17 11:08'
title: Next.jsでWebサイトを作る①〜プロジェクト作成からプラグイン設定など
thumbnail: /img/blog/thumbnail/2022/nextjs-website-tutorial/nextjs-logo.png
tags: ['next.js']
---
Webサービスでもなくブログでもない、普通の個人のホームページをNext.jsで作ろうと思います。
ただのWebサイトにNext.jsが必要かどうかは考えないこととします。

## 事前にやったこと
- [Next.js公式チュートリアル](https://nextjs.org/learn/basics/create-nextjs-app)
- [[Zenn]出来る100%TypeScript 作って学ぶNext.js + GraphQL + Prisma(上) - GCP編](https://zenn.dev/oubakiou/books/181b750dfb6838)
- [[書籍]実践TypeScript](https://book.mynavi.jp/ec/products/detail/id=104703)

## プロジェクト作成
[公式](https://nextjs.org/docs/getting-started#automatic-setup)をみながら進めます。
TypeScriptで始めていきます。必要かどうかは/

```sh
npx create-next-app@latest --typescript
```
ここからは対話式に進んでいきます。とは言ってもすぐ終わります。
```sh
Need to install the following packages:
  create-next-app@latest
Ok to proceed? (y)
```
そのままEnter
```sh
? What is your project named? › my-app
```
プロジェクト名を入力してEnter。あとは待つだけです。
```sh
Success! Created sara-website at /Users/xxx/yyy/my-app
```
OK！

### 起動してみる
```sh
cd my-app
npm run dev
```
作成したプロジェクトのディレクトリに移動して、`npm run dev` します。
```sh
> my-app@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```
ローカルサーバーが起動したら `http://localhost:3000` を開いてみます。

![image](/img/blog/contents/2022/09/2022-09-16-18.33.47.png)

表示されればOKです。

## ツール・プラグインなどの準備
### volta
voltaの記事は書いてないと思うので、参考記事を貼っておきます。

[[Zenn]Node.jsのバージョン管理にVoltaを推したい](https://zenn.dev/taichifukumoto/articles/how-to-use-volta)

```sh
volta pin node@latest
volta pin npm@latest
```
新規作成のプロジェクトなのでlatestでいいでしょう（多分）
### ESLint
このあとPrettierの設定もするので、先にインストールしておきます。
いつもは `npm` 使うんですけど、プロジェクト作成の時に `yarn.lock` ファイルが自動的にできていたので `yarn` を使っていきます。
```sh
yarn add --save-dev @typescript-eslint/eslint-plugin prettier eslint-config-prettier
```
インストールできたらESLintの設定をします。
ルートディレクトリの `.eslintrc.json` を編集。

```json
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
```

### Prettier
ルートディレクトリに `.prettierrc.json` を作成して編集
```json
{
  "singleQuote": true,
  "semi": false
}
```

### パスエイリアス
`tsconfig.json` を開いてパスエイリアスの設定をします。

```json
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["components/*"]
    }
  },
  ...
}
```

### VSCode
自動フォーマットなどの設定をします。`.vscode/settings.json` を作成して編集します。

```json
{
  // デフォルトフォーマットをPrettierにする
  "editor.defaultFormatter": "esbenp.prettier-vscode" ,
  // TypeScriptのフォーマット設定
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  // .tsxファイルのフォーマット設定
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  // ファイル保存時の自動フォーマットを有効化
  "editor.formatOnSave": true,
  // ファイル保存時にeslintのコードアクションを実行
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // node_modulesにインストールしたTypeScriptを利用する
  "typescript.tsdk": "./node_modules/typescript/lib",
  // auto importを相対パスではなく絶対パスにする
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

### 不要ファイルの削除
消したあとに「やっぱり使う」とディレクトリを再度作成となるかもしれませんが、現時点では不要なので削除します。

- pages/api
- public/vercel.svg
- styles/Home.Module.css

※ `pages/index.tsx` 内の関係するコードも削除しておきます

### scssに切り替え
`scss` が `install` されていれば特に設定はいりません。`install` されていなかったらします。
```sh
./styles/globals.scss
To use Next.js' built-in Sass support, you first need to install `sass`.
Run `npm i sass` or `yarn add sass` inside your workspace.

Learn more: https://nextjs.org/docs/messages/install-sass
```
```sh
yarn add sass
```
次にファイル名と `import` のパスを変更します

**ファイル名**  
styles/globals.css
→ styles/globals.scss

**pages/_app.tsx**  
import '../styles/globals.css'
→ import '../styles/globals.scss'

