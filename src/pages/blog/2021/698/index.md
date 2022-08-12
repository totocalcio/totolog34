---
slug: /698
date: "2021-02-08 12:49:22"
title: gulpでscssのコンパイルの階層がうまくいかない
thumbnail: グループ-1-1.jpg
tags: ["css"]
---
# gulpでscssのコンパイルの階層がうまくいかない
<!-- wp:paragraph -->
<p>今までは<span class="blue">vs code</span>の<span class="bold-green">Live Sass Compiler</span>のプラグインに頼っていたのですが、ファイルが増える度にimport文を毎回足すのが手間で、<span class="bold-green">glob</span>を利用してimport文を減らそうと導入を検討しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>同時にCSS設計は<span class="bold-green">FLOCSS</span>を採用しようとしたところ問題が発生しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="bold-red">コンパイルされたCSSが想定のディレクトリに出力されない。</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ということです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>scssの構造をそのまま維持して出力されてしまう</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>現在の挙動はこのようになっています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":699,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/グループ-1.jpg" alt="" class="wp-image-699"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>style.scssではprojectディレクトリ以外のscssをimportしてsytle.cssを出力しています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":708,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/image-4.png" alt="" class="wp-image-708"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>projectディレクトリのscssは単体でcssを出力します。その時projectディレクトリもcssの下に作られてしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>期待する動きは下記のようにcssの下にはディレクトリを作らずcssファイルが並ぶ形です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":700,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/画像1-6.jpg" alt="" class="wp-image-700"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>gulp-renameを使う</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>階層を変える為にgulp-renameを試しました。</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const { src, dest, watch, series } = require("gulp"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  rename = require("gulp-rename");

const paths = {
  scss: "./scss/", 
  css: "./css/", 
};

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

exports.default = series(compileScss);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>上記コードを実行した結果が下記の通りです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":704,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/image.png" alt="" class="wp-image-704"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":705,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/image-1.png" alt="" class="wp-image-705"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>想定通りの動きをしています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>gulp.watchで監視していますが、更新時も問題なく動きました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":706,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/image-2.png" alt="" class="wp-image-706"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":707,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://totolog34.com/wp/wp-content/uploads/2021/02/image-3.png" alt="" class="wp-image-707"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>初めての導入で、様々な情報を元に環境を整えようとしましたが、gulp3とgulp4では、gulp.taskが非推奨だったりコールバック関数を返さないといけなかったり、descなしでもwatchがcssを出力したり…と戸惑いましたがなんとか期待通りの動きを実現できました。</p>
<!-- /wp:paragraph -->