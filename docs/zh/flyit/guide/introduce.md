---
title: 介绍
---

# 介绍

## 一. 认识网络请求

在开发前端项目时，我们经常需要对接后端接口，进行前后端交互。从最初的 `XMLHttpRequest` `Fetch API` 到 `ajax` ，再到 `axios`，各种各样的搭配不同框架的网络请求库应运而生。

在前端开发中，网络请求通常使用形式，包括但不限于以下几种形式：

1. **原生 JavaScript**：通过原生的 `XMLHttpRequest` 对象或者 `Fetch API` 来发起网络请求。

2. **jQuery**：`jQuery` 是早期 `JavaScript` 框架中的王者，同时提供了方便的 `AJAX` 方法来发送网络请求。

3. **Vue**：`Vue.js` 可以说是在国内前端框架的佼佼者，它提供了 `Vue Resource` 或者 `axios` 这样的插件来处理网络请求。

4. **React**：`React` 是另一款热门的前端框架，它本身并没有集成网络请求的功能，所以通常也会搭配像 `axios` 或者 `Fetch API` 这样的库来进行网络请求。

5. **uni-app**：`uni-app` 是一个基于 `Vue.js` 的跨平台应用开发框架，在 `uni-app` 中，可以使用封装了网络请求功能的 `uni.request` API 来进行网络请求，它类似于原生的 `Fetch API`，但做了一些适配工作以支持在不同平台上的使用。

本项目不会重复建造轮子，也不会对这些优秀的网络请求库二次封装，而是以另一种思维方式与这些优秀的请求框架结合，其主要目的是加速自己在前端项目中的请求构建，优化在开发项目时的极致体验。

## 二. 讲述开发思想

以 `Vue.js` 框架为例子，我们简单看一下使用 axios 在前端中请求方式

### 1. 二次封装 axios

在我们进行前端项目开发时，封装 `axios` 是必须的。因为每个项目业务可能都不一样，但是封装思想都是一样的，封装适合自己的 `axios`，不但可以统一管控自己的请求入口，还能大大节约请求工作量，这其中的好处不言而喻。

直接拿来我自己封装的 `axios` 核心代码，包括但不限于以下的简单形式：主要是构建实例，请求拦截等。

```js
import axios, { AxiosInstance } from 'axios';

// 配置新建一个 axios 实例
const request: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
request.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么，比如认证token
		if ('token') {
			config.headers!['Authorization'] = 'token';
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
request.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			if (res.code === 401) {
			}
			return Promise.reject(request.interceptors.response);
		} else {
			return res;
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			console.error('网络超时');
		} else if (error.message == 'Network Error') {
			console.error('网络连接错误');
		} else {
			if (error.response.data) console.error(error.response.statusText);
			else console.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default request;
```

### 2. 开发请求 API

对以上简单封装后，我们就可以使用封装好的 `axios` 实例来进行编写请求方法了

```js
import request from '@/utils/request'

// 定义接口地址
const api = {
  useLogin: '/api/user/login', // 用户登录
  useLogout: '/api/user/logout' // 用户登出
  // ...等等还有很多接口地址
}

// 用户登录方法
export function useLogin(data) {
  return request({
    url: api.useLogin,
    method: 'POST',
    data
  })
}

// 用户登出方法
export function useLogout(data) {
  return request({
    url: api.useLogout,
    method: 'POST',
    data
  })
}

// ...等等还有很多方法
```

### 3. 总结说明

以上的这种请求使用方式是在前端项目中，我认为是最常见的代码书写方式，很简单、很规范、也很好理解，可以说结构特别清晰，我认为完全没有问题！

但是我们我们有没有想过，我们在不断的重复写一些代码，不断重复的写这些 API 声明、API 请求方法！如果是一个庞大的应用，API 有几百个也是有可能的。

试想一下：有多少个 API 地址，我们就会写多少个请求方法。如果将来需要改动，我们也要联动改动。那么在实际开发中可不可以优化呢？这些重复的方法声明可以省略掉吗？（重复的代码我不想写第二遍）

因此，本工具的理念就是做这些重复的劳动，我们只需要配置，其他的交给工具就可以了！

## 三. 适用领域

这是一个通用的 `JS` 包，适用于任何在前端开发中，原则上你可以在任何能运行 `JavaScript` 的地方使用，与框架无关，包括但不限于使用以下方式开发：

- JavaScript
- Vue.js
- React.js
- Angular.js
- uni-app
- 小程序

## 四. 说明

1. 在使用本工具前，要求你至少了解相关框架的不同网络请求库的使用方式，比如：`axios`、`ajax`、`Fetch API`的基本使用和基本配置，然后再查看本文档。

2. 本文档仅负责介绍 `Flyit` 相关使用，更多其他相关请移步

- [Vue：https://cn.vuejs.org/](https://cn.vuejs.org/)

- [uni-app：https://uniapp.dcloud.io/](https://uniapp.dcloud.io/)

- [axios：https://axios-http.com/zh/](https://axios-http.com/zh/)

## 五. 版权信息

> flyit 遵循 MIT 开源协议，但禁止将此应用到非法的领域，如因此产生纠纷等法律问题，flyit 不承担任何责任。
