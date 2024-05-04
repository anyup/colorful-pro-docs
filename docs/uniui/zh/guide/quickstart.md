---
title: 快速上手
---

# 快速上手

## main.js 注册

```js
// 项目中最好使用Vuex Store，因为部分功能依赖
import store from './store'
import uniUI from '@anyup/uniui'
Vue.use(uniUI, { store })
```

## App.vue 导入全局样式

```scss
<style lang="scss">
@import '@anyup/uniui/index.scss';

page {
  height: 100%;
  background-color: #ffffff;
}
</style>
```

## uni.scss 导入主题样式

```scss
@import '@anyup/uniui/theme.scss';
// 主题颜色
$is-type-primary: #2979ff;
$is-type-primary-light: #ecf5ff;
$is-type-primary-disabled: #a0cfff;
$is-type-primary-dark: #2b85e4;

$is-type-warning: #ff9900;
$is-type-warning-disabled: #fcbd71;
$is-type-warning-dark: #f29100;
$is-type-warning-light: #fdf6ec;

$is-type-success: #19be6b;
$is-type-success-disabled: #71d5a1;
$is-type-success-dark: #18b566;
$is-type-success-light: #dbf1e1;

$is-type-error: #fa3534;
$is-type-error-disabled: #fab6b6;
$is-type-error-dark: #dd6161;
$is-type-error-light: #fef0f0;

$is-type-info: #909399;
$is-type-info-disabled: #c8c9cc;
$is-type-info-dark: #82848a;
$is-type-info-light: #f4f4f5;
// 其他颜色
$is-main-color: #303133;
$is-content-color: #606266;
$is-tips-color: #909399;
$is-light-color: #c0c4cc;
$is-border-color: #e4e7ed;
$is-bg-color: #f3f4f6;
$is-form-item-border-color: #dcdfe6;
$is-form-item-height: 70rpx;

```

## 全局引用

- 通过 npm 和下载方式的配置之后，在某个页面可以直接使用组件，无需通过 import 引入组件。
- easycom 配置

```js
"^au-(.*)": "@anyup/uniui/components/au-$1/au-$1.vue"
```

```html
<template>
  <au-layout :page-show="pageShow" :bg-color="bgColor" loading-text="加载中">
    <slot></slot>
  </au-layout>
</template>

<script>
  export default {
    data() {
      return {
        bgColor: "#ffffff",
        pageShow: true,
      };
    },
  };
</script>
```

## 单独引用 `不建议`

```html
<template>
  <au-layout :page-show="pageShow" :bg-color="bgColor" loading-text="加载中">
    <slot></slot>
  </au-layout>
</template>

<script>
  import auLayout from "@anyup/uniui/components/au-layout/au-layout.vue";
  export default {
    components: {
      auLayout,
    },
    data() {
      return {
        bgColor: "#ffffff",
        pageShow: true,
      };
    },
  };
</script>
```

- 通过 npm 和下载方式的配置之后，在某个页面可以直接使用组件，无需通过 import 引入组件。

::: warning 注意

1. 由于组件引入是通过 easycom 形式的，写在 pages.json 中，以 au-开头，这可能和其他 UI 组件冲突
2. easycom 配置的规则优先级比页面引入的组件规则高
   :::
