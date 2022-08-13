---
slug: /890
date: '2022-03-26 00:31:01'
title: Vue3 + TypeScript チートシートっぽいもの
thumbnail:
tags: ['vue.js']
---

# Vue3 + TypeScript チートシートっぽいもの

## 基本構成

```javascript
<script setup lang="ts">
  ...
</script>

<template>
  ...
</template>

<style scoped>
  ...
</style>
```

## リアクティビティ API

```javascript
<script setup lang="ts">
import { ref, reactive, computed, toRefs } from "vue";
</script>
```

### ref

```javascript
const count = ref<number>(0);
```

### reactive

```javascript
interface State {
  name: string;
  age: number;
}
const state = reactive<State>({
  name: "yoshida",
  age: 36,
});
```

### toRefs

ref を代入すると参照が切れてリアクティブ性が失われるので toRefs

```javascript
const { name, age } = toRefs(state);
```

## computed

```javascript
const upperCaseName = computed(() => state.name.toUpperCase());
```

## Template

### 変数参照

```html
<template>
  <div>名前：{{ state.name }} | {{ upperCaseName }}
  <div>名前（toRef） {{ name }}
  <div>年齢：{{ state.age }}歳
  <div>年齢（toRef） {{ age }}
</template>

```

### ディレクティブ

```html
<template>
  <div>{{ count }}
  <button type="button" @click="count++">カウントアップ</button>
</template>
```

## Props

### 親

```html
<template>
  <Child label="propsLabel"/>
</template>
```

### 子

コンパイラマクロだから import は不要

```javascript
<script setup lang="ts">
//型定義
interface Props {
  label: string;
}
//props
defineProps<Props>();
</script>

<template>
  <div>{{ label }}</div>
</template>
```

#### 初期値を設定する場合

```javascript
<script setup lang="ts">
//型定義
interface Props {
  label: string;
}
//初期値を設定
withDefaults(defineProps<Props>(), { label: "defaultLabel" });
</script>
```

## Emit

### 親

```javascript
const changeName = (value: string) => {
  state.name = value;
};
const updateName = (value: string) => {
  state.name = value;
};
```

```html
  <Child @change="changeName" @update="updateName" label="propsLabel" />
```

### 子

```javascript
//型定義
interface Emits {
  (event: "change", value: string): void;
  (event: "update", value: string): void;
}
//Emit
const emit = defineEmits<Emits>();
const handleUpdate = () => {
  emit("update", "update!");
};
```

```html
<template>
  <input type="text" @input="handleInput" />
  <button type="button" @click="handleUpdate">アップデート</button>
</template>
```

### Event

細かいことはおいておいて TypeScript で Event の扱いはややこしいのでとにかく使い方

#### instanceof で Type Guard

```javascript
const handleInput = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit("change", e.target?.value);
  }
};
```

#### as でキャスト

```javascript
const handleInput = (event: Event) => {
  emit("change", (event.target as HTMLInputElement).value);
};
```
