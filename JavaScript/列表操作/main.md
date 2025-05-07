# 取值

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
