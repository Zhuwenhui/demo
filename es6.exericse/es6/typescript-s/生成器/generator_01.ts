
function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var iterator = infiniteSequence();
// while (true) {
// console.log(iterator.next());
// }

function* generator() {
    let index: number = 0;
    while (index < 3) {
        yield index++;
    }
}

//创建一个生成器
let generators = generator();
console.log(generators.next())
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());





function delay(milliseconds: number, count: number): Promise<number> {
    //返回一个Promise
    return new Promise<number>((reslove, reject) => {
        setTimeout(() => {
            reslove(count);
        }, milliseconds);
    });
}


async function dramaticWelcome(): Promise<void> {
    console.log("👋");
    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(1, i);
        console.log(count);
    }
    console.log("👌")
}

// dramaticWelcome();


function* otherGenerator() {
    console.log("👋 执行启动 ...");
    yield 0;
    console.log("👌 执行恢复 ...");
    yield 1;
    console.log("👌 执行恢复 ...");
}


var otherIterators = otherGenerator();
console.log(otherIterators.next());
console.log(otherIterators.next());
console.log(otherIterators.next());

function* next_generator() {
    const bar = yield "foo";
    console.log("🌈", bar);
}

const next_generators = next_generator();
//获取下一个参数
const foo = next_generators.next();
console.log(foo.value);
// Resume execution injecting bar
console.log(iterator.next('bar'));




const https = async (request: RequestInfo): Promise<any> => {
    return new Promise(resolve => {
        fetch(request).then(response => response.json()).then(body => { resolve(body) });
    });
};




async function demo() {
    // example consuming code 
    const datas = await https("https://jsonplaceholder.typicode.com/todos");
    console.log(datas);
}

demo();

