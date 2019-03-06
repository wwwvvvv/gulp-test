var basicNum = 0;
var add = function (a, b) {
    return a + b;
};
// export {basicNum, add}
// // export default function () { // 导出的是一个匿名函数，即使导出的函数不是匿名函数，加载时也会被视同为匿名函数。
// //     alert("default");
// // }
// // export var num = 9;

export default {
    add: add,
    basicNum: basicNum
}