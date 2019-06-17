interface Dimension {
    store: number[];
}


//创建一个接口
interface pizz extends Dimension {
    name: string,
    sizes: Array<string>,
    //定义一个方法 
    // getAvaiableSizes(): Array<string>
    getAvaiableSizes(): void;
}

let pizzs: pizz;


//实现接口里面的数据类型
function createPizzs(name: string, sizes: Array<string>, store: []): pizz {
    return {
        store,
        name,
        sizes,
        //必须实现接口里面的方法
        getAvaiableSizes: function () {
            return this.sizes;
        }
    } as pizz; //制定返回的类型
}

//创建一个对象
pizzs = createPizzs('alex', ['small', 'medium', 'large'], []);

