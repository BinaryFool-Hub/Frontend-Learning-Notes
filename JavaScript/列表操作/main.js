let array = [1, 2, 34, 4, 4, 4, "1"];

// 使用forEach结合箭头函数来实现取值操作
array.forEach((value, index, array) => {
    // 参数二三是可选的，不强求使用
    // value：当前元素
    // index：当前索引
    // array：原数组
    console.log(value);
});

// 传统for循环
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// 末尾添加
array.push('4'); // 返回值是新长度
console.log(array)

// 开头添加
array.unshift('4'); // 返回值是新长度
console.log(array)

array.splice(2, 0, "a"); // 在索引 2 处插入 "a"，不删除元素
console.log(array)