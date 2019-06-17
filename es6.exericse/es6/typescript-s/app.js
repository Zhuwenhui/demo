"use strict";
//可以先申明后定义
var pizza;
pizza = {
    name: 'Plain old pepperoni',
    price: 20,
    foo: '臭豆腐'
};
var food = {
    name: '👌',
    price: 100,
    getName: function () {
        console.log(this.name);
    }
};
food.getName();
var sizes = ['small', 'medium', 'large'];
var pizzas = ['small', 'medium', 'larger'];
//指明每个类型的数据类型
var targets = ['👋', 100, true];
var pizzaSizes = 'small';
console.log(pizzaSizes);
// const selectSizes = (size: Size) => {
//     pizzaSizes = size;
// }
// selectSizes('small');
var selectSizes = function (sizes) {
    pizzaSizes = sizes;
};
selectSizes('small');
