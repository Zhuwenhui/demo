//可以先申明后定义
let pizza: { name: string, price: number, foo: string };

pizza = {
    name: 'Plain old pepperoni',
    price: 20,
    foo: '臭豆腐'
}


let food: { name: string, price: number, getName(): void } = {
    name: '👌',
    price: 100,
    getName: function () {
        console.log(this.name);
    }
}

food.getName();

let sizes: string[] = ['small', 'medium', 'large'];
let pizzas: Array<string> = ['small', 'medium', 'larger'];
//指明每个类型的数据类型
let targets: [string, number, boolean] = ['👋', 100, true];

let pizzaSizes: 'small' | 'medium' | 'large' = 'small';
console.log(pizzaSizes);


//定义一个自定义范围类型
type Size = 'small' | 'medium' | 'large';
type callback = (size: Size) => void;


// const selectSizes = (size: Size) => {
//     pizzaSizes = size;
// }
// selectSizes('small');
const selectSizes: callback = sizes => {
    pizzaSizes = sizes;
}
selectSizes('small');


