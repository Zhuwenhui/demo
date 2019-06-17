//自定义一个类型
type Pizza = { name: string, toppings: number };
//实现一个类型
const pizz: Pizza = { name: '烧饼', toppings: 5 };
//序列化JSON对象
const serialized = JSON.stringify(pizz);
function getNameFromJSON(object: string): any {
    // return (<Pizza>JSON.parse(object).toppings);
    return (JSON.parse(object) as Pizza).name;
}

console.log(getNameFromJSON(serialized));