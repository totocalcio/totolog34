---
slug: /918
date: '2022-07-24 11:10:06'
title: Gatsbyでブログ作る④〜GraphQL Typegen
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ['gatsby']
---

# Gatsby でブログ作る ④〜GraphQL Typegen

詳しくは[公式](https://www.gatsbyjs.com/docs/tutorial/part-3/)

Gatsby ではプラグインを使用して様々な機能を使うことができます。
流れとしては下記の通り

1. npm を使用してプラグインをインストール。
2. gatsby-config.jsファイルでプラグインを構成。
3. 必要に応じて、プラグイン機能を使用。

## GraphQL Typegen

[gatsby-plugin-graphql-codegen](https://github.com/d4rekanguok/gatsby-typescript)が使えるとのことで見に行ったら[gatsby-plugin-typegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-typegen/?=gatsby-plugin-typegen)使ってねって言われていた。

> Hi there ? Are you just looking for a way to generate graphql types for your graphql queries?
> gatsby-plugin-graphql-codegen is what you want. However, other maintainers and I haven't been able to keep this repo up to shape. Please have a look at @cometkim's graphql-plugin-typegen which does almost the same thing &amp; better maintained. Still, ideas &amp; PRs are all welcomed. If you'd like to help maintain this project, please feel free to reach out. Thank you, have a great day  
>[https://github.com/d4rekanguok/gatsby-typescript](https://github.com/d4rekanguok/gatsby-typescript)

と、思っていろいろ調べていたら v4.15.0 で[GraphQL Typegen](https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/)の機能として提供されることとなったのらしいので、そちらを使う。

1. gatsby develop する
2. src/gatsby-types.d.ts のファイルが自動生成される

前提条件として gatsby-config.js で graphqlTypegen が true となっている必要があります。

```javascript
module.exports = {
  graphqlTypegen: true,
}
```

あとはクエリをかいていきます。

```javascript
import * as React from 'react'
import { graphql, PageProps } from "gatsby"
import Layout from '../components/layout'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout>
      <p>{data.site?.siteMetadata?.title}</p>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
```

自動型生成がきかなくなるので、コンポーネント名(export default IndexPage)とクエリ名(query IndexPage)は一致させる必要があります。またパスカルケースが推奨されています。
IndexPage の生成した型定義は IndexPageQuery のように Query をつけた名称で使います。
 PageProps  を import して、引数に { data }: PageProps<Queries.IndexPageQuery> を設定します。これで取得したデータが data に格納されます。実際にデータを表示する時は下記のようになります。

```javascript
<p>{data.site?.siteMetadata?.title}</p>
```
