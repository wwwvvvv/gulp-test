
// window.onload = function () {
//     var marginMoveBox = document.getElementsByClassName("mar-transition")[0];
//     var tranMoveBox = document.getElementsByClassName("tran-transition")[0];
//     var marAniBtn = document.getElementsByClassName("mar-ani-btn")[0];
//     var tranAniBtn = document.getElementsByClassName("tran-ani-btn")[0];
//     marAniBtn.onclick = function () {
//         // moveBox.classList.remove("tran-mov");
//         // moveBox.classList.add("mar-mov")';
//         marginMoveBox.style.marginLeft = "200px";
//     };
//     tranAniBtn.onclick = function () {
//         tranMoveBox.style.transform = "translateX(200px)"
//         // moveBox.classList.remove("mar-mov");
//         // moveBox.classList.add("tran-mov");
//     }
// }

// way 1
// (function (window) {
//     var data = 'www.baidu.com';
//
//     function foo() {
//         console.log(`foo(): ${data}`);
//     }
//
//     function otherFun() {
//         console.log('otherFun()');
//     }
//
//     function bar() {
//         console.log('调用otherFun');
//         otherFun();
//     }
//
//     window.myModule = {foo, bar}
// })(window)

//way 2
// var example = require('./example');
// var a = 10;
// console.log(a + example.x);

// (function () {
//     require.config({
//         baseUrl: 'javascript/',
//         paths: {
//             // 映射 => 模块表示名：路径
//             alerter: './modules/alerter',
//             dataService: './modules/dataService'
//         }
//     });
//
//     require(['alerter'], function (alerter) {
//         alerter.showMsg();
//     });
// })();

(function () {
    require.config({
        baseUrl: 'javascript',  // 基本路径 出发点在根目录下
        paths: {
            // 映射 => 模块表示名：路径
            hello: './modules/hello', // 此处不能写成xxx.js 会报错
            name: './modules/name'
        }
    });

    require(['name'], function (name) {
        name.showMsg('YIND');
    });
})();