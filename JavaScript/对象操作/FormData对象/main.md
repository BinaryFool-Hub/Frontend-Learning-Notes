# 介绍

FormData 对象是用来收集表单数据并以键值对形式构建请求体的，
通常用于通过 JavaScript 发起 fetch 或 XMLHttpRequest 的 POST 请求，尤其是带文件上传的表单。

# 创建对象

```javascript
const form = document.querySelector('form');   // 获取节点信息对象
const formData = new FormData(form);  // 把获取到的节点对象传入，就会包含form表单里面的所有有name属性的键值对
```

# 手动添加字段

初始化传入了form表单对象也可以继续添加字段

```javascript
const formData = new FormData();
formData.append('name', '张三');
formData.append('age', '19');
```

# 把数据添加到请求体中

这里只是举例，你可以使用其他封装的方法来发起请求和传入参数，只需要把对象传入即可发送，不需要额外操作，
不需要设置 Content-Type，浏览器会自动设置为 multipart/form-data 并带上 boundary。

```javascript
fetch('/submit', {
    method: 'POST',
    body: formData
});
```

# 获取数据（调试）

```javascript
const form = document.querySelector('form');
const formData = new FormData(form);

for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}
```