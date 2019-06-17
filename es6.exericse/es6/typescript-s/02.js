"use strict";
//实现一个类型
var pizz = { name: '烧饼', toppings: 5 };
//序列化JSON对象
var serialized = JSON.stringify(pizz);
function getNameFromJSON(object) {
    // return (<Pizza>JSON.parse(object).toppings);
    return JSON.parse(object).name;
}
console.log(getNameFromJSON(serialized));
