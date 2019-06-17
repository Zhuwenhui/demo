"use strict";
var Student = /** @class */ (function () {
    //构造函数
    function Student(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "name", {
        //返回名称
        get: function () {
            return this._name;
        },
        //设置名称
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var student = new Student("Jack", 30);
console.log(student.name); //通过构造器来访问
var AppContext = /** @class */ (function () {
    function AppContext() {
    }
    //私有化
    AppContext.prototype.AppContext = function () { };
    ;
    AppContext.getInstance = function () {
        return AppContext._instance;
    };
    AppContext.prototype.getData = function () {
        return "test data";
    };
    AppContext._instance = new AppContext();
    return AppContext;
}());
var data = AppContext.getInstance().getData();
console.log(data);
function reverse(something) {
    if (typeof something === 'string') {
        return something.split('').reverse().join('');
    }
    return something.slice().reverse();
}
