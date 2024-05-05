---
slug: /859
date: '2021-10-04 00:37:56'
title: 第2回ReactNativeアプリ開発⑥〜React Navigation
thumbnail: /img/blog/thumbnail/2021/859/2021-09-19-11.24.43.png
tags: ['reactnative', 'expo']
---
今回はさくっとアプリを作ろうと思っていたので、画面遷移なしの１画面でなんとか完結しようと思っていましたが、少しずつ処理も長くなってきてコードの見通しも悪いですし、機能も１画面でおさまりそうもないのでやっぱり分けることにします。

**注意**

```html
記事執筆時、React Navigation Ver:6.xのドキュメントを参考にしています。
```

## 準備

まず App.tsx に全部処理を書いていたので、screens のディレクトリを作成して、その下に HomeScreen.tsx を作成して処理を移します。
ついでに、追加画面の `SetttingScreen.tsx` も作成しておきます。
現在のディレクトリ構成はこちらです。

![image](../../../../images/2021/10/2021-10-03-23.04.18.png)

### インストール

次に React Navigation をインストールしていきます。
ドキュメントはこちらです。

[https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

```sh
$npm install @react-navigation/native
or
$yarn add @react-navigation/native
```

次に関連パッケージです。今回は(も)expo 対象です。expo を使用しない場合は[ドキュメント](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project)に従って設定してください

```sh
$expo install react-native-screens react-native-safe-area-context
```

## コード

App.tsx から HomeScreen.tsx に処理をうつし、react-navigation をインストールしたところで、コードを修正します。

```jsx
import React from "react";
//①
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//②
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";

//③
const Stack = createNativeStackNavigator();

export default function App() {
return (
//④
  <NavigationContainer>
    <Stack.Navigator>
//⑤
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
```

特に難しいことはなく、必要なパッケージ(①)と作成したHomeScreen とSettingScreen を import して(②)、createNativeStackNavigator を使えるようにします(③)。

ナビゲーションを管理するために NavigationContainer コンポーネントでラップして(④)、その中に使用する画面を書いておきます(⑤)。

しかし今のままだと処理を移した HomeScreen が呼ばれているだけなので、SettingScreen へ遷移する処理をかいていきます。

## Header buttons

[Tab navigation](https://reactnavigation.org/docs/tab-based-navigation)でもよかったのですが、今回は設定画面だけなのでなんとなく右上のヘッダーボタンから遷移させようと思います。
[ドキュメント](https://reactnavigation.org/docs/header-buttons/)を確認すると `options` でいろいろヘッダーをカスタマイズできそうです。

### サンプルコード

```jsx
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
```

右上のボタン（headerRight）を SettingScreen に遷移するように修正します。

```jsx
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Setting')}
            title="Setting"
            color="#000"
          />
        )
      })}
    />
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

Stack.Screen コンポーネントでは navigation の機能が自動的に提供されます。navigation には、ナビゲーションアクションを処理するためのさまざまな便利な関数が含まれています。詳しい内容は[公式のドキュメント](https://reactnavigation.org/docs/navigation-prop/)を確認してください。
今回はこの navigation を options で渡して、タップ時に Setting に遷移するようにしました。

