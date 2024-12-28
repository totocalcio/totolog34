---
_path: "/342"
date: '2020-08-25 10:53:45'
title: またExpoでエラー。QRコードが表示されない
thumbnail:
tags: ['Expo']
---
試行錯誤の内容も書いてあります。結論は最後に書いてあります。

![image](/img/blog/contents/2020/08/image-39.png)

本当にすぐにエラーが出る・・・Expo Developer Tools も QR コードが表示されていない。

![image](/img/blog/contents/2020/08/image-29.png)

何も表示されません。
npm start androidしてみたら

![image](/img/blog/contents/2020/08/image-30.png)

めっちゃエラーでた。package.json が見つからないってそのパスにはないから当然なんだけど、どうすればいいのかな・・・とりあえず package.json 見てみる。

![image](/img/blog/contents/2020/08/image-31.png)

npm start androidじゃなくてexpo start –androidしてみる

![image](/img/blog/contents/2020/08/image-32.png)

エミュレーターがうまくいってないみたい

![image](/img/blog/contents/2020/08/image-34.png)

Android studio もエラーだしてた。前もみたよこのエラー・・・

![image](/img/blog/contents/2020/08/image-35.png)

adbを再移動した。その後エミュレーターを起動してexpo startからRun on Android device/emulatorする

![image](/img/blog/contents/2020/08/image-36.png)

![image](/img/blog/contents/2020/08/image-37.png)

ふりだしに戻る・・・もうなんなんだ・・・

![image](/img/blog/contents/2020/08/image-38.png)

調べてもまったくわからないので expo をアップデートすることにした

![image](/img/blog/contents/2020/08/1-1.png)

表示された

## まとめ

QR コードが表示されなくなったら（エミュレーターが Expo を認識しなくなったら）、どうしようもない場合 expo update する
