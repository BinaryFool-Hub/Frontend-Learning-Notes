# document文档操作

document 是 DOM（文档对象模型） 的一部分，主要用于操作当前网页中的内容和结构。
它提供了访问和操作 HTML 或 XML 文档的能力。你可以使用 document 对象来获取、修改、删除网页中的元素、文本、属性等内容。

## 使用数组元素遍历的注意事项

在操作类数组对象（如 NodeList 或 HTMLCollection）时，不是很推荐传统for循环，推荐使用以下方式：

```javascript
// for...of（适用于类数组，如 NodeList, HTMLCollection）
const elements = document.getElementsByClassName('item');
for (const el of elements) {
    console.log(el);
}


// forEach（适用于 NodeList）
document.querySelectorAll('.item').forEach(el => {
    console.log(el);
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

# 元素内容操作

```javascript
/**
 * 修改/获取 标签内容
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

# 元素属性操作

```javascript
const el = document.getElementById("myId");

el.setAttribute("data-id", "123");       // 设置属性
el.getAttribute("data-id");              // 获取属性，返回属性值
el.hasAttribute("data-id");              // 是否存在该属性，返回布偶值
el.removeAttribute("data-id");           // 移除属性
```

# 元素类名操作(classList)

```javascript
const el = document.getElementById("myId");

el.classList.add("class_name");         // 添加类名
el.classList.remove("class_name");      // 移除类名
el.classList.toggle("class_name");        // 有就移除，没有就添加
el.classList.contains("class_name");     // 是否包含某个类名（返回布尔）
```

# 元素节点操作

## 创建新元素添加到页面

### 置后追加

```javascript
const div = document.getElementById('div');  // 获取id为div的元素
const newDiv = document.createElement("div");  // 创建一个div元素
newDiv.textContent = "这是新创建的元素";  // 赋值文本该创建的div元素
div.appendChild(newDiv);  // 将新元素添加到获取到的id为div的，形成子元素
```

### 自定义追加位置

```javascript
const parent = document.getElementById("list");
const Node = document.getElementById("banana");

const newNode = document.createElement("li");
newNode.textContent = "橘子";

// 插入
parent.insertBefore(newNode, Node);  // 插入到 Node 前
```

## 删除元素的操作

```javascript
const element = document.getElementById("myId");
const parent = document.getElementById('parent');

element.remove();  // 直接删除自身
parent.removeChild(element);  // 老方法，兼容性更好(parent是父级，删除父级下面的元素)
```

## 节点关系操作

都会返回一个节点对象

```javascript
const el = document.getElementById("myId");

el.parentNode          // 父节点
el.children            // 所有子节点（HTMLCollection）
el.firstElementChild   // 第一个子元素
el.lastElementChild    // 最后一个子元素
el.nextElementSibling  // 下一个兄弟元素
el.previousElementSibling // 上一个兄弟元素
```

## 节点替换

```javascript
const parent = document.getElementById("list");
const Node = document.getElementById("banana");

const newNode = document.createElement("li");
newNode.textContent = "橘子";

// 替换，基于父节点操作子元素节点
parent.replaceChild(newNode, Node);  // 用 newNode 替换 Node
```

## 节点克隆

```javascript
const clone = el.cloneNode(true);  // true 表示深克隆（包含子节点）
console.log(clone);  // 返回类数组
```

# 表单元素常用操作

根据需要获取还是重新赋值

```javascript
const input = document.querySelector("input");
input.value;             // 获取或设置文本输入框的值
input.checked;           // 获取或设置 checkbox/radio 是否选中
input.disabled = true;   // 设置禁用
input.focus();           // 聚焦
```

# 事件监听

| 特性        | `addEventListener` | `onclick`  |
|-----------|--------------------|------------|
| 支持多个事件监听器 | ✔️                 | ❌（后者会覆盖前者） |
| 支持事件捕获    | ✔️（第三个参数）          | ❌          |
| 可读性/简洁性   | 稍复杂                | 更简洁        |
| 现代开发中推荐使用 | ✔️                 | 一般用于简单场景   |

```javascript
/**
 * 推荐使用
 * */
document.getElementById("myButton").addEventListener("click", () => {
    alert("按钮被点击");
});
```

```javascript
document.getElementById("myButton").onclick = function () {
    alert("按钮被点击");
}
```

# 元素坐标位置

```javascript
const brand = document.getElementById('brand');

// 返回的结果是字符串(100px)
const x = document.defaultView.getComputedStyle(brand).left;
const y = document.defaultView.getComputedStyle(brand).top;

console.log(x, y);  // 字符串坐标输出
console.log(parseInt(x), parseInt(y));  // 强制转换为整数，会去除第一个字符后面的所有数据，只返回纯数字
```

# select和option标签操作

## 创建并添加 option

```javascript
const select = document.getElementById('mySelect');

// 创建新选项（文本, 值, 默认选中, 是否选中），一般后两个参数不填写
const option = new Option('显示文本', '值', false, false);

// 添加到 select 中
select.add(option);  // 也可以用 select.appendChild(option)
```

## 删除某个 option

```javascript
const select = document.getElementById('mySelect');

select.remove(1);  // 删除第2个选项（从 0 开始）
```

## 获取当前选中项的值/文本索引

```javascript
const select = document.getElementById('mySelect');

const index = select.selectedIndex;  // 选中项的索引
const value = select.value;  // 选中项的 value
const text = select.options[select.selectedIndex].text;  // 选中项的显示文本
```

## 设置选中项

```javascript
const select = document.getElementById('mySelect');

select.value = 'someValue';  // 按 value 设置选中项
// 或者：
select.selectedIndex = 2;    // 选中第3个选项
```

## 清空所有选项

如果需要保留第一个默认的则需要使用第二个，值给1就可以保留第一个

```javascript
const select = document.getElementById('mySelect');

select.innerHTML = '';  // 清空全部 option
// 或：
select.options.length = 0;
```
