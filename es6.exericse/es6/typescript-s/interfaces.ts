function printLabel(labeledObj: { label: string, size: number }) {
    console.log(labeledObj.label);
    console.log(labeledObj.size);
}

let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);


interface LabeldValue {
    label: string;
}

function printLabels(labeledObj: LabeldValue) {
    console.log(labeledObj.label);
}

printLabels(myObj);


//可选属性
interface SquareConfig {
    color?: string,
    width?: number,
}

//返回值类型必须满足定义的类型
function createSquare(config: SquareConfig): { color: string, area: number } {
    let defaultSquare = { color: 'white', area: 100 };
    //在创建可选属性必须判断
    if (config.color) {
        defaultSquare.color = config.color;
    }

    if (config.width) {
        defaultSquare.area = config.width * config.width;
    }
    return defaultSquare;
}

//某些属性只能在首次创建对象时进行修改。您可以通过readonly在属性名称前添加来指定：
interface Point {
    readonly x: number,
    readonly y: number,
}

//构建之后不能修改
let points: Point = { x: 10, y: 20 };


//数组创建之后不能修改数据
let areas: ReadonlyArray<number> = [1, 2, 3];

//循环输出
areas.forEach(element => {
    console.log(element);
})

//您仍然可以使用类型断言覆盖它
let covert = areas as number[];
covert[0] = 3;


//创建一个搜索接口
interface SearchFunction {
    (source: string, subString: string): boolean;
}

//创建一个符合搜索接口
let search: SearchFunction = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > - 1;
}


interface ClockInterface {
    currentTime: Date;
}


//Glup Webpack .