/**
 * 它通常用于判断某个值是否无法转换为有效的数字
 * */

let info = parseInt('hello');  // 很明显不能成功转换，但是不会报错，会变成NaN

console.log("转换后的结果:", info)
let result = isNaN(info) // 判断是否转换为NaN
console.log("判断结果:", result)