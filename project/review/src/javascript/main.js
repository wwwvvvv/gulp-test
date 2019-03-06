// let [x , y] = [1, 2];
// [y, x] = [x, y];
// console.log(x);
// console.log(y);

// var str = '你好的分解';
// // console.log(str.includes('的分'));
// console.log([...str]);

// function log(x, y = 'world!') {
//     console.log(x, y);
// }
//
// log('hello');

// function log({x, y = 'world!'}) {
//     console.log(x , y);
// }
//
// log({x: 'hello'});

// const a1 = [1,23,4];
// const a2 =[...a1];
// a2[1] = 2;
// // console.log(a1);
// // console.log(a2);
// const a3 = [...a1, ...a2];
// // console.log(a3);
//
// let [c1, c2, ...c3] = a3;
// console.log(c1);
// console.log(c2);
// console.log(c3);

// function f1() {
//     const arr = Array.from(...arguments);
//     // console.log(arguments);
//     // console.log(...arguments);
//     // console.log(arr);
// }
//
// const arr = [2, 3, 4];
// const arr1 = arr.flatMap(x => [x, x * 2]);
// console.log(arr1);
// var repeatArr = [1,2,3,34,4,4,4,2];
// var set = new Set(repeatArr);
// // console.log(Array.from(set));
// console.log([...set]);

// var map = new Map([['a', 10], ['b', 1], ['c', 1]]);
// console.log(map.get('a'));

// const set = new Set([1,2,3,4,5,6,7,8]);
// console.log(set.entries());

// var map = new Map([['a', 10], ['b', 11], ['c', 12], ['d', 13], ['e', 14]]);
// console.log(map.entries());
