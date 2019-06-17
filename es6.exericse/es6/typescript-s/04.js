"use strict";
var pizzs;
//实现接口里面的数据类型
function createPizzs(name, sizes, store) {
    return {
        store: store,
        name: name,
        sizes: sizes,
        //必须实现接口里面的方法
        getAvaiableSizes: function () {
            return this.sizes;
        }
    }; //制定返回的类型
}
//创建一个对象
pizzs = createPizzs('alex', ['small', 'medium', 'large'], []);
