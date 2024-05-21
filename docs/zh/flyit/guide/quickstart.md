---
title: 快速上手
---

# 快速上手

这是一个通用的 `JS` 包，原则上你可以在任何能运行 `JavaScript` 的地方使用

## 1. 在 Vue / React 中使用

```js
import { FlyHttp } from '@anyup/flyit'
const flyHttp = new FlyHttp.Builder(instance: AxiosInstance)
const urls = {
  userLogin: { url: '/api/user/login', method: 'POST' },
  userLogout: { url: '/api/user/logout', method: 'POST' },
}
const api = flyHttp.dispatch(urls)

// 用户登录
await api.userLogin({ data: { username, password }})
// 用户退出登录
await api.userLogout()
```

## 2. 在 h5 / browser 中使用

> 复制 `dist` 文件夹下的 `flyit.umd.js`文件 引入现有的项目中

```html
<script src="./dist/flyit.umd.js"></script>

<script>
  const { FlyHttp } = Flyit
  const baseURL = ''
  const headers = { 'Content-type': 'application/json' }
  function ajaxRequest({ url, method, data, success, fail, complete }) {
    $.ajax({
      url,
      type: method,
      data,
      dataType: 'json',
      headers,
      success: success,
      error: fail,
      complete: complete
    })
  }

  const flyHttp = new FlyHttp.Builder(config => {
    const { url, method, data } = config
    return ajaxRequest(config)
  })
</script>
```

## 3. 在 node 中使用

### 3.1 ESM 模块规范

```js
import { FlyHttp } from '@anyup/flyit'
```

### 3.2 CJS 模块规范

```js
const { FlyHttp } = require('@anyup/flyit')
```
