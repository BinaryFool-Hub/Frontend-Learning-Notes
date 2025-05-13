# window对象

window是全局的，可以不写window直接使用方法

window 是 JavaScript 中浏览器环境的全局对象，代表浏览器窗口。
它包含了大量用于控制浏览器窗口、处理定时器、访问文档、管理存储等功能的属性和方法。

# JavaScript 执行环境对象结构图（浏览器环境）

```
                          +--------------------+
                          |      window        |
                          | (全局对象，BOM顶层) |
                          +--------------------+
                                   ▲
        +--------------------------+-------------------------+
        |                          |                         |
    +---------------+         +--------------+         +--------------------+
    |     BOM       |         |    DOM       |         | JavaScript 核心     |
    | (浏览器对象模型) |         | (文档对象模型) |         |  (Object, Array 等) |
    +---------------+         +--------------+         +--------------------+
        ▲                         ▲
        |                         |
+---------------+         +---------------+
| navigator     |         | document      |
| screen        |         | location      |
| history       |         | HTMLElement 等 |
| location      |         +---------------+
| frames        |
+---------------+
```

# 说明

window对象主要分为两大类(除js核心)：一个是浏览器封装的api，一个是操作文档的

## `window`（全局对象）

- 所有在浏览器中运行的 JS 都以 `window` 为全局对象。
- `window` 是 `BOM` 和 `DOM` 的顶层容器。

## BOM（Browser Object Model，浏览器对象模型）

- 提供与浏览器窗口交互的对象：
    - `navigator`：浏览器信息
    - `location`：地址栏信息
    - `history`：浏览历史
    - `screen`：屏幕分辨率信息
    - `frames`：页面中的 `<iframe>` 集合

## DOM（Document Object Model，文档对象模型）

- 提供与页面内容交互的对象：
    - `document`：页面的入口点
    - `Element` / `HTMLElement`：代表 HTML 元素的类
    - `Node`：所有 DOM 节点的基类
    - `location`：也出现在 `DOM` 和 `BOM` 中（是同一个对象）

## JavaScript 核心对象（ECMAScript）

- 包括 `Object`, `Array`, `Function`, `Date`, `RegExp`, `Promise` 等。
- 与 BOM / DOM 属于不同的标准（ECMAScript vs Web APIs）。