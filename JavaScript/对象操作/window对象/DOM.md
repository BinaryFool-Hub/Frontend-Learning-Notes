# document文档操作

document 是 DOM（文档对象模型） 的一部分，主要用于操作当前网页中的内容和结构。
它提供了访问和操作 HTML 或 XML 文档的能力。你可以使用 document 对象来获取、修改、删除网页中的元素、文本、属性等内容。

注意：❗
需要操作数组里面的元素建议使用传统的`for (let i = 0; i < elems.length; i++) {}`下标取值或者`Array.from(elems).forEach(obj => {});`
避免使用`for in`和`elems.forEach(obj => {})`，第一个：因为它会遍历所有可枚举属性，而不仅仅是数组元素，第二个：兼容性问题

# 获取元素

```javascript
/**
 * 获取单个元素
 * */
const element = document.getElementById("myId");  // 通过 ID 获取元素
const element = document.querySelector("body .myClass");  // 通过 类名/标签/选择器…… 获取单个元素（css可以选择中的它都可以）

/**
 * 获取多个元素，返回元组的形式，通过下标操作单个元素
 * */
const elements = document.getElementsByClassName("myClass");  // 通过类名获取多个元素
const elements = document.getElementsByName("nam_value");  // 通过name属性获取多个元素，常用于表单的input
const elements = document.getElementsByTagName('input');  // 通过标签获取多个元素
const elements = document.querySelectorAll("body .myClass");  // 通过 类名/标签/选择器…… 获取多个元素（css可以选择中的它都可以）
```

# 修改/获取 元素内容/属性

```javascript
/**
 * 修改/获取 标签属性内容
 * 里面标签里面有什么属性就可以 获取/更改 什么属性，文本的属性为textContent，链接的属性为href，表单input的text使用value，……
 * */
const element = document.getElementById("myId");  // 获取元素
console.log("原来的文本内容：", element.textContent);  // 输出原文本
element.textContent = "更改后的文本内容";  // 更改文本

/**
 * 修改 HTML 内容，会直接更改里面的HTML代码
 * */
const element = document.getElementById("myId");
element.innerHTML = "<p>新HTML内容</p>";
```

# 创建新元素添加到页面

```javascript
const div = document.getElementById('div');  // 获取id为div的元素
const newDiv = document.createElement("div");  // 创建一个div元素
newDiv.textContent = "这是新创建的元素";  // 赋值文本该创建的div元素
div.appendChild(newDiv);  // 将新元素添加到获取到的id为div的，形成子元素
```

# 事件监听

```javascript
document.getElementById("myButton").addEventListener("click", () => {
    alert("按钮被点击");
});
```

