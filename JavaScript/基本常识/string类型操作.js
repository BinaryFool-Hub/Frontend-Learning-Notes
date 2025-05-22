let str = 'Hello world';

/**
 * 字符串长度
 * */
console.log(str.length);

/**
 * 大小写转换
 * */
console.log(str.toUpperCase());  // 字符串全部大写转换
console.log(str.toLowerCase());  // 字符串全部小写

/**
 * 获取指定字符在字符串中第一次出现索引的位置
 *  */
console.log(str.indexOf('o'));

/**
 * 截取指定字符
 * */
console.log(str[1]);  // 当前方法填入索引位置，不支持python的冒号语法、多参数和负数
console.log(str.slice(1, 3));  // slice(开始下标,结束下标)：结束下标可以不写，默认截取到最后,和python一样是左闭右开，支持负数
console.log(str.substring(3, 1));  // 参数顺序会自动转换小的为起始，左闭右开区间，不支持负数
console.log(str.at(-2));  // 支持传入负数索引截取，也支持正数

/**
 * 分割字符串数据形成列表，和python用法类似
 * */
console.log(str.split(' '));

/**
 * 去除首尾空白符
 * */
let info = "  hello word "
console.log(info.trim());
