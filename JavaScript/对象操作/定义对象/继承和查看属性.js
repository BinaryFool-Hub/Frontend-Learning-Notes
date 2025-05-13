const obj_root = {"name": "小明"};
const obj = Object.create(obj_root);  // 继承obj_root属性、方法
let result;

result = 'name' in obj;           // true，包括继承的
console.log(result)

result = obj.hasOwnProperty('name');  // true，仅自身属性，不包含继承
console.log(result)