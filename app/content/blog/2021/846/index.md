---
slug: /846
date: '2021-09-30 00:07:34'
title: 第2回ReactNativeアプリ開発④〜AsyncStorage
thumbnail: /img/blog/thumbnail/2021/846/2021-09-19-11.24.43.png
tags: ['reactnative', 'expo']
---
初心者にとっての山場…AsyncStorage。
使い方も完全に忘れているのでドキュメント確認しようと[サイト](https://reactnative.dev/docs/asyncstorage)を開いてみると

![image](/img/blog/contents/2021/09/2021-09-28-0.37.16.png)

非推奨になっていた。

コミュニティパッケージを使ってくれということなので現在(2021/09/28)も継続的にメンテンスされていて、スター数も一番多い[react-native-async-storage](https://github.com/react-native-async-storage)を使用することにする。

## インストール

[ドキュメント](https://react-native-async-storage.github.io/async-storage/docs/install/)に沿ってインストールする

```sh
#npm
npm install @react-native-async-storage/async-storage
#yarn
yarn add @react-native-async-storage/async-storage
#expo
expo install @react-native-async-storage/async-storage
```

今回は Expo 使っているので expo install します。じゃないと次の作業工程が一つ増えるからです。

```sh
#これをしないといけない
react-native link @react-native-async-storage/async-storage
```

## 使い方

まずは import をかく。

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage'
```

データを storage にセットする場合ただの文字列とオブジェクトで書き方が異なる。具体的にはオブジェクトの場合 JSON 文字列への変換が必要となる。

### setItem

@storage_Keyの部分は好きな名前を指定してください。

```javascript
//文字列
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}
```

```javascript
//オブジェクト
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}
```

### getItem

```javascript
//文字列
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}
```

```javascript
//オブジェクト
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}
```

### 例

今回選択した日付をAsyncStorage に保存して、アプリ起動時に読み込もうとしたが、公式の async/await で Promise 型を return する形は都合が悪かったのでこのようなコードになった。

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [markedDates, setMarkedDates] = useState({});

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
      const jsonValue = await AsyncStorage.getItem('dates');
      const result = jsonValue != null ? JSON.parse(jsonValue) : {};
      //returnするのではなくsetMarkedDatesを更新する
      setMarkedDates(result);
    } catch(e) {
      alert(e)
    }
  }

  useEffect(()=>{
    getStore()
  },[])
```

アプリ起動時にAsyncStorageからデータを取り出したいので、useState(getStore())としたいところだが、公式通り非同期にすると取り出す前にuseStateの初期化が走ってしまうため正しい値がセットされない。そのためuseEffectでgetStoreを呼び出し、getStore内では戻り値は設定せずにsetStateすることでAsyncStorageのデータを画面に表示することにした。
