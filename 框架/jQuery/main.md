# jquery引入

- 如果你没有使用构建工具等其他方法，只是原生HTML编写需要在HTML文件引入
- 推荐body里面引入，如果在head引入会阻塞页面渲染（因为浏览器需要先下载并解析脚本），可能导致用户看到空白页的时间变长。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>

<!-- 引入jquery，后续使用更改为项目的相对路径更好 -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<!--<script src="你使用jquery编写的js代码.js"></script>-->
</body>
</html>
```

# dom对象选择操作

## 基本选择器(css选择器)

css语法可以选择的jquery都可以选择到(比如：基本选择，属性选择，多选，层级选择，伪类选择，……)，只需要`$()`里面写css选择器即可

```javascript
// 原生js获取dom对象
let dom_obj = document.getElementById('div1')
console.log(dom_obj);

// jQuery获取dom对象
let dom_obj = $('#div1')
console.log(dom_obj);
```

## 扩展选择器(CSS不支持的选择器jquery支持)

jQuery 提供了一些额外的选择器，这些在原生 CSS 中不存在，但是可以和css选择器一起使用：

- （1）表单相关
    - $(":input") – 选择所有 \<input>, \<select>, \<textarea>, \<button>
    - \$(":text") / \$(":password") / \$(":radio") / \$(":checkbox") – 选择特定类型的 \<input>
    - $(":checked") – 选择被选中的复选框或单选按钮
    - $(":selected") – 选择被选中的 \<option>

- （2）内容过滤
    - $(":contains('text')") – 选择包含指定文本的元素
    - $(":empty") – 选择空元素（无子节点）
    - $(":has(selector)") – 选择包含匹配 selector 的子元素的元素

- （3）可见性
    - $(":visible") – 选择可见的元素
    - $(":hidden") – 选择隐藏的元素（display: none 或 visibility: hidden）

## find/children查找其后代元素

| 方法            | 查找范围  | 是否递归后代 |
|---------------|-------|--------|
| `.find()`     | 所有后代  | ✅ 是    |
| `.children()` | 直接子元素 | ❌ 否    |

```javascript
const div = $('div');
const li = div.find('li');
console.log(li);
const not_find = div.children("li");  // 查询不到，只能是直接子元素，返回数组长度为0
console.log(not_find)
```

## siblings选择排除自身以外的同级元素

```javascript
const li_class = $('.li_class');

// 选择排除自身以外的同级元素
const result = li_class.siblings();
console.log(result)

// 选择排除自身以外的同级元素特有的特征(比如拥有什么属性，样式名称等)
const result1 = li_class.siblings('[data-type]');
console.log(result1)
```

## first/last获取第一个/最后一个满足选择条件的

```javascript
const li = $('li');

// 第一个满足条件的
const result_first = li.first();
console.log(result_first)

// 最后一个满足条件的
const result_last = li.last();
console.log(result_last)
```

## next/prev获取下一个/上一个同级元素

```javascript
const li = $('#div');

// 获取同级的下一个元素
const result_next = li.next();
console.log(result_next)

// 获取同级的上一个元素
const result_prev = li.prev();
console.log(result_prev)
```

## eq获取下标为index的元素

```javascript
// 使用eq()方法，填入索引即可
const li = $('li');

const li_index = li.eq(1);
console.log(li_index)
```

## parent获取父元素

```javascript
const li = $('#list');

const parent = li.parent();
console.log(parent);
```

# 遍历获取到的dom对象

| 项    | `this`              | `element`                                       |
|------|---------------------|-------------------------------------------------|
| 来源   | 回调函数上下文（自动绑定）       | `each(function(index, element) { ... })` 的第二个参数 |
| 类型   | 原生 DOM 元素           | 原生 DOM 元素                                       |
| 是否等价 | **等价**，但 `this` 更常用 | 和 `this` 一样                                     |

```javascript
// 获取元素，返回的是类数组
const elems = $("div");

// index 为遍历元素的序列号，从 0 开始
// element是当前的元素，此时是dom元素
elems.each(function (index, element) {  // 自行选择是否需要参数传递
    // this === element

    // 拿到该标签dom元素
    console.log(this);
    // 根据dom元素转成jquery对象，已经可以使用jquery的语法了
    console.log($(this));
    // 打印该对象的文本内容
    console.log($(this).text());
})
```

# dom对象和jQuery对象转换

只有jquery对象才可以使用自己的封装的语法

## DOM 对象 → jQuery 对象

直接用 $(domObject) 包裹 DOM 对象即可

```javascript
// 获取 DOM 对象
const domElement = document.getElementById("myDiv");
console.log(domElement);

// 转换为 jQuery 对象
const jQueryObject = $(domElement); // 现在可以使用 jQuery 方法
console.log(jQueryObject);

// 使用 jQuery 方法
jQueryObject.css("color", "red");
```

## jQuery 对象 → DOM 对象

由于 jQuery 对象是一个类数组集合，可以通过以下方式获取 DOM 对象：

1. \[index]（推荐简单场景）
2. .get(index)（和 \[index] 等效）

```javascript
// 获取 jQuery 对象
const jQueryObject = $("#myDiv");

// 方法1：使用数组索引 [0] 获取 DOM 对象
const domElement1 = jQueryObject[0];
domElement1.style.color = "blue"; // 使用原生 DOM API

// 方法2：使用 .get(0) 获取 DOM 对象
const domElement2 = jQueryObject.get(0);
domElement2.style.backgroundColor = "yellow";
```

# 元素属性操作

## attr/prop属性值操作

- 推荐：
    - 使用 attr() 操作静态属性
    - 使用 prop() 操作动态状态属性(在实际运行需要操作的属性)（如 checked, disabled, selected）

### attr

attr()：操作 HTML 属性
反映的是 HTML 中写死的属性值
示例：<input type="checkbox" checked="checked">

```javascript
let elems = $('div');


// 获取元素的属性值
console.log(elems.attr('id'));  // 只是获取到第一个的值，如果是id/只需要第一个的话就不需要遍历，直接这样即可

// 设置单个属性
elems.attr('data-type', 'div-stype');  // 设置属性，这是自定义属性，和获取属性一样可以遍历
// 设置多个属性
elems.attr({
    "data-type": 'username',
    placeholder: 'Enter your name'
});

// 如果获取/设置多个dom节点可以使用遍历来操作每一个
elems.each(function () {
    console.log($(this).attr('id'));  // 转换为jquery对象后使用获取属性方法获取，获取不到的就是undefined
})
```

### prop

prop()：操作 DOM 属性（JavaScript 对象）
反映的是元素当前的运行时状态
示例：checkbox 是否被选中

```javascript
const elems = $(":checkbox");

// 设置属性
elems.prop('checked', true);   // 如果是多个需要遍历设置也是可以的

// 如果是一个直接获取即可，多个则才需要遍历
elems.each(function () {
    console.log($(this).prop('checked'));  //转换为jquery对象后使用获取属性方法获取，返回布偶值，获取不到的就是undefined但是也可能返回默认值(比如：false)
})
```

## removeAttr移除属性

```javascript
let elem = $('div');

elem.removeAttr('data-type');
```

# 元素样式操作

也可以使用属性的操作更改样式的值，但就是会重新覆盖所有的值

```javascript
const div = $("div");

// 添加样式名称,不需要`.`
div.addClass('larger');  // 添加一个
div.addClass('colorWhite larger');  // 添加多个

// 添加具体的样式，形成的是行内样式
div.css('text-align', 'center');  // 单个
div.css({
    'font-weight': 900,
    'text-decoration': 'underline'
});  // 批量

// 移除指定样式
div.removeClass('colorWhite');  // 移除一个
div.removeClass('colorWhite larger');  // 移除多个

// 有样式就移除，无就添加
div.toggleClass('colorWhite');  // 操作一个
div.toggleClass('colorWhite larger');  // 操作多个
```

# 元素内容操作

```javascript
const div = $('div');

// 获取元素的value值，input的value值
console.log(div.val());
// 设置元素的value值
div.val("hello word");


// 获取HTML的内容
const html_content = div.html();
console.log(html_content)
// 设置HTML的内容
div.html("<h1>hello word</h1>");


// 获取文本的内容
const text_content = div.text();
console.log(text_content)
// 设置文本内容
dic.text("hello word");
```

# 元素创建/添加/删除/替换/克隆操作

## 创建元素

```javascript
let h1 = $('<h1>Hello jQuery</h1>')
console.log(h1);
```

## 添加元素

### 顶部位置

```javascript
let h1 = $('<h1>Hello jQuery</h1>')
let body = $("body");

/**
 * 可以传入字符串/字符串标签/jquery对象
 * 插入的位置是body里面的最顶上
 * */
body.prepend("你好");
body.prepend("<h1>hello word</h1>");
body.prepend(h1);


/**
 * 把h1对象加入body对象元素里面开头
 * */
h1.prependTo(body);
```

### 尾部位置

```javascript
let body = $("body");
let h1 = $('<h1>Hello jQuery</h1>')

/**
 * 可以传入字符串/字符串标签/jquery对象
 * 插入在元素里面的底部
 * */
body.append('老师');
body.append('<p>老师</p>');
body.append(h1);

/**
 * 把h1对象加入body对象元素里面尾部
 * */
h1.appendTo(body);
```

### 自定义位置

```javascript
let div = $("div");
let h1 = $('<h1>Hello jQuery</h1>');

/**
 * 可以传入字符串/字符串标签/jquery对象
 * 在什么(div)对象前插入数据
 * */
div.before('<h1>Hello jQuery</h1>');
div.before('你好');
div.before(h1);

/**
 * 可以传入字符串/字符串标签/jquery对象
 * 在什么(div)对象后插入数据
 * */
div.after('<h1>Hello jQuery</h1>');
div.after('你好');
div.after(h1);
```

## 删除元素

```javascript
// 删除本身极其下面的元素
$('div').remove();
```

## 替换元素

语序不一样而已，作用一样

```javascript
const div = $('div');

/**
 * 用新内容替换这些元素
 * */
div.replaceWith('<p>hello word</p>')  // 也可以传入$对象


/**
 * 用新内容替换所有匹配选择器的元素
 * */
$('<p>hello word</p>').replaceAll(div)  // 可以传入字符串的选择器(body > div)
```

## 克隆元素

和JavaScript差不多的语法

```javascript
const div = $('div');

/**
 * true：子节点也一起克隆
 * false：只克隆当前的元素，不涉及子元素
 * */
const result = div.clone(true);

console.log(result)

// 克隆出来的节点可以插入到新的位置
div.after(result)
```

# 事件操作

## 绑定事件

填写的事件和JavaScript的一样

### on方法(推荐，更现代)

```javascript
// 单个事件
$('#btn').on('click', function () {
    console.log('你的操作代码');
});

// 多个事件
$('#btn').on('mouseenter mouseleave', function () {
    console.log('你的操作代码');
});

// 多个事件多个操作
$('.box').on({
    click: function () {
        console.log('你的操作代码');
    },
    mouseout: function () {
        console.log('你的操作代码');
    }
});
```

### 直接事件(简写)

```javascript
$('#btn').click(function () {
    console.log("你的操作代码");
});
```

### 一次性事件

```javascript
// 只触发一次
$('#btn').one('click', function () {
    console.log("你的操作代码");
});
```

## 解绑事件

```javascript
$('#btn').off('click'); // 解绑 click 事件
```

## ready加载事件

| 特性     | `$(document).ready()` | `window.load`  |
|--------|-----------------------|----------------|
| 触发时机   | DOM 构建完成              | 所有资源加载完成       |
| 等待图片资源 | ❌ 否                   | ✅ 是            |
| 适合用途   | 初始化 DOM 操作            | 依赖图片或完整页面加载的操作 |
| 执行速度   | 更快                    | 更慢             |

`window.addEventListener('load')`是在页面所有资源（包括图片、CSS、视频等）加载完后触发，所以他们不等价
用于在 DOM 加载完成后立即执行代码，不必等图片、视频等资源加载完。

```javascript
/**
 * 这三种写法都是一样的，只是写法风格不一样
 * */

// 写法一(不被推荐了，使用了弃用符号)
$(document).ready(function () {
    console.log('DOM 已就绪');
});

// 写法二
$(function () {
    console.log('DOM 已就绪');
});

// 写法三
$(() => {
    console.log('DOM 已就绪');
})
```

# Ajax请求

官网使用方法：https://api.jquery.com/jQuery.ajax/

## $.ajax()（最灵活，推荐）

### json数据

```javascript
$.ajax({
    url: '/api/data',
    type: 'GET',  // 或 'POST'
    data: JSON.stringify({  // 序列化json数据，方便数据类型传递
        id: 1,  // 可选：发送的数据
    }),
    async: true,  // 是否异步请求，默认就是true，可以选择不写
    dataType: 'json',  // 返回类型（json/text/html）
    contentType: "application/json",  // 设置请求类型用
    success: function (res) {  // 成功执行的代码
        console.log('成功：', res);
    },
    error: function (err) {  // 失败执行的代码
        console.error('失败：', err);
    }
});
```

### 文件数据

```javascript
const form = document.getElementById("myForm");
const formData = new FormData(form); // 自动包含所有表单字段

// 输出查看键值对数据（调试的时候可以使用）
// for (const [key, value] of formData.entries()) {
//     console.log(key, ": ", value);
// }

// 可继续追加额外数据
formData.append("age", "20");

// 发送 AJAX 请求
$.ajax({
    url: "/upload", // 后端接口地址
    type: "POST",
    data: formData,
    contentType: false, // 必须设置为 false，让浏览器自动设置 Content-Type
    processData: false, // 必须设置为 false，防止 jQuery 自动转换数据
    success: function (response) {
        console.log("上传成功", response);
    },
    error: function (err) {
        console.log("上传失败", err);
    }
});
```

## $.get()（简洁 GET 请求）

```javascript
// {id: 1}是参数，可选的，不要直接删除即可
$.get('/api/data', {id: 1}, function (res) {
    console.log('结果：', res);
});
```

## $.post()（简洁 POST 请求）

```javascript
$.post('/api/submit', {name: '张三'}, function (res) {
    console.log('提交成功：', res);
});
```