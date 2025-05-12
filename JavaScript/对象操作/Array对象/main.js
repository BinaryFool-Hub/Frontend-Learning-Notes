/**
 * 定义数组
 * */
let array = [1, 2, 23, 3,]; // 直接使用类似python的列表定义（推荐）
// let array1 = new Array(6);  // 定义了容量为6的数组，但是长度会自适应会自动扩容
// let array2 = new Array(1, 2, 3, 4, 4);  //  直接在里面写值，但是是不推荐的


/**
 * 排序
 * */
array = array.sort()  // sort() 默认行为是字符串排序，不适合数字。
array = array.sort((a, b) => a - b); // 比较值后升序排序
console.log(array)


/**
 *取值
 * */
for (const arrayKey in array) {
    console.log(array[arrayKey])
}