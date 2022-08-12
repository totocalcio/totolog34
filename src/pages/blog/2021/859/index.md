---
slug: /859
date: "2021-10-04 00:37:56"
title: 第2回ReactNativeアプリ開発⑥〜React Navigation
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative","expo"]
---
# 第2回ReactNativeアプリ開発⑥〜React Navigation
<!-- wp:paragraph -->
<p>今回はさくっとアプリを作ろうと思っていたので、画面遷移なしの１画面でなんとか完結しようと思っていましたが、少しずつ処理も長くなってきてコードの見通しも悪いですし、機能も１画面でおさまりそうもないのでやっぱり分けることにします。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>注意</h4>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><span class="fz-14px">記事執筆時、React Navigation Ver:6.xのドキュメントを参考にしています。</span></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2>準備</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずApp.tsxに全部処理を書いていたので、screensのディレクトリを作成して、その下にHomeScreen.tsxを作成して処理を移します。<br>ついでに、追加画面のSetttingScreen.tsxも作成しておきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>現在のディレクトリ構成はこちらです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":860,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://totolog34.com/wp/wp-content/uploads/2021/10/スクリーンショット-2021-10-03-23.04.18.png" alt="" class="wp-image-860"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>インストール</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>次にReact Navigationをインストールしていきます。<br>ドキュメントはこちらです。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://reactnavigation.org/docs/getting-started"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://reactnavigation.org/docs/getting-started
</div></figure>
<!-- /wp:embed -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$npm install @react-navigation/native
or
$yarn add @react-navigation/native</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>次に関連パッケージです。今回は(も)expo対象です。expoを使用しない場合は<a href="https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project" target="_blank" rel="noreferrer noopener">ドキュメント</a>に従って設定してください</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$expo install react-native-screens react-native-safe-area-context</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>コード</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>App.tsxからHomeScreen.tsxに処理をうつし、<meta charset="utf-8">react-navigationをインストールしたところで、コードを修正します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import React from "react";
//①
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
<meta charset="utf-8">//②
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";

<meta charset="utf-8">//③
const Stack = createNativeStackNavigator();

export default function App() {
  return (
<meta charset="utf-8">　　　　//④
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator&gt;
　　　　　　　　//⑤
        &lt;Stack.Screen name="Home" component={HomeScreen} /&gt;
        &lt;Stack.Screen name="Setting" component={SettingScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>特に難しいことはなく、必要なパッケージ(①)と作成した<meta charset="utf-8">HomeScreenと<meta charset="utf-8">SettingScreenをimportして(②)、<meta charset="utf-8">createNativeStackNavigatorを使えるようにします(③)。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ナビゲーションを管理するためにNavigationContainerコンポーネントでラップして(④)、その中に使用する画面を書いておきます(⑤)。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし今のままだと処理を移したHomeScreenが呼ばれているだけなので、SettingScreenへ遷移する処理をかいていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Header buttons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://reactnavigation.org/docs/tab-based-navigation" target="_blank">Tab navigation</a>でもよかったのですが、今回は設定画面だけなのでなんとなく右上のヘッダーボタンから遷移させようと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://reactnavigation.org/docs/header-buttons/" target="_blank">ドキュメント</a>を確認するとoptionsでいろいろヘッダーをカスタマイズできそうです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>サンプルコード</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function StackScreen() {
  return (
    &lt;Stack.Navigator&gt;
      &lt;Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props =&gt; &lt;LogoTitle {...props} /&gt;,
          headerRight: () =&gt; (
            &lt;Button
              onPress={() =&gt; alert('This is a button!')}
              title="Info"
              color="#fff"
            /&gt;
          ),
        }}
      /&gt;
    &lt;/Stack.Navigator&gt;
  );
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>右上のボタン（headerRight）をSettingScreenに遷移するように修正します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator&gt;
        &lt;Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) =&gt; ({
            headerRight: () =&gt; (
              &lt;Button
                onPress={() =&gt; navigation.navigate('Setting')}
                title="Setting"
                color="#000"
              /&gt;
            ),
          })}
        /&gt;
        &lt;Stack.Screen name="Setting" component={SettingScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Stack.Screenコンポーネントではnavigationの機能が自動的に提供されます。navigationには、ナビゲーションアクションを処理するためのさまざまな便利な関数が含まれています。詳しい内容は<a href="https://reactnavigation.org/docs/navigation-prop/" target="_blank" rel="noreferrer noopener">公式のドキュメント</a>を確認してください。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回はこのnavigationをoptionsで渡して、タップ時にSettingに遷移するようにしました。</p>
<!-- /wp:paragraph -->