---
slug: /851
date: "2021-10-02 14:34:47"
title: 第2回ReactNativeアプリ開発⑤〜expo-notifications
thumbnail: スクリーンショット-2021-09-19-11.24.43.png
tags: ["reactnative","expo"]
---
# 第2回ReactNativeアプリ開発⑤〜expo-notifications
<!-- wp:paragraph -->
<p>通知機能を足したいと思いまして<strong>expo-notifications</strong>を入れることにしました。<br>Expo公式のもので更新頻度は（今のとこ）気にしなくてもよさそうなのでとりあえずドキュメントを見に行きます。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://docs.expo.dev/versions/v42.0.0/sdk/notifications/"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://docs.expo.dev/versions/v42.0.0/sdk/notifications/
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":4} -->
<h4>注意</h4>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><span class="fz-14px">本記事で公式ドキュメントへのリンクを度々貼っていますが、導入の際には最新のドキュメントを参考にしてください。</span></li><li><span class="fz-14px">ググるといろんなexpo-notificationsに関するサンプルコードも出てくると思います。（私のように慣れないエンジニアはそのままコピペしたいとこですが、あくまで参考程度にして、最新の公式ドキュメントを見た方がいいです。expo-notificationsに限ったことではないですけど。</span></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>インストール</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://docs.expo.dev/versions/latest/sdk/notifications/#installation" target="_blank" rel="noreferrer noopener">ドキュメント</a>に沿ってまずはインストール</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$expo install expo-notifications</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>ドキュメントにはインストールのあとに<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#config-plugin-setup-optional" data-type="URL" target="_blank">config</a>についてもありますが、こちらはカスタムなのでアイコンやサウンドなど、必要があれば設定してください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>サンプルコード</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずは公式記載の<a href="https://docs.expo.dev/versions/latest/sdk/notifications/#api" target="_blank" rel="noreferrer noopener">サンプルコード</a>をまるまるコピーしてきます。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () =&gt; ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const &#91;expoPushToken, setExpoPushToken] = useState('');
  const &#91;notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() =&gt; {
    registerForPushNotificationsAsync().then(token =&gt; setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification =&gt; {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response =&gt; {
      console.log(response);
    });

    return () =&gt; {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, &#91;]);

  return (
    &lt;View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}&gt;
      &lt;Text&gt;Your expo push token: {expoPushToken}&lt;/Text&gt;
      &lt;View style={{ alignItems: 'center', justifyContent: 'center' }}&gt;
        &lt;Text&gt;Title: {notification &amp;&amp; notification.request.content.title} &lt;/Text&gt;
        &lt;Text&gt;Body: {notification &amp;&amp; notification.request.content.body}&lt;/Text&gt;
        &lt;Text&gt;Data: {notification &amp;&amp; JSON.stringify(notification.request.content.data)}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;Button
        title="Press to schedule a notification"
        onPress={async () =&gt; {
          await schedulePushNotification();
        }}
      /&gt;
    &lt;/View&gt;
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! ?",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: &#91;0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4>注意</h4>
<!-- /wp:heading -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><span class="fz-14px">この先Simulatorでは通知の確認ができないので実機で確認してください</span></pre>
<!-- /wp:preformatted -->

<!-- wp:image {"id":852,"width":288,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/10/IMG_3694-576x1024.jpg" alt="" class="wp-image-852" width="288" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><span class="marker-blue">Press to scheduls a notification</span>をタップします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":853,"width":288,"height":512,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://totolog34.com/wp/wp-content/uploads/2021/10/IMG_3695-576x1024.jpg" alt="" class="wp-image-853" width="288" height="512"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>通知がきました。ここから少しカスタマイズしていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>通知のタイミングを変えたい（scheduleNotificationAsync）</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>通知の設定を行っているのはサンプルコードの中では<span class="bold-green">schedulePushNotification</span>のメソッドです。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! ?",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><meta charset="utf-8">その中で使われている<span class="marker-blue">scheduleNotificationAsync</span>の設定を変更するのですが、こちらの使い方についての詳細は<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#schedulenotificationasyncnotificationrequest-notificationrequestinput-promisestring" target="_blank">ドキュメント</a>を確認してみてください。サンプルコードも一緒に掲載されています。<br>今回は<span class="marker">毎日２３時に通知が来るように変更します。</span></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "通知です",
      body: '通知きました',
    },
    trigger: { 
      type: 'daily',
      repeats: true,
      hour: 23,
      minute: 0,
    },
  });
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>毎日決まった時間に通知するので<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#dailynotificationtrigger" target="_blank">DailyNotificationTrigger</a>定義を使用します。型定義の詳細については<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput" data-type="URL" data-id="https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput" target="_blank">こちら</a>を確認してください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>通知を止めたい(<meta charset="utf-8">cancelAllScheduledNotificationsAsync)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>通知を止めたい場合は<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#cancelschedulednotificationasyncidentifier-string-promisevoid" target="_blank">cancelScheduledNotificationAsync()</a>と<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#cancelallschedulednotificationsasync-promisevoid" target="_blank">cancelAllAcheduledNotificationsAsync()</a>がありますが特に細かいことは気にせず通知を止めたいだけなので、c<meta charset="utf-8">ancelAllAcheduledNotificationsAsync()を使用します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><meta charset="utf-8">export default function App() {
...
  return (
    &lt;View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}&gt;
      ...
      &lt;Button
        title="通知開始"
        onPress={async () =&gt; {
          await schedulePushNotification();
        }}
      /&gt;
      &lt;Button
        title="通知終了"
        onPress={async () =&gt; {
          await cancelAllScheduledNotificationsAsync();
        }}
      /&gt;
    &lt;/View&gt;
  );
}
...
async function cancelAllScheduledNotificationsAsync() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>通知音を鳴らしたい</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>サンプルコードのままでは通知音は鳴らないので、通知音が鳴るように設定します。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Notifications.setNotificationHandler({
  handleNotification: async () =&gt; ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><meta charset="utf-8"><span class="marker-blue">shouldPlaySound</span>をfalseからtrueに変更します。その他のshould~が何をしているかは<a rel="noreferrer noopener" href="https://docs.expo.dev/versions/latest/sdk/notifications/#setnotificationhandlerhandler-notificationhandler--null-void" target="_blank">ドキュメント</a>を確認してみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>次にschedulePushNotification()を修正します</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "通知です",
      body: '通知きました',
      sound:'default'
    },
    trigger: { 
      type: 'daily',
      repeats: true,
      hour: 23,
      minute: 0,
    },
  });
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>contentに<span class="marker-red"><strong>sound:'default'</strong></span>を追加します。これで通知音が鳴るようになりました。</p>
<!-- /wp:paragraph -->