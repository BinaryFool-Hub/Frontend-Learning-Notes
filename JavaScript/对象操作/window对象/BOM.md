# BOM浏览器操作

提供与浏览器窗口交互的对象，浏览器内置的api

# alert/confirm/prompt信息弹窗

## alert

会出现一个浏览器窗口的弹窗用于信息提示

- 参数1(可选)：用于给用户提示的文本

```javascript
window.alert("提示字符");
```

## confirm

会出现一个浏览器窗口的弹窗用于信息提示可选择是否操作

- 参数1：提示字符
- 返回值：布尔类型，用户点确定就返回true，取消返回false

```javascript
let result = window.confirm("确定？");
console.log(result);
```

## prompt

会出现一个浏览器窗口的弹窗用于信息提示收集用户输入的信息

- 参数1(可选)：提示的字符
- 参数2(可选)：默认值
- 返回值(可选)：用户输入的数据会转换成字符串返回

```javascript
let result = window.prompt("提示字符", "默认值");
console.log(result);
```

# close/open标签页操作

## close

会关闭当前标签页

```javascript
window.close();
```

## open

- 打开新窗口，单独写浏览器会拦截然后询问用户是否支持，
    - 解决方法：确保 window.open 由用户操作（如按钮点击）触发
- 参数1：打开的url
- 参数2(可选)：窗口名字（如果同名窗口已存在，则复用该窗口，否则新建）（也可以传入`_blank`作为 target 强制新窗口（避免名称复用））
- 参数3(可选)：传递多赋值形式，高度，宽度，左边距离，顶部距离……

```javascript
window.open("https://baidu.com", "百度", "width=800,height=600,left=30,top=30");
```

# setInterval/setTimeout定时器

| 特性   | `setTimeout`       | `setInterval`       |
|------|--------------------|---------------------|
| 执行次数 | 一次                 | 无限次，需手动清除           |
| 用途   | 延迟执行               | 周期性执行               |
| 停止方式 | `clearTimeout(id)` | `clearInterval(id)` |

## setInterval

- 参数1：函数的引用地址
- 参数2：触发时长(毫秒),1000ms = 1s

```javascript
function fun() {
    document.write("你好<br>")
}

// 创建定时器
let timer = window.setInterval(fun, 1000)  // 推荐
// let timer = window.setInterval("fun()", 1000)  // 不推荐，每次都要解析字符串，效率低。

// 清除定时器
window.clearInterval(timer)
```

## setTimeout

- 参数1：函数的引用地址
- 参数2：触发时长(毫秒),1000ms = 1s

```javascript
function fun() {
    document.write("你好<br>")
}

// 创建定时器
let timer = window.setTimeout(fun, 3000);  // 3秒后执行

// 清除定时器
window.clearTimeout(timer);
```

# location页面链接操作

操作当前页面的链接

- href：使用了赋值表示重新请求对应的页面，不是赋值获取当前页面的url
- reload()：刷新页面
- hostname：获取域名
- replace()：替换当前页面，参数填写你要替换的页面网址（等于清除历史访问的url重新打开新的网页）

```javascript
console.log(window.location.href);      // 当前完整 URL

window.location = "https://...";        // 跳转页面，加了href不加都一样
window.location.href = "https://...";   // 跳转页面(推荐使用)

window.location.reload();               // 刷新页面

window.location.hostname;               // 域名

window.location.replace("https://www.baidu.com");  // 替换当前页面
```

# onload窗体加载完成

整个页面加载完成时触发。        
注意：window.onload 等到包括图片、样式、iframe 等都加载完才触发。

```javascript
// 方法一
window.onload = function () {
    // 这里写你要的逻辑
}

// 方法二
function fun() {
    // 代码逻辑
}

window.onload = fun;
```

# history历史对象

- back()：加载历史对象列表的前一个url
- forward()：加载历史对象列表的下一个url
- go()：里面参数填写你要加载历史里面url索引

```javascript
// 加载历史对象列表的前一个url
window.history.back();

// 加载历史对象列表的下一个url
window.history.forward();

// 加载历史对象列表的某一个具体url，传入不同的值表示不同的页面
window.history.go(-1);  // 等价于back()方法
window.history.go(1);  // 等价于forward()方法
```