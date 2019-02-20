// var x = 5;
// var addX = function (value) {
//     return x + value;
// };
// module.exports.x = x;
// module.exports.addX = addX;

// var counter = 3;
//
// function incCounter() {
//     counter++;
// }
// module.exports = {
//     counter: counter,
//     incCounter: incCounter
// };

// define(function () {
//     return 5;
// });

define(function () {
    let msg = 'hello! ';
    function getMsg() {
        return msg.toUpperCase();
    }
    return {getMsg};
});