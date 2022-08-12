---
slug: /834
date: "2021-09-26 09:37:54"
title: 第2回ReactNativeアプリ開発③〜カレンダー実装
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative"]
---
# 第2回ReactNativeアプリ開発③〜カレンダー実装
<!-- wp:paragraph -->
<p><a href="https://totolog34.com/827/">前回</a>でUIコンポーネントのために<a rel="noreferrer noopener" href="https://www.creative-tim.com/product/material-kit-react-native" target="_blank">Material Kit React Native</a>をいれたのですが、今回は単純なアプリを作ろうと思っていたので、必要なら自前でデザインは作成した方が早い、ディレクトリややこしくなるのがなんだか好きじゃない、という理由で<a href="https://totolog34.com/813/" data-type="URL" data-id="https://totolog34.com/813/">まっさらな状態</a>に戻しました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>カレンダーのライブラリ「react-native-calendars」を導入</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://github.com/wix/react-native-calendars"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://github.com/wix/react-native-calendars
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>React Nativeでカレンダーのライブラリといったらこれしか選択肢がない気がします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まずはライブラリをインストールします</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm install react-native-calendars</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>実装</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>インストールしたらコードの方で必要なモジュールをimportして実装します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";

const INITIAL_DATE = moment().format("YYYY-MM-DD");
 
export default function App() {
  const &#91;selected, setSelected] = useState(INITIAL_DATE);
  const handleDayPress = (day) =&gt; {
    setSelected(day.dateString);
  }

  return (
    &lt;View style={{paddingTop:40}}&gt;
     &lt;Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          &#91;selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'pink',
            selectedTextColor: 'white'
          }
        }}
        onDayPress={handleDayPress}
      /&gt;
    &lt;/View&gt;
  );
}

LocaleConfig.locales.jp = { 
　today: "今日",
 monthNames: &#91; "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ],
 monthNamesShort: &#91; "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ],
 dayNames: &#91; "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", ],
 dayNamesShort: &#91;"日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>ひとまず最小限、タップした日付にスタイルがあたるような機能を実装しました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":835,"width":248,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-26-9.09.30-496x1024.png" alt="" class="wp-image-835" width="248" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>コード詳細</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>moment.js</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>react-native-calendarsの日付のフォーマットが<strong>'2021-09-26'</strong>なのでmoment.jsで初期化しています。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>LocaleConfig</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>カレンダーの日本語化を行っています。こちらの記事を参考にさせていただきました。<br>参考：<a rel="noreferrer noopener" href="https://tegralsblog.com/react-native-calendars-custom-japanese/" target="_blank">https://tegralsblog.com/react-native-calendars-custom-japanese/</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->