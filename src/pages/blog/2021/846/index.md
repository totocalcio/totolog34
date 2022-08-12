---
slug: /846
date: "2021-09-30 00:07:34"
title: 第2回ReactNativeアプリ開発④〜AsyncStorage
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative","expo"]
---
# 第2回ReactNativeアプリ開発④〜AsyncStorage
<!-- wp:paragraph -->
<p>初心者にとっての山場…AsyncStorage。<br>使い方も完全に忘れているのでドキュメント確認しようと<a rel="noreferrer noopener" href="https://reactnative.dev/docs/asyncstorage" target="_blank">サイト</a>を開いてみると</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":847,"width":512,"height":128,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-28-0.37.16-1024x255.png" alt="" class="wp-image-847" width="512" height="128"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-blue"><span class="marker-red">非推奨になっていた</span></span><span class="marker-red">。</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>コミュニティパッケージを使ってくれということなので現在(2021/09/28)も継続的にメンテンスされていて、スター数も一番多い<a href="https://github.com/react-native-async-storage">react-native-async-storage</a>を使用することにする。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>インストール</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://react-native-async-storage.github.io/async-storage/docs/install/" target="_blank">ドキュメント</a>に沿ってインストールする</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>＃npm
npm install @react-native-async-storage/async-storage
#yarn
yarn add @react-native-async-storage/async-storage
#expo
expo install @react-native-async-storage/async-storage</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>今回はExpo使っているのでexpo installします。じゃないと次の作業工程が一つ増えるからです。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#これをしないといけない
react-native link @react-native-async-storage/async-storage</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>使い方</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはimportをかく。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import AsyncStorage from '@react-native-async-storage/async-storage';</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>データをstorageにセットする場合ただの文字列とオブジェクトで書き方が異なる。具体的にはオブジェクトの場合JSON文字列への変換が必要となる。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>setItem</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><meta charset="utf-8"><span class="marker-blue">@storage_Key</span>の部分は好きな名前を指定してください。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#文字列
const storeData = async (value) =&gt; {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#オブジェクト
const storeData = async (value) =&gt; {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>getItem</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#文字列
const getData = async () =&gt; {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">#オブジェクト
const getData = async () =&gt; {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}</pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3>例</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回選択した日付を<meta charset="utf-8">AsyncStorageに保存して、アプリ起動時に読み込もうとしたが、公式のasync/awaitでPromise型をreturnする形は都合が悪かったのでこのようなコードになった。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const &#91;markedDates, setMarkedDates] = useState({});

  const setStore = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('dates', jsonValue)
    } catch (e) {
      alert(e)
    }
  }

  const getStore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('<meta charset="utf-8"><meta charset="utf-8">dates');
      const result = jsonValue != null ? JSON.parse(jsonValue) : {};
      //returnするのではなく<meta charset="utf-8">setMarkedDatesを更新する
      setMarkedDates(result);
    } catch(e) {
      alert(e)
    }
  }

  useEffect(()=>{
    getStore()
  },&#91;])
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>アプリ起動時にAsyncStorageからデータを取り出したいので、<span class="marker-red"><strong>useState(getStore())</strong></span>としたいところだが、公式通り非同期にすると取り出す前にuseStateの初期化が走ってしまうため正しい値がセットされない。そのためuseEffectでgetStoreを呼び出し、getStore内では戻り値は設定せずにsetStateすることで<meta charset="utf-8">AsyncStorageのデータを画面に表示することにした。</p>
<!-- /wp:paragraph -->