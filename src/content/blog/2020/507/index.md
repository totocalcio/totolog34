---
_path: "/507"
date: '2020-10-27 12:30:40'
title: iPhone11だとBottomTabNavigatorが隠れてうまく表示されない
thumbnail:
tags: ['ReactNative', 'Expo']
---
私の環境でのテストが iPhone11 だっただけで、おそらく iPhone11 じゃなくても機種によっては起こりうると思います。

## BottomTabNavigator が隠れる

![image](/img/blog/contents/2020/10/Simulator-Screen-Shot-iPhone-11-Pro-Max-2020-10-06-at-18.46.26.png)

隠れるというよりは高さの領域が足りていない感じです。

## SafeAreaView を追加する
```html
<View>
  <AppTabsScreen />
  <SafeAreaView/>
</View>
```
SafeAreaViewを足すだけだとこのようになります。

![image](/img/blog/contents/2020/10/Simulator-Screen-Shot-iPhone-11-2020-10-07-at-20.18.42.png)

BottomTab の領域の確保はできましたが、SafeAreaView の領域が空白になってしまいっているのでデザインの調整として style で backgroundCoror を指定します。

```html
<View>
  <AppTabsScreen />
  <SafeAreaView style={{backgroundColor:"#442c2e"}}/>
</View>
```

![image](/img/blog/contents/2020/10/Simulator-Screen-Shot-iPhone-11-2020-10-07-at-20.27.26-1.png)

調整ができました。
