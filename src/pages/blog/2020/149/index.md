---
slug: /149
date: '2020-05-31 15:44:04'
title: 「JavaScriptをはじめよう」をはじめる
thumbnail:
tags: ['道のり', 'javascript']
---
**_注意：この記事はよくわからないまま進めているポイントがありますが、詰まった部分もあえて共有する目的で公開しています。_**

[https://note.com/erukiti/n/nc716e70fa9a1?magazine_key=m586c4ddc9ee1](https://note.com/erukiti/n/nc716e70fa9a1?magazine_key=m586c4ddc9ee1)

[前回の記事](https://totolog34.com/141/)の続きになりますが、完全にこちらの記事に沿って学んでいくことにしました。

## Nodist をインストールする

### 最新版の Nodist をダウンロード
[https://github.com/nullivex/nodist/releases](https://github.com/nullivex/nodist/releases)から最新版の exe ファイルをダウンロードします。

![image](../../../../images/2020/05/image-34.png)

**NodistSetup-v0.9.1.exe**をダウンロードします。

### Nodist をインストール

![image](../../../../images/2020/05/image-35.png)

**Next**

![image](../../../../images/2020/05/image-36.png)

**I Agree**

![image](../../../../images/2020/05/image-37.png)

**Install**

![image](../../../../images/2020/05/image-38.png)

待ちます

![image](../../../../images/2020/05/image-39.png)

Finish

### Nodist を使って Node.js をインストール

![image](../../../../images/2020/05/image-40.png)

Windows + R で「ファイル名を指定して実行」を開いて「powershell」を実行し、「nodist」を入力します。

![image](../../../../images/2020/05/image-41.png)

エラーが出る時は PowerShell を管理者実行する必要があります。

![image](../../../../images/2020/05/image-42.png)

**「スタートメニュー」**→**「Windows PowerShell」**→**「Windows PowerShell」**を右クリック→**「管理者として実行する」**

```
Set-ExecutionPolicy Unrestricted
```

**Windows PowerShell**が起動したら上記のコマンドを入力します。

![image](../../../../images/2020/05/image-43.png)

“Y”を入力し（小文字のyでもいい)、Enterを押します。

![image](../../../../images/2020/05/image-44.png)

Nodist が動くようになりました。

## Node.js の安定版（LTS）をインストールする

**注意：ここからがよくわからないポイント**

[リリース計画](https://github.com/nodejs/Release)から LTS のバージョンを確認します。

![image](../../../../images/2020/05/image-45.png)

10.xと12.xのStatusはLTSなので、上記の場合12.xになります。Currentは最新版ですが、少し不安定かもしれないバージョンなのでLTSを選択しておくのが確実です。

### PowerShell で LTS をインストール

LTS は 12.x なので「nodist + 12」を入力しインストールします。

![image](../../../../images/2020/05/image-46.png)

これで、LTS のバージョン 12 がインストールできまし...ん？

![image](../../../../images/2020/05/image-47.png)

v10.15.3・・・？12じゃない・・・？

### うまくいかないのであれこれ試す

![image](../../../../images/2020/05/image-48.png)

nodist +12で最新版をインストールして、

nodist 12でバージョン12を動くようにして、

node -vでバージョンを確認すると、10！！！

**なんでやねん！！！**

![image](../../../../images/2020/05/image-49.png)

12 の最新版じゃなくて、バージョンを完全に指定してみるもダメ。
あ、そうか。v をつけないといけないのかなｗ？

![image](../../../../images/2020/05/image-50.png)

違う、そうじゃない。（らしい）
何度やっても 12 が動かない。。。
えー、なんでだ。。。

### 解決策

結論：わかりませんでした。

![image](../../../../images/2020/05/image-51.png)

ある程度は調べてみましたが、リリース計画見ると 10 は Active だし、動作に問題なさそうだし、ここで調べる時間を割いてももったいないという判断で切り上げます！
