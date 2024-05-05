---
slug: /834
date: '2021-09-26 09:37:54'
title: 第2回ReactNativeアプリ開発③〜カレンダー実装
thumbnail: /img/blog/thumbnail/2021/834/2021-09-19-11.24.43.png
tags: ['reactnative']
---
[前回](https://totolog34.com/827/)で UI コンポーネントのために[Material Kit React Native](https://www.creative-tim.com/product/material-kit-react-native)をいれたのですが、今回は単純なアプリを作ろうと思っていたので、必要なら自前でデザインは作成した方が早い、ディレクトリややこしくなるのがなんだか好きじゃない、という理由で[まっさらな状態](https://totolog34.com/813/)に戻しました。

## カレンダーのライブラリ「react-native-calendars」を導入

[https://github.com/wix/react-native-calendars](https://github.com/wix/react-native-calendars)

React Native でカレンダーのライブラリといったらこれしか選択肢がない気がします。

まずはライブラリをインストールします

```sh
npm install react-native-calendars
```

## 実装

インストールしたらコードの方で必要なモジュールを import して実装します。

```javascript
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";

const INITIAL_DATE = moment().format("YYYY-MM-DD");

export default function App() {
const [selected, setSelected] = useState(INITIAL_DATE);
const handleDayPress = (day) => {
setSelected(day.dateString);
}

  return (
    <View style={{paddingTop:40}}>
     <Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'pink',
            selectedTextColor: 'white'
          }
        }}
        onDayPress={handleDayPress}
      />
    </View>
  );
}

LocaleConfig.locales.jp = {
　 today: "今日",
monthNames: [ "1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月", ],
monthNamesShort: [ "1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月", ],
dayNames: [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", ],
dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";
```

ひとまず最小限、タップした日付にスタイルがあたるような機能を実装しました。

![image](../../../../images/2021/09/2021-09-26-9.09.30.png)

## コード詳細

### moment.js

react-native-calendars の日付のフォーマットが**'2021-09-26'**なので moment.js で初期化しています。

### LocaleConfig

カレンダーの日本語化を行っています。こちらの記事を参考にさせていただきました。

参考：[https://tegralsblog.com/react-native-calendars-custom-japanese/](https://tegralsblog.com/react-native-calendars-custom-japanese/)
