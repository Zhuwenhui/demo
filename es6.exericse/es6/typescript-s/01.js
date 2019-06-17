"use strict";
console.log("hello");
console.log("👏");
console.log("你好");
console.log("处理结果！");
//tsc --watch  监听文件是否改变
var selectedTopping = "👋";
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping("🐷");
console.log(selectedTopping);
function orderError(error) {
    throw new Error(error);
}
// orderError("创建一个错误");
//分为一个数据类型
var coupon = null;
var pizzaSize = 'small';
// 参数范围限定
function selectSize(size) {
    pizzaSize = size;
}
selectSize('small');
//定义一个函数类型
var sumOrder;
//然后声明函数体
sumOrder = function (price, quantity) {
    return price * quantity;
};
sumOrder(100, 1);
//声明一个函数（参数）类型 返回类型 ?{可有可无}
var selectPizz;
var selectPizs;
selectPizz = function (price, quantity) {
    if (quantity === void 0) { quantity = 100; }
    if (quantity) {
        price * quantity;
    }
    return price;
};
//虽然定义可有可无 但是我们可以定义一个默认值
selectPizs = function (price, quantity) {
    if (quantity === void 0) { quantity = 100; }
    return price * quantity;
};
selectPizz(1);
console.log(selectPizs(1));
