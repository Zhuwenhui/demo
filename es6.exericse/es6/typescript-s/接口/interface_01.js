"use strict";
//创建一个对象
var person = { name: "alex", age: 20 };
//传递函数
function interfacePassByFunction(person) {
    //打印参数
    console.log(person);
}
//使用断言给属性添加临时属性
interfacePassByFunction({ name: "Ashlee", age: 29, phone: "111-111-1111" });
