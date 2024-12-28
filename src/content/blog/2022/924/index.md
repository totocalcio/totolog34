---
_path: "/924"
date: '2022-07-24 11:11:06'
title: Gatsbyでブログ作る⑤〜エラー集
thumbnail:
tags: ['Gatsby']
---
## 型 'string | null | undefined' を型 'string' に割り当てることはできません。

### 原因・経緯

GraphQL で取得したデータをコンポーネントに渡そうとして発生

```sh
型 'string | null | undefined' を型 'string' に割り当てることはできません。
  型 'undefined' を型 'string' に割り当てることはできません。
```

**IndexPage.tsx(親)**

```html
<Layout title={data.site?.siteMetadata?.title}>
```

**layout.tsx(子)**

```javascript
type Props = {
  title: string
}

export const Layout: React.FC<Props> = ({title}) => {
```


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

 gatsby-config.ts に gatsby-transformer-sharp を追加する

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
このエラーが出るということは gatsby-plugin-image が関係していることが多いと予想されるので、 gatsby-transformer-sharp 以外にも追加されていなかったらしておく。
