# 实例化日期对象

传入时间字符串以便实例化处理，如果不传入参数则获取的是当前本地时间

```javascript
// 两个格式都可以
// const date = '2025/4/11'
const date = '2025/4/11 10:00:00'

// const today = new Date();
const today = new Date(date);
```

# 设置对象日期

都可以只接收一个参数

设置月份的时候需要-1，因为是从0开始计数

```javascript
today.setFullYear(2025, 4, 12);  // 可传入多个参数同时设置年月日
today.setFullYear(2025);  // 可以单独传入一个参数设置年
```

- setFullYear(0, 0, 1)： 年、月、日
- setMonth(0, 1)：月、日
- setDate(1)：日
- setHours(0, 0, 0, 0)：时、分、秒、毫秒
- setMinutes(0, 0, 0)：分、秒、毫秒
- setSeconds(0, 0)：秒、毫秒
- setMilliseconds(0)：毫秒

# 获取对象日期

```javascript
const millisecond = today.getTime();
console.log("时间戳：" + millisecond);
```

- getFullYear()：年
- getMonth()：月（0-11）
- getDate()：日
- getDay()：星期（0-6）
- getTime()：时间戳
- getHours()：时
- getMinutes()：分
- getSeconds()：秒

# 格式化展示

转换为参数里面的时间区域格式展示，参数传递日期格式展示区域(zh-CN, en-US)，也可以不传入会自动处理

```javascript
const locale_string = today.toLocaleString('zh-CN');
// const locale_string = today.toLocaleString('en-US');
console.log("区域时间字符串格式：" + locale_string);
```

- toLocaleString()：年月日时分秒
- toLocaleDateString()：年月日
- toLocaleTimeString()：时分秒