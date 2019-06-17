"use strict";
var List = /** @class */ (function () {
    function List() {
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        this.element = element;
    }
    //添加
    List.prototype.add = function (t) {
        this.element.push(t);
    };
    //删除
    List.prototype.remove = function (t) {
        var index = this.element.indexOf(t);
        if (index > -1) {
            this.element.splice(index, 1);
        }
    };
    //转换成数组
    List.prototype.asArray = function () {
        return this.element;
    };
    return List;
}());
var number = new List(1, 2, 3);
//添加元素
number.add(11);
//移除元素
number.remove(3);
//转换成数组
var numArray = number.asArray();
console.log(numArray);
//创建一个
var Pairs = /** @class */ (function () {
    //创建一个构造函数
    function Pairs(store) {
        this.store = store;
        this.store = store;
    }
    //添加元素
    Pairs.prototype.add = function (key, value) {
        //添加元素
        this.store.set(key, value);
    };
    //判断元素是否存在
    Pairs.prototype.has = function (key) {
        return this.store.has(key);
    };
    //删除元素
    Pairs.prototype.remove = function (key) {
        if (this.store.has(key)) {
            return this.store.get(key);
        }
    };
    //获取元素
    Pairs.prototype.get = function (key) {
        if (this.store.has(key)) {
            return this.store.get(key);
        }
    };
    return Pairs;
}());
var paris = new Pairs(new Map());
paris.add(1, "👋");
paris.add(2, "🐯");
paris.add(3, "🔥");
//获取迭代的参数
console.log(paris.store.keys());
console.log(paris.store.values());
//循环
paris.store.forEach(function (key, value) {
    console.log(key, value);
});
