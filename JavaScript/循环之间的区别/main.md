# 主要区别

| 循环类型	      | 适用对象  | 	获取内容	   | 是否支持 break/continue	 | 原型链属性	 | ES版本 |
|------------|-------|----------|----------------------|--------|------|
| for        | 通用    | 索引控制     | 支持                   | -      | ES1  |
| for...in   | 对象    | 键名(key)  | 支持                   | 会遍历    | ES1  |
| for...of   | 可迭代对象 | 值(value) | 支持                   | 不会     | ES6  |
| forEach    | 数组    | 值、索引     | 不支持                  | -      | ES5  |
| while      | 通用    | -        | 支持                   | -      | ES1  |
| do...while | 通用    | -        | 支持                   | -      | ES1  |

选择哪种循环取决于你的具体需求，但现代JavaScript开发中，for...of和forEach通常是遍历数组的首选，for...in用于对象遍历，传统for循环在需要更精确控制时使用。

# 1. 传统 for 循环

- 特点：
    - 最基础的循环结构
    - 需要手动控制循环变量
    - 适用于需要精确控制迭代次数的情况
    - 可以正向或反向遍历

```javascript
for (初始化; 条件; 迭代) {
    // 代码块
}
```

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

# 2. for...in 循环

- 特点：
    - 用于遍历对象的可枚举属性（包括原型链上的属性）
    - 不推荐用于数组遍历（顺序不保证，会遍历所有可枚举属性）
    - 遍历的是键名(key)

```javascript
for (变量 in 对象) {
    // 代码块
}
```

```javascript
const obj = {a: 1, b: 2};
for (let key in obj) {
    console.log(key, obj[key]);
}
```

# 3. for...of 循环 (ES6)

- 特点：
    - 用于遍历可迭代对象（Array, Map, Set, String, TypedArray, arguments等）
    - 直接获取值(value)，而不是索引
    - 不会遍历原型链上的属性
    - 是遍历数组的首选方式

```javascript
for (变量 of 可迭代对象) {
    // 代码块
}
```

```javascript
const arr = ['a', 'b', 'c'];
for (let value of arr) {
    console.log(value);
}
```

# 4. Array.prototype.forEach()

- 特点：
- 数组的专有方法
- 不能使用 break 或 continue
- 可以使用 return 跳过当前迭代（相当于 continue）
- 回调函数接收三个参数：当前元素，索引，数组本身

```javascript
数组.forEach(回调函数);
```

```javascript
['a', 'b', 'c'].forEach((item, index) => {
    console.log(index, item);
});
```

# 5. while 循环

- 特点：
    - 条件为真时执行循环
    - 适合不确定循环次数的情况
    - 需要手动更新条件，否则可能无限循环

```javascript
while (条件) {
    // 代码块
}
```

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

# 6. do...while 循环

- 特点：
    - 至少执行一次循环体
    - 然后检查条件决定是否继续
    - 其他与 while 循环类似

```javascript
do {
    // 代码块
} while (条件);
```

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

