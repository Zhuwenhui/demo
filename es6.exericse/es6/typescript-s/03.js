"use strict";
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Larger"] = 2] = "Larger";
})(Sizes || (Sizes = {}));
//在创建一个枚举变量的时候可以初始化一个值
var selected = Sizes.Small;
function updateSize(size) {
    selected = size;
}
updateSize(Sizes.Larger);
