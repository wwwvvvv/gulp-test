define(['hello'],function (hello) {
    function showMsg(name) {
        alert(hello + name);
    }
    return {showMsg};
})