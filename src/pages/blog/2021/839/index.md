---
slug: /839
date: "2021-09-27 01:00:00"
title: 第2回ReactNativeアプリ開発③〜ダイアログ実装
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative"]
---
# 第2回ReactNativeアプリ開発③〜ダイアログ実装
<!-- wp:heading -->
<h2>ライブラリ選定</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ReactNativeのダイアログ実装で検索すると有名そうなところで２つひっかかってくる。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://github.com/douglasjunior/react-native-simple-dialogs"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://github.com/douglasjunior/react-native-simple-dialogs
</div></figure>
<!-- /wp:embed -->

<!-- wp:embed {"url":"https://github.com/mmazzarolo/react-native-dialog"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://github.com/mmazzarolo/react-native-dialog
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>前者の<a rel="noreferrer noopener" href="https://github.com/douglasjunior/react-native-simple-dialogs" target="_blank">react-native-simple-dialogs</a>は<strong>「react native ダイアログ」</strong>で検索すると１位にヒットする記事で紹介されているが、こちらのライブラリはもう更新されていない。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>後者の<a rel="noreferrer noopener" href="https://github.com/mmazzarolo/react-native-dialog" target="_blank">react-native-dialog</a>は現在(2021/09/26執筆時）も更新されているので、今回はこちらを使用する。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>使い方</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>ライブラリインストール</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはnpmもしくはyarnでライブラリをインストールする</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Using npm:
$ npm install react-native-dialog
# Using yarn:
$ yarn add react-native-dialog</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>基本の形</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>先程インストールした<meta charset="utf-8">react-native-dialogをimportして使っていく。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import Dialog from "react-native-dialog";

return (
  &lt;View&gt;
    &lt;Dialog.Container&gt;
      &lt;Dialog.Title&gt;Account delete&lt;/Dialog.Title&gt;
      &lt;Dialog.Description&gt;
        Do you want to delete this account? You cannot undo this action.
      &lt;/Dialog.Description&gt;
      &lt;Dialog.Button label="Cancel" /&gt;
      &lt;Dialog.Button label="Delete" /&gt;
    &lt;/Dialog.Container&gt;
  &lt;/View&gt;
);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>react-native-dialogはいくつかのUIコンポーネントを使うことができ、それらを組み合わせることで、簡単にダイアログを実装できる。しかし、この状態ではButtonを押しても何も起きないので、より具体的な実装をする。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>例</h3>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

export default function App() {
  const [visible, setVisible] = useState(false);

  const showDialog = () =&gt; {
    setVisible(true);
  };

  const handleCancel = () =&gt; {
    setVisible(false);
  };

  const handleDelete = () =&gt; {
    setVisible(false);
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="Show dialog" onPress={showDialog} /&gt;
      &lt;Dialog.Container visible={visible}&gt;
        &lt;Dialog.Title&gt;Account delete&lt;/Dialog.Title&gt;
        &lt;Dialog.Description&gt;
          Do you want to delete this account? You cannot undo this action.
        &lt;/Dialog.Description&gt;
        &lt;Dialog.Button label="Cancel" onPress={handleCancel} /&gt;
        &lt;Dialog.Button label="Delete" onPress={handleDelete} /&gt;
      &lt;/Dialog.Container&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});</pre>
<!-- /wp:preformatted -->

<!-- wp:image {"id":840,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-26-20.02.16.png" alt="" class="wp-image-840"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>これで基本となるダイアログの実装ができた</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>カレンダーに実装していく</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Dialog from "react-native-dialog";
import moment from "moment";

const INITIAL_DATE = moment().format("YYYY-MM-DD");

export default function App() {
  const &#91;selected, setSelected] = useState(INITIAL_DATE);
  const &#91;visible, setVisible] = useState(false);

  const handleDayPress = (day) =&gt; {
    setSelected(day.dateString);
    showDialog();
  };

  const showDialog = () =&gt; {
    setVisible(true);
  };

  const handleCancel = () =&gt; {
    setVisible(false);
  };

  const handleConfirm = () =&gt; {
    setVisible(false);
  };

  return (
    &lt;View style={{ paddingTop: 40, display: "flex" }}&gt;
      &lt;Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          &#91;selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "pink",
            selectedTextColor: "white",
          },
        }}
        onDayPress={handleDayPress}
      /&gt;
      &lt;Dialog.Container visible={visible}&gt;
        &lt;Dialog.Title&gt;タイトル&lt;/Dialog.Title&gt;
        &lt;Dialog.Description&gt;説明&lt;/Dialog.Description&gt;
        &lt;Dialog.Button label="キャンセル" onPress={handleCancel} /&gt;
        &lt;Dialog.Button label="OK!" onPress={handleConfirm} /&gt;
      &lt;/Dialog.Container&gt;
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
LocaleConfig.defaultLocale = "jp";
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"id":841,"width":230,"height":444,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/09/スクリーンショット-2021-09-26-20.19.32.png" alt="" class="wp-image-841" width="230" height="444"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>日付を選択するとダイアログが表示する機能の実装ができました。</p>
<!-- /wp:paragraph -->