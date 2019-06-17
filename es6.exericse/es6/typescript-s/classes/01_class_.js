"use strict";
var Pizzas = /** @class */ (function () {
    //构造函数
    function Pizzas(name, radius, modules, request) {
        this.name = name;
        this.radius = radius;
        this.modules = modules;
        this.toppings = [];
        this.name = name;
        this.radius = radius;
        this.modules = modules;
        this.request = request;
    }
    //添加一个方法
    Pizzas.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    Object.defineProperty(Pizzas.prototype, "avaiableMoudule", {
        set: function (modules) {
            this.modules = modules;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizzas.prototype, "avaiableModule", {
        //返回属性
        get: function () {
            return this.modules;
        },
        enumerable: true,
        configurable: true
    });
    return Pizzas;
}());
var pisz = new Pizzas("你好", 100, "cmmonjs", { x: '1', n: 100 });
pisz.toppings = ['jully'];
console.log(pisz.name);
console.log(pisz.radius);
//触发set方法
pisz.avaiableMoudule = '100';
//触发get方法
console.log(pisz.avaiableMoudule);
