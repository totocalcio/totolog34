---
slug: /698
date: '2021-02-08 12:49:22'
title: gulpでscssのコンパイルの階層がうまくいかない
thumbnail: /img/blog/thumbnail/2021/698/group1-1.jpg
tags: ['css']
---
今まではvs codeのLive Sass Compilerのプラグインに頼っていたのですが、ファイルが増える度にimport文を毎回足すのが手間で、globを利用してimport文を減らそうと導入を検討しました。

同時にCSS設計はFLOCSSを採用しようとしたところ問題が発生しました。

コンパイルされたCSSが想定のディレクトリに出力されない。

ということです。

## scss の構造をそのまま維持して出力されてしまう

現在の挙動はこのようになっています。


![image](/img/blog/contents/2021/02/1.jpg)

style.scss では project ディレクトリ以外の scss を import して style.css を出力しています。

![image](/img/blog/contents/2021/02/image-4.png)

project ディレクトリの scss は単体で css を出力します。その時 project ディレクトリも css の下に作られてしまいます。
期待する動きは下記のように css の下にはディレクトリを作らず css ファイルが並ぶ形です。

![image](/img/blog/contents/2021/02/1-6.jpg)

## gulp-rename を使う

階層を変える為に gulp-rename を試しました。

```javascript
const { src, dest, watch, series } = require('gulp'),
  sass = require('gulp-sass'),
  sassGlob = require('gulp-sass-glob'),
  rename = require('gulp-rename')

const paths = {
  scss: './scss/',
  css: './css/',
}

const compileScss = (cb) => {
  src(paths.scss + "**/*.scss")
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(
      rename(function (path) {
        path.dirname = "";
      })
    )
    .pipe(dest(paths.css));
  cb();
};

const watchScss = watch(
  paths.scss + "**/*.scss",
  { usePolling: true },
  compileScss
);

exports.default = series(compileScss)
```

上記コードを実行した結果が下記の通りです。

![](../../../../images/2021/02/image.png)

![](../../../../images/2021/02/image-1.png)

想定通りの動きをしています。
gulp.watch で監視していますが、更新時も問題なく動きました。

![image](/img/blog/contents/2021/02/image-2.png)

![image](/img/blog/contents/2021/02/image-3.png)

初めての導入で、様々な情報を元に環境を整えようとしましたが、gulp3 と gulp4 では、gulp.task が非推奨だったりコールバック関数を返さないといけなかったり、desc なしでも watch が css を出力したり…と戸惑いましたがなんとか期待通りの動きを実現できました。
