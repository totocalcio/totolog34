---
slug: /924
date: "2022-07-24 11:11:06"
title: Gatsbyでブログ作る⑤〜エラー集
thumbnail: 
tags: ["gatsby"]
---
# Gatsbyでブログ作る⑤〜エラー集
<!-- wp:heading -->
<h2>型 'string | null | undefined' を型 'string' に割り当てることはできません。</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>原因・経緯</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GraphQLで取得したデータをコンポーネントに渡そうとして発生</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>型 'string | null | undefined' を型 'string' に割り当てることはできません。
  型 'undefined' を型 'string' に割り当てることはできません。</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>IndexPage.tsx(親)</code></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    &lt;Layout title={data.site?.siteMetadata?.title}&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>layout.tsx(子)</code></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>type Props = {
  title: string
}

export const Layout: React.FC&lt;Props&gt; = ({title}) =&gt; {
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>対策</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>子コンポーネント側で許容する</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>type Props = {
  title: <span class="bold-red">string | null | undefined</span>
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>GraphQLDocumentError: Unknown type "ImageSharpFluid".</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>原因・経緯</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>gatsby developの際にエラー。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>There was an error while trying to generate TS types from your GraphQL queries:
Error xxx: GraphQLDocumentError: Unknown type "ImageSharpFixed".
Error yyy: GraphQLDocumentError: Unknown type "ImageSharpFluid".</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>対策</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>gatsby-config.ts</code>にgatsby-transformer-sharpを追加する</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const config: GatsbyConfig = {
...
  plugins: &#91;
    ...
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
  ]
};</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>gatsby developで確認してエラーが発生しなければOK。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このエラーが出るということは<code>gatsby-plugin-image</code>が関係していることが多いと予想されるので、<code>gatsby-transformer-sharp</code>以外にも追加されていなかったらしておく。</p>
<!-- /wp:paragraph -->