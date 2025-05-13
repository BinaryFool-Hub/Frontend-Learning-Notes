# document文档操作

document 是 DOM（文档对象模型） 的一部分，主要用于操作当前网页中的内容和结构。
它提供了访问和操作 HTML 或 XML 文档的能力。你可以使用 document 对象来获取、修改、删除网页中的元素、文本、属性等内容。

# 获取元素

```javascript
/**
 * 获取单个元素
 * */
const element = document.getElementById("myId");  // 通过 ID 获取元素
const element = document.querySelector(".myClass");  // 通过类名获取单个元素

/**
 * 获取多个元素
 * */
const elements = document.getElementsByClassName("myClass");  // 获取多个同类元素
const elements = document.querySelectorAll(".myClass");  // 获取多个元素（类似于数组）
```

# 修改元素内容

```javascript
/**
 * 修改文本
 * */
const element = document.getElementById("myId");
element.textContent = "新文本";

/**
 * 修改 HTML 内容
 * */
const element = document.getElementById("myId");
element.innerHTML = "<p>新HTML内容</p>";
```

# 创建新元素添加到页面

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "这是新创建的元素";
document.body.appendChild(newDiv);  // 将新元素添加到页面
```

# 事件监听

```javascript
document.getElementById("myButton").addEventListener("click", () => {
    alert("按钮被点击");
});
```

# 修改元素属性

```javascript
document.getElementById("myImage").src = "newImage.jpg";
document.getElementById("myLink").href = "https://www.example.com";
```

# 表单操作

```javascript
const input = document.getElementById("myInput");
const value = input.value;  // 获取输入值
input.value = "新的输入";  // 设置输入值
```

