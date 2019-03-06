// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// var hwg = helloWorldGenerator();
//
// console.log(hwg.next().value);
// console.log(hwg.next().value);
// console.log(hwg.next().value);
// console.log(hwg.next().value);

// var arr = [1,[[2, 3], 4], [5, 6]];
//
// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//       var item = a[i];
//       if (typeof item !== 'number') {
//           yield* flat(item);
//       } else {
//           yield item;
//       }
//   }
// };
//
// for (var f of flat(arr)) {
//     console.log(f);
// }

// function* Demo() {
//     console.log('hello' + (yield ));
//     console.log('hello' + (yield 123));
//     return 'ha';
// }
// var demo = Demo();
// console.log(demo.next());
// console.log(demo.next());
// console.log(demo.next());
// console.log(demo.next());
// console.log(demo.next());

// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// console.log([...myIterable]);

// function* f() {
//     for(var i = 0; true; i++) {
//         var reset = yield i;
//         if (reset) {
//             i = -1;
//         }
//     }
// }
//
// var g = f();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next(true));
// console.log(g.next());
// console.log(g.next());

// function* foo() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }
//
// for( let v of foo()) {
//     console.log(v);
// }

// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for(;;) {
//         yield curr;
//         [prev, curr] = [curr, curr + prev];
//     }
// }
//
// for( let n of fibonacci()) {
//     if (n > 1000) {
//         break;
//     }
//     console.log(n);
// }

// function f(obj) {
//     let propKeys = Reflect.ownKeys(obj);
//     let valueKeys = Object.keys(obj);
//     console.log(propKeys);
//     console.log(valueKeys);
// }
//
// let jane = { first: 'Jane', last: 'Doe'};
// // console.log(Object.entries(jane));
// for(let [key, val] of Object.entries(jane)) {
//     console.log('%s:%s', key, val);
// }
// f(jane);

// function* numbers() {
//     yield 1;
//     yield 2;
//     return 3;
//     yield 3;
// }
// console.log([...numbers()]);
// console.log(Array.from(numbers()));
// let [x, y] = numbers();
// console.log(x);
// console.log(y);
// for(let n of numbers()) {
//     console.log(n);
// }

// var g = function* () {
//     try {
//         yield ;
//     } catch (e) {
//         console.log('内部捕获', e);
//     }
// };
//
// var i = g();
// i.next();
//
// try{
//     i.throw('a');
//     i.throw('b');
// } catch (e) {
//     console.log('外部捕获', e);
// }

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// var g = gen();
// console.log(g.next());
// console.log(g.return('foo'));
// console.log(g.next());

// function* numbers() {
//     yield 1;
//     try{
//         yield 2;
//         yield 3;
//     }finally {
//         yield 4;
//         yield 5;
//     }
//     yield 6;
// }
//
// var g = numbers();
// console.log(g.next());
// console.log(g.next());
// console.log(g.return(7));
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* foo() {
//     yield 'a';
//     yield 'b';
// }
//
// function* bar() {
//     yield 'x';
//     foo();
//     yield 'y';
// }
// var b = bar();
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());

// function* foo() {
//     yield 'hello';
//     yield* 'hello';
// }
// var f = foo();
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// function* foo() {
//     yield 2;
//     yield 3;
//     return 'foo';
// }
//
// function* bar() {
//     yield 1;
//     var v = yield* foo();
//     console.log("v: " + v);
//     yield 4;
// }
//
// var it = bar();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// function* genFuncWithReturn() {
//     yield 'a';
//     yield 'b';
//     return 'The result';
// }
//
// function* logReturned(genObj) {
//     let result = yield* genObj;
//     console.log(result);
// }
//
// console.log([...logReturned(genFuncWithReturn())]);

// function* g1() {
//     yield 'a';
//     yield 'b';
//     return 'the result is: ';
// }
//
// function* g2() {
//     let result = yield* g1();
//     console.log(result);
// }
//
// console.log([...g2(g1)]);

// function* iterTree(tree) {
//     if (Array.isArray(tree)) {
//         for (let i = 0; i < tree.length; i++) {
//             if (Array.isArray(tree[i])) {
//                 yield* iterTree(tree[i]);
//             }else {
//                 yield* tree[i];
//             }
//         }
//     } else {
//         yield tree;
//     }
// }
// const tree = ['a', ['b', 'c'], ['d', 'e',['f','g']]];
// for(let x of iterTree(tree)) {
//     console.log('x：', x);
// }

// function Tree(left, label, right) {
// //     this.left = left;
// //     this.label = label;
// //     this.right = right;
// // }
// //
// // function* inorder(t) {
// //     if (t) {
// //         yield* inorder(t.left);
// //         yield t.label;
// //         yield* inorder(t.right);
// //     }
// // }
// //
// // function make(array) {
// //     if (array.length === 1) {
// //         return new Tree(null, array[0], null);
// //     }
// //     return new Tree(make(array[0]), array[1], make(array[2]));
// // }
// //
// // let tree = make([
// //     [['a'], 'b', ['c']],
// //     'd',
// //     [['e'], 'f', ['g']]]);
// // console.log(tree);
// // // make    - new Tree(make[],'d',make['']);
// // // make    - new Tree([[a],'b',['c']]);
// // // make    - new Tree(['a'],'b', ['c']);
// // // make    - new Tree(null, 'a', null);
// // var result = [];
// // for(let node of inorder(tree)) {
// //     result.push(node);
// // }
// // console.log('result', result);


// var ticking = true;
// var clock = function () {
//     if (ticking) {
//         console.log('Tick!');
//     } else {
//         console.log('Tock!');
//         ticking = !ticking;
//     }
// };

// var clock = function* () {
//   while (true) {
//       yield 'tick';
//       yield 'tock';
//   }
// };
//
// var c = clock();
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());

// function showLoadingScreen() {
//     console.log("show loading screen");
// }
//
// function loadUIDataAsynchronously() {
//     console.log('loadUIDataAsynchronously');
// }
//
// function hideLoadingScreen() {
//     console.log('hideLoadingScreen');
// }

// function* loadUI() {
//     showLoadingScreen();
//     yield loadUIDataAsynchronously();
//     hideLoadingScreen();
// }
//
// var loader = loadUI();
// loader.next();
// loader.next();
// loader.next();

// var g1 = function () {
//     return new Promise((resolve, reject) => {
//         console.log("step1");
//         resolve();
//     }).then(function () {
//         console.log("step2");
//
//     }).then(function () {
//         console.log("step3");
//     });
// };
//

// function add([x, y]) {
//     return x + y;
// }
//
// let res = add([5,6]);

let x = 1;
let y = 2;
console.log('x = %s', x);
console.log('y = %s', y);
console.log("--------交换值---------")
[x, y] = [y, x]
console.log('x = %s', x);
console.log('y = %s', y);























