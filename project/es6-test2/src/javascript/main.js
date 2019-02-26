// let [a, b, c] = [1,2,3];
// alert(a);
// alert(b);
// alert(c);

// let t = {
//     a: 5
// };

// let [x, y = 55] = [1];
// console.log(x)
// console.log(y)
// let {bar , foo} = {bar: 'haha', foo: 'xixi'};
// console.log(bar);
// console.log(foo);
// let {foo:baz} = {foo: 'oo', bar: 'ar'};
// console.log(baz);
// let obj = {};
// ({foo: obj.aaa} = {foo: 'ddd'});
// console.log(obj);
// let arr = [];
// ({bar: arr[0]} = {bar: 'ni'});
// console.log(arr);
//
// let {foo: {bar}} = {foo: {bar: 5555555} };
// console.log(bar);

// function add([x, y]) {
//     return x + y;
// }

// let res = add([2,3]);
// console.log(res);
//
// var tmpArr = [[1,2],[3,4]];
// const narr = tmpArr.map(([a,b]) => a + b);
// console.log(narr);

// let x = 1;
// let y = 2;
// [y,x] = [x,y];
// console.log('x:',x);
// console.log('y:',y);

// function getRet() {
//     return {total: 33, num: 12}
// }
// var params = getRet();
// function test({total, num}) {
//     alert(total);
//     alert(num);
// }
// test(params);

// function example() {
//     return [12,24];
// }
// let [num, total] = example();
// console.log(num);
// console.log(total);
//
// let jsonData = {
//     id: 42,
//     status: "ok",
//     data: [867, 5309]
// };
// let { id, status, data: number} = jsonData;
// console.log(id);
// console.log(status);
// console.log(number);

// function test2({type = 'write', total}) {
//     console.log(type);
//     console.log(total);
// }
// var params = {
//     total: 9999
// };
// test2(params);

// let s1 = 'sss';
// let s2 = 'jfie';
// console.log(s2.includes(s1)); //false

// let str1 = 'abcdefg';
// console.log(str1.endsWith('cd', 4));
// console.log(str1.startsWith('abc', 4));

// var str = 'xxyyy';
// // var nstr = str.repeat(2);
// // console.log(nstr);

// var str = '12345';
// var nstr = str.padStart(6,'233');
// console.log(nstr);
//
// var s = '𠮷';
// console.log(/^.$/u.test(s));


// function m1(x, y = 5) {
//     console.log(x,y);
// }
// m1();
// function m1({x = 2, y = 3} = {}) {
//     console.log(x, y);
// }
//
// function m2({x, y} = {x: 0, y: 0}) {
//     console.log(x, y);
// }
// m1({x: 3});
// m2({x: 3});

// function f(...args) {
//     console.log(args.length);
// }
// f(1,1);
// var f = v => 5;
// console.log(f());
// let f = (id, name) => ({id: id, name: 'tmp'});
// console.log(f());
//
// function f1(...values) {
//     console.log(values);
// }
// f1(1,2,3,4,5);

// function f(a,b,c) {
//     console.log(a,b,c);
// }
// var arr  = [1,2,3];
// f(...arr);

// function push(array, ...items) {
//     array.push(...items);
//     console.log(array);
// }
// var arr = [1,2,3,4,5,6];
// push(arr, 7,8,9,10,11,12);
// const a1 = [1,2,3];
// const a2 = a1.concat();
// a2[0] = 22;
// console.log(a1, a2);
// const a1 = [1,2,3];
// const [...a2] = a1;
// // const a2 = [...a1];
// console.log(a2);
//
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const conArr = [...arr1, ...arr2];
// console.log(conArr);
// const arr = [1,2,3,4,5];
// let [a, ...values] = arr;
// console.log(a, values);
//
// const arr = [...'hello'];
// console.log(arr);
// const str = '你菲菲姐欸额';
// const arr = [...str].reverse().join('');
// console.log(arr);

// let map = new Map([[1,'one'],[2,'two'],[3,'three']]);
// let arr = [...map];
// console.log(arr);

// const go = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// const arr = [...go()];
// console.log(arr);

// function f1() {
//     const arr = Array.from(arguments);
//     console.log(arr);
// }
// f1('你','好','!');

// console.log(Array.from('hello'));

// let divs = document.querySelectorAll('div');
// console.log([...divs]);
// console.log(Array.from(divs));
// const str = 'abcde';
// const arr = Array.from(str, x => x + 'h');
// console.log(arr);

// console.log(Array.of(1,2,3,4));

// const arr = [1, 4, -5, 10, 12];
// console.log(arr.includes(4,3));
// console.log(arr.includes(4,1));
// const n = arr.findIndex(x => {
//    return x < 0;
// });
// console.log(n);

// const arr = [1,2,3,[4,5,6]];
// const arr1 = arr.flat();
// console.log(arr1);
// const arr = [1,2,[3,[4,5]]];
// const arr1 = arr.flat(2);
// console.log(arr1);
// const arr = [1,[2,3,[4,[5,6,[7]]]]];
// console.log(arr.flat(Infinity));

// const arr = [2,3,4];
// const arr1 = arr.flatMap(x => [x,x*2]);
// console.log(arr1);

// const foo = 'bar';
// const baz = {foo};
// console.log(baz);
//
// const med = {
//     method(){
//         console.log("abcdefg");
//     }
// };
// med.method();

// let birth = '2000/01/01';
// const Person = {
//     name: '张三',
//     birth,
//     hello(){
//         console.log('hello! 我的名字是'+ this.name);
//     }
// };
// Person.hello();
// let obj = {};
// obj.foo = true;
// let prop1 = 'bar';
// obj = {
//     foo: true,
//     [prop1]: prop1
// };
// console.log(obj);
// let s = Symbol('1');
// let obj = {
//     [s] : 'hello'
// };
// console.log(obj[s]);

// const arr = [2,3,4,2,6,'2',NaN, NaN];
// const s = new Set(arr);
// console.log(Array.from(s));

// const arr = [12, 34,56,7,8];
// const s = new Set(arr);
// s.forEach((value, key, set) => {
//     console.log(value)
//     console.log(key)
// })

// for(let x of s) {
//     console.log(x);
// }

// for(let index of arr.keys()) {
//     console.log(index);
// }

// for(let elem of arr.values()){
//     console.log(elem);
// }

// for(let [index, elem] of arr.entries()) {
//     console.log(index);
//     console.log(elem);
// }

// s.add(3);
// s.delete(1);
// s.clear();
// console.log(s);

// let set = new Set(['red','green','blue']);
// let arr = [...set];
// console.log(arr);

// let arr = [1,2,3,3,2,1];
// let unique = [...new Set(arr)];
// console.log(unique);
// set = new Set([...set].map(item => {
//     return item * 2;
// }));
// let arr = [1,2,1,3,4];
// let set = new Set(arr);
// set = new Set([...set].filter(item => {
//     return item > 2;
// }));
// console.log(set);

// let a = new Set([1,3,6,8]);
// let b = new Set([2,4,6,8]);
// //并集
// let union = new Set([...a,...b]);
// // let union = new Set([...a,...b]);
// console.log(union);
//
// //交集
// let intersect = new Set([...a].filter(x => b.has(x)));
// console.log(intersect);
//
// //差集
// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference);
// console.log(obj.baz);

// const m = new Map();
// const o = {p: 'hello world!'};
// m.set(o,'content');
// console.log(m.get(o));
// const map = new Map([
//     ['name','漳卅'],
//     ['title', 'Author']
// ]);
// console.log(map.size);
// const map = new Map();
// map.set('a',1);
// map.set('b',2);
// map.set('c',3);
// map.set('d',4);




// 对象转Map
// function objToStrMap(obj) {
//     let map = new Map();
//     for(let key of Object.keys(obj)) {
//         console.log(key);
//         map.set(key, obj[key]);
//     }
//     console.log(map);
// }
// objToStrMap({a: 1, b: 2, c: 3, d: 4});

// Map转对象
// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for(let [key, value] of strMap) {
//         obj[key] = value;
//     }
//     console.log(obj);
// }
// strMapToObj(map);

// const map1 = new Map([...map].filter(([key, value]) => {
//     return value > 2;
// }));
// console.log(map1);
// map.forEach((value, key, map) => {
//     console.log('key: %s, value: %s', key, value);
// });

// console.log([...map]);
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let value of map.values()) {
//     console.log(value);
// }
// for(let [key,value] of map.entries()){
//     console.log(key,value);
// }
// for(let [key, value] of map){
//     console.log(key, value);
// }

// const elems = document.querySelectorAll('div');
// const d1 = document.getElementsByClassName('d1')[0];
// const map = new WeakMap();
// for(let item of elems) {
//     map.set(item,0);
//     item.onclick = function () {
//         let num = map.get(this);
//         map.set(this,++num);
//         if(num > 4) {
//             this.remove();
//         }
//         console.log(map);
//         console.log(map.get(d1));
//     }
// }
// console.log(map);


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject();
//     },3000)
// }).then(function () {
//     alert("ok");
// },function () {
//     alert('fail');
// });
// const ball = document.getElementsByClassName('ball')[0];
// const promise = new Promise((resolve, reject) => {
//    setTimeout(function () {
//        ball.style.transform = 'translateY(100px)';
//        setTimeout(function () {
//            resolve();
//        },1000);
//    },2000)
// }).then(function () {
//     ball.style.transform = 'translateX(100px)';
// });

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(100).then(value => console.log(value));

// const getJSON = function(url) {
//     return new Promise(function(resolve, reject){
//         const handler = function() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//     });
// };
//
// getJSON("./javascript/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
// }, function(error) {
//     console.error('出错了', error);
// });


// function getJSON(url) {
//     return new Promise((resolve, reject) => {
//         const handler = function () {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     })
// }
// getJSON('./javascript/posts.json').then(function (success) {
//     console.log('success', success);
// },function (err) {
//     console.log(err);
// });


// let promise = new Promise((resolve, reject) => {
//     console.log('Promise');
//     resolve();
// });
// promise.then(function () {
//     console.log('resolved.');
// });
// console.log('hi');

// const p1 = new Promise((resolve, reject) => {
//     console.log('promise-----p1');
//     setTimeout(function () {
//         resolve('hahah~');
//     },2000);
// });
// const p2 = new Promise(((resolve, reject) => {
//     console.log('promise-------p2');
//     resolve(p1);
// }));
// p2.then(function (result) {
//     console.log(result)
// }).catch(function (err) {
//     console.log(err);
// });

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(reject(new Error('fail')),2000);
// });
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(resolve(p1),1000);
// });
// p2.then(result => console.log(result))
//     .catch(err => console.log(err))
//     .finally(() => {
//         console.log('finally');
//     });

// const p = Promise.all([p1,p2,p3]);

// function getJSON(url) {
//     return new Promise((resolve, reject) => {
//         function handler() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200 ) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error('fail'));
//             }
//         }
//         const client = new XMLHttpRequest();
//         client.open("GET",url);
//         client.onreadystatechange = handler;
//         client.responseType = 'json';
//         client.setRequestHeader('Accept', 'application/json');
//         client.send();
//     });
// }
// const promises = [1, 2, 3, 4].map(id => {
//    return getJSON(`./javascript/${id}.json`);
// });
// Promise.all(promises).then(posts => {
//     console.log(posts);
// }).catch(err => console.log(err));

// const p1 = new Promise((resolve, reject) => {
//     resolve('hello -------->p1');
// }).then(result => result).catch(err => err);
// const p2 = new Promise((resolve, reject) => {
//     throw new Error('error ---->p2');
// })
//     .then(result => result)
//     // .catch(err => err);
// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


















