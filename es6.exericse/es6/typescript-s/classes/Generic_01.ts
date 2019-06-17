class List<T>{

    private element: T[];

    constructor(...element: T[]) {
        this.element = element;
    }

    //添加
    add(t: T) {
        this.element.push(t);
    }

    //删除
    remove(t: T) {
        let index = this.element.indexOf(t);
        if (index > -1) {
            this.element.splice(index, 1);
        }
    }

    //转换成数组
    asArray(): T[] {
        return this.element;
    }
}

let number: List<number> = new List<number>(1, 2, 3);
//添加元素
number.add(11);
//移除元素
number.remove(3);
//转换成数组
let numArray = number.asArray();
console.log(numArray);


//创建一个
class Pairs<T, V> {
    //创建一个构造函数
    public constructor(readonly store: Map<T, V>) {
        this.store = store;
    }

    //添加元素
    public add(key: T, value: V) {
        //添加元素
        this.store.set(key, value);
    }

    //判断元素是否存在
    public has(key: T) {
        return this.store.has(key);
    }

    //删除元素
    public remove(key: T) {
        if (this.store.has(key)) {
            return this.store.get(key);
        }
    }

    //获取元素
    public get(key: T) {
        if (this.store.has(key)) {
            return this.store.get(key);
        }
    }
}

let paris: Pairs<number, string> = new Pairs<number, string>(new Map());

paris.add(1, "👋");
paris.add(2, "🐯");
paris.add(3, "🔥");

//获取迭代的参数
console.log(paris.store.keys());
console.log(paris.store.values());


//循环
paris.store.forEach((key, value) => {
    console.log(key, value);
});

