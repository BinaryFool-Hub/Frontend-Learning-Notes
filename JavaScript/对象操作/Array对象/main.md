# 定义数组

推荐使用类似python的列表定义

```javascript
let array = [1, 2, 23, 3,]; // 直接使用类似python的列表定义（推荐）
let array1 = new Array(6);  // 定义了容量为6的数组，但是长度会自适应会自动扩容
let array2 = new Array(1, 2, 3, 4, 4);  //  直接在里面写值，但是是不推荐的
```

# 数据取值展示

## 直接展示

```javascript
console.log(array)
```

## forEach取值

```javascript
let array = [1, 2, 34, 4, 4, 4];

// 使用forEach结合箭头函数来实现取值操作
array.forEach((value, index, array) => {
    // 参数二三是可选的，不强求使用
    // value：当前元素
    // index：当前索引
    // array：原数组
    console.log(value);
});
```

## for循环取值

```javascript
let array = [1, 2, 34, 4, 4, 4];

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
```

## for in 循环取值

```javascript
for (const arrayKey in array) {
    console.log(array[arrayKey])
}
```

## join分割展示

使用join()方法来输出里面传递的参数分割数组

```javascript
console.log(array.join(","));
```

# 添加数据

## 末尾添加

```javascript
// 末尾添加
array.push('4'); // 返回值是新长度
```

## 开头添加

```javascript
// 开头添加
array.unshift('4'); // 返回值是新长度
```

## 任意位置插入

```javascript
/**
 * 参数一，start：开始修改数组的位置（索引）
 * 参数二，deleteCount：要删除的元素个数（如果为 0，则不删除）
 * 不定长参数，item1, item2, ...：要插入的元素（可选）
 * */
array.splice(2, 0, "a"); // 在索引 2 处插入 "a"，0表示删除0个元素
```

# 删除数据

## 末尾删除

```javascript
let last = array.pop(); // 返回删除的元素
```

## 开头删除

```javascript
let first = array.shift(); // 返回删除的元素
```

## 任意位置删除

```javascript
array.splice(1, 1); // 从索引 1 开始删除 1 个元素
```

# 查找数据

```javascript
console.log(array.indexOf(3)); // （返回索引）
console.log(array.indexOf(99)); // -1（未找到）
console.log(array.includes(3)); // true（是否存在）
```

# 排序

```javascript
let array = [1, 2, 23, 3,];
array = array.sort()  // sort() 默认行为是字符串排序，不适合数字。
array = array.sort((a, b) => a - b); // 比较值后升序排序
```

