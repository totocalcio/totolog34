---
slug: /890
date: "2022-03-26 00:31:01"
title: Vue3 + TypeScript チートシートっぽいもの
thumbnail: 
tags: ["vue.js"]
---
# Vue3 + TypeScript チートシートっぽいもの
<!-- wp:heading -->
<h2>基本構成</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;script setup lang="ts"&gt;
  ...
&lt;/script&gt;

&lt;template&gt;
  ...
&lt;/template&gt;

&lt;style scoped&gt;
  ...
&lt;/style&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>リアクティビティAPI</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;script setup lang="ts"&gt;
import { ref, reactive, computed, toRefs } from "vue";
&lt;/script&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>ref</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const count = ref&lt;number&gt;(0);</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>reactive</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>interface State {
  name: string;
  age: number;
}
const state = reactive&lt;State&gt;({
  name: "yoshida",
  age: 36,
});</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>toRefs</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>refを代入すると参照が切れてリアクティブ性が失われるので toRefs</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const { name, age } = toRefs(state);</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>computed</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const upperCaseName = computed(() =&gt; state.name.toUpperCase());</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>Template</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>変数参照</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;template>
  &lt;div>名前：{{ state.name }} | {{ upperCaseName }}&lt;/div>
  &lt;div>名前（toRef） {{ name }}&lt;/div>
  &lt;div>年齢：{{ state.age }}歳&lt;/div>
  &lt;div>年齢（toRef） {{ age }}&lt;/div>
&lt;/template>
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>ディレクティブ</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;template&gt;
  &lt;div&gt;{{ count }}&lt;/div&gt;
  &lt;button type="button" @click="count++"&gt;カウントアップ&lt;/button&gt;
&lt;/template&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>Props</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>親</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;template&gt;
  &lt;Child label="propsLabel"/&gt;
&lt;/template&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>子</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>コンパイラマクロだからimportは不要</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;script setup lang="ts"&gt;
//型定義
interface Props {
  label: string;
}
//props
defineProps&lt;Props&gt;();
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;{{ label }}&lt;/div&gt;
&lt;/template&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4>初期値を設定する場合</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;script setup lang="ts"&gt;
//型定義
interface Props {
  label: string;
}
//初期値を設定
withDefaults(defineProps&lt;Props&gt;(), { label: "defaultLabel" });
&lt;/script&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>Emit</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>親</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const changeName = (value: string) =&gt; {
  state.name = value;
};
const updateName = (value: string) =&gt; {
  state.name = value;
};</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>  &lt;Child @change="changeName" @update="updateName" label="propsLabel" /&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>子</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//型定義
interface Emits {
  (event: "change", value: string): void;
  (event: "update", value: string): void;
}
//Emit
const emit = defineEmits&lt;Emits&gt;();
const handleUpdate = () =&gt; {
  emit("update", "update!");
};</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;template&gt;
  &lt;input type="text" @input="handleInput" /&gt;
  &lt;button type="button" @click="handleUpdate"&gt;アップデート&lt;/button&gt;
&lt;/template&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Event</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>細かいことはおいておいてTypeScriptでEventの扱いはややこしいのでとにかく使い方</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>instanceof で Type Guard</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const handleInput = (e: Event) =&gt; {
  if (e.target instanceof HTMLInputElement) {
    emit("change", e.target?.value);
  }
};</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4>as でキャスト</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const handleInput = (event: Event) =&gt; {
  emit("change", (event.target as HTMLInputElement).value);
};</code></pre>
<!-- /wp:code -->