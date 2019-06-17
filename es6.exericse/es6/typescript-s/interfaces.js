"use strict";
function printLabel(labeledObj) {
    console.log(labeledObj.label);
    console.log(labeledObj.size);
}
var myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function printLabels(labeledObj) {
    console.log(labeledObj.label);
}
printLabels(myObj);
//返回值类型必须满足定义的类型
function createSquare(config) {
    var defaultSquare = { color: 'white', area: 100 };
    //在创建可选属性必须判断
    if (config.color) {
        defaultSquare.color = config.color;
    }
    if (config.width) {
        defaultSquare.area = config.width * config.width;
    }
    return defaultSquare;
}
//构建之后不能修改
var points = { x: 10, y: 20 };
//数组创建之后不能修改数据
var areas = [1, 2, 3];
//循环输出
areas.forEach(function (element) {
    console.log(element);
});
//您仍然可以使用类型断言覆盖它
var covert = areas;
covert[0] = 3;
//创建一个符合搜索接口
var search = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
//Glup Webpack .
