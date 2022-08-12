---
slug: /918
date: "2022-07-24 11:10:06"
title: Gatsbyでブログ作る④〜GraphQL Typegen
thumbnail: 1_tsOxXGb20o2zrCh6Sp5PYQ.png
tags: ["gatsby"]
---
# Gatsbyでブログ作る④〜GraphQL Typegen
<!-- wp:paragraph -->
<p>詳しくは<a href="https://www.gatsbyjs.com/docs/tutorial/part-3/">公式</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Gatsbyではプラグインを使用して様々な機能を使うことができます。<br>流れとしては下記の通り</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>npmを使用してプラグインをインストール。</li><li><code>gatsby-config.js</code>ファイルでプラグインを構成<strong>。</strong></li><li>必要に応じて、プラグイン機能を使用。</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>GraphQL Typegen</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/d4rekanguok/gatsby-typescript">gatsby-plugin-graphql-codegen</a>が使えるとのことで見に行ったら<a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-typegen/?=gatsby-plugin-typegen">gatsby-plugin-typegen</a>使ってねって言われていた。</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>Hi there&nbsp;?&nbsp;Are you just looking for a way to generate graphql types for your graphql queries?<br><br>gatsby-plugin-graphql-codegen is what you want. However, other maintainers and I haven't been able to keep this repo up to shape. Please have a look at @cometkim's graphql-plugin-typegen which does almost the same thing &amp; better maintained. Still, ideas &amp; PRs are all welcomed. If you'd like to help maintain this project, please feel free to reach out. Thank you, have a great day!</p><cite>https://github.com/d4rekanguok/gatsby-typescript</cite></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>と、思っていろいろ調べていたらv4.15.0で<a href="https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/">GraphQL Typegen</a>の機能として提供されることとなったのらしいので、そちらを使う。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>gatsby developする</li><li>src/gatsby-types.d.tsのファイルが自動生成される</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>前提条件としてgatsby-config.jsでgraphqlTypegenがtrueとなっている必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>module.exports = {
  graphqlTypegen: true,
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>あとはクエリをかいていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import * as React from 'react'
import { graphql, PageProps } from "gatsby"
import Layout from '../components/layout'

const IndexPage = ({ data }: PageProps&lt;Queries.IndexPageQuery&gt;) =&gt; {
  return (
    &lt;Layout&gt;
      &lt;p&gt;{data.site?.siteMetadata?.title}&lt;/p&gt;
    &lt;/Layout&gt;
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

export default IndexPage</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>自動型生成がきかなくなるので、コンポーネント名(export default IndexPage)とクエリ名(query IndexPage)は一致させる必要があります。またパスカルケースが推奨されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>IndexPageの生成した型定義は<code>IndexPageQuery</code>のようにQueryをつけた名称で使います。<br><code>PageProps</code> をimportして、引数に<code>{ data }: PageProps&lt;Queries.IndexPageQuery&gt;</code>を設定します。これで取得したデータが<code>data</code>に格納されます。実際にデータを表示する時は下記のようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;p&gt;{data.site?.siteMetadata?.title}&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->