console.log("hello");
console.log("👏")
console.log("你好");
console.log("处理结果！");

//tsc --watch  监听文件是否改变

let selectedTopping: string = "👋";

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping("🐷");
console.log(selectedTopping);

function orderError(error: string): void {
    throw new Error(error);
}
// orderError("创建一个错误");

//分为一个数据类型
let coupon: string | null = null;

let pizzaSize: string | number = 'small';
// 参数范围限定
function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('small');

//定义一个函数类型
let sumOrder: Function;

//然后声明函数体
sumOrder = (price: number, quantity: number): number => {
    return price * quantity;
}
sumOrder(100, 1);


//声明一个函数（参数）类型 返回类型 ?{可有可无}
let selectPizz: (priace: number, quantity?: number) => number;
let selectPizs: (priace: number, quantity?: number) => number;
selectPizz = (price, quantity = 100) => {
    if (quantity) {
        price * quantity
    }
    return price;
};


//虽然定义可有可无 但是我们可以定义一个默认值
selectPizs = (price, quantity = 100) => {
    return price * quantity;
};


selectPizz(1);
console.log(selectPizs(1));
