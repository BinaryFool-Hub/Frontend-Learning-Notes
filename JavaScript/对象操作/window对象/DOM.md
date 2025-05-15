# document文档操作

document 是 DOM（文档对象模型） 的一部分，主要用于操作当前网页中的内容和结构。
它提供了访问和操作 HTML 或 XML 文档的能力。你可以使用 document 对象来获取、修改、删除网页中的元素、文本、属性等内容。

## 使用数组元素遍历的注意事项

在操作类数组对象（如 NodeList 或 HTMLCollection）时，推荐使用以下方式：

```javascript
// 推荐 ✅
for (let i = 0; i < elems.length; i++) {
    const el = elems[i];
    // ...
}

Array.from(elems).forEach(obj => {
    // ...
});
```

避免使用以下方法：

```javascript
// 不推荐，会遍历原型链上的属性
for (let key in elems) {
}

// 并非所有类数组都支持 forEach（兼容性有限）
elems.forEach(obj => {
});  
```

注：现代浏览器中 NodeList.prototype.forEach 已广泛支持，旧浏览器如 IE 不支持。

# 获取元素

```javascript
/**
 * 获取单个元素
 * */
const element = document.getElementById("myId");  // 通过 ID 获取元素
const element = document.querySelector("body .myClass");  // 支持任意 CSS 选择器

/**
 * 获取多个元素，返回类数组的 NodeList，可通过下标访问
 * */
const elements = document.getElementsByClassName("myClass");  // 通过类名获取多个元素
const elements = document.getElementsByName("nam_value");  // 通过name属性获取多个元素，常用于表单的input
const elements = document.getElementsByTagName('input');  // 通过标签获取多个元素
const elements = document.querySelectorAll("body .myClass");  // 支持任意 CSS 选择器
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
 * 获取/设置 属性的标准方式(推荐)
 * 适用于自定义属性或需要更细节控制时，比 element.href 更安全。
 * */
const element = document.getElementById("myId");
element.getAttribute("href");
element.setAttribute("href", "https://example.com");

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

# 删除元素的操作

```javascript
const element = document.getElementById("myId");

element.remove();  // 直接删除自身
parent.removeChild(child);  // 老方法，兼容性更好
```

# 事件监听

```javascript
document.getElementById("myButton").addEventListener("click", () => {
    alert("按钮被点击");
});
```

