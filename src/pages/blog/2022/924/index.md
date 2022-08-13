---
slug: /924
date: '2022-07-24 11:11:06'
title: Gatsbyでブログ作る⑤〜エラー集
thumbnail:
tags: ['gatsby']
---

# Gatsby でブログ作る ⑤〜エラー集

## 型 'string | null | undefined' を型 'string' に割り当てることはできません。

### 原因・経緯

GraphQL で取得したデータをコンポーネントに渡そうとして発生

```sh
型 'string | null | undefined' を型 'string' に割り当てることはできません。
  型 'undefined' を型 'string' に割り当てることはできません。
```

<code>IndexPage.tsx(親)</code>

```html
    <Layout title={data.site?.siteMetadata?.title}>
```

<code>layout.tsx(子)</code>

```javascript
type Props = {
  title: string
}

export const Layout: React.FC<Props> = ({title}) => {
```

### 対策

子コンポーネント側で許容する

```javascript
type Props = {
title: string | null | undefined
}
```

## GraphQLDocumentError: Unknown type "ImageSharpFluid".

### 原因・経緯

gatsby develop の際にエラー。

```sh
There was an error while trying to generate TS types from your GraphQL queries:
Error xxx: GraphQLDocumentError: Unknown type "ImageSharpFixed".
Error yyy: GraphQLDocumentError: Unknown type "ImageSharpFluid".
```

### 対策

<code>gatsby-config.ts</code>に gatsby-transformer-sharp を追加する

```javascript
const config: GatsbyConfig = {
...
plugins: [
...
`gatsby-plugin-image`,
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`,
]
};
```

gatsby develop で確認してエラーが発生しなければ OK。
このエラーが出るということは<code>gatsby-plugin-image</code>が関係していることが多いと予想されるので、<code>gatsby-transformer-sharp</code>以外にも追加されていなかったらしておく。
