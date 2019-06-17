class Pizzas {
    toppings: Array<string> = [];
    //创建两个可读属性  不写默认就是private  但是提前得声明类型
    private request: { x: string, n: number };

    //构造函数
    constructor(readonly name: string, readonly radius: number, 
        public modules: string, request: { x: string, n: number }) {
        this.name = name;
        this.radius = radius;
        this.modules = modules;
        this.request = request;
    }

    //添加一个方法
    addTopping(topping: string) {
        this.toppings.push(topping);
    }

    set avaiableMoudule(modules: string) {
        this.modules = modules;
    }

    //返回属性
    get avaiableModule() {
        return this.modules;
    }
}

var pisz = new Pizzas("你好", 100, "cmmonjs", { x: '1', n: 100 });
pisz.toppings = ['jully'];

console.log(pisz.name);
console.log(pisz.radius);

//触发set方法
pisz.avaiableMoudule = '100';
//触发get方法
console.log(pisz.avaiableMoudule);




