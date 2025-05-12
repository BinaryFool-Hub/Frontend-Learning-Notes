// 向上取整，小数部分大于0就返回该数的整数位+1
let a = Math.ceil(123.5);  // 124
let b = Math.ceil(123.01);  // 124
console.log(a, b);

// 向下取整，小数部分不进行计算直接返回整数部分
let c = Math.floor(123.5);  // 123
let d = Math.floor(123.1);  // 123
console.log(c, d);

// 四舍五入返回整数
let e = Math.round(123.5); // 124
let f = Math.round(123.4); // 123
console.log(e, f);

// 随机数，返回0-1之间的随机小数
let g = Math.random();
console.log(g)
console.log(g * (20 - 10 + 1) + 10)  // 限制区间，双闭区间。公式：(上线-下线+1)+下线

