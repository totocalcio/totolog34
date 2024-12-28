---
_path: "/401"
date: "2020-09-29 17:19:01"
title: summaryタグの使い方に注意。構文エラーとiOSバグ。
thumbnail:
tags: ["CSS", "HTML"]
---

HTML5 で追加された\<summary\>タグをご存知でしょうか。CSS すら不要でお手軽にアコーディオンがつくれてしまうタグです。

[http://www.htmq.com/html5/summary.shtml](http://www.htmq.com/html5/summary.shtml)

しかし summary タグで気をつけないといけないことがいくつかありますのでご紹介します。

## summary タグでできること

できないことより先にできることとして、HTML と CSS を調整したサンプルを紹介します。

[CodePen.](https://codepen.io/totocalcio/pen/abNXMVz)

「summary 　アコーディオン」等で検索して、（アニメーションつけたいな）って考えたらだいたい出てくるのは高さを固定にする方法です。全ての要素が固定ならそれも可能ですが、例えばサンプルのように Q&A などで答えの文字数（高さ）がばらばらだったりするとそうはいきません。

スラスラするアニメーションの設定は面倒なので、そのかわりふわっとしたアニメーションならばうまくごまかせるかもしれません。

それではここからが本題のできないことです。

## summary タグでできないこと

### スラスラしづらい

できないわけじゃないけど、使いづらい。できることで説明した内容です。
いわゆる jQuery の slideToggle()的なことです。
高さを固定にして transition を指定すれば可能ですが、レスポンシブを気にする必要もあるのにテキスト量も考えて...なんてことはやっぱり使いづらいです。

### flex がきかない(iOS)

下記のサンプルコードを見て下さい。

[CodePen.](https://codepen.io/totocalcio/pen/WNwWqdZ)

環境によっては別に問題なさそうに見える人もいるかもしれないけれど、実は iOS のみ flex がきいていない。

![image](/img/blog/contents/2020/09/IMG_1785.png)

これは iOS のバグのようなので仕方ありません。

参考：[https://github.com/philipwalton/flexbugs#flexbug-9](https://github.com/philipwalton/flexbugs#flexbug-9)

### バグの解決策

解決策は冒頭のコードを確認してもらえばわかると思いますが、要素を別のタグでラップして、そこに flex を設定します。
しかし１点注意が必要で、div タグは使えないということです。
もし使うと構文エラーになります。（もちろん表示はされますが）

![image](/img/blog/contents/2020/09/image-18.png)

そういう理由でサンプルコードでは span タグを使用しています。
