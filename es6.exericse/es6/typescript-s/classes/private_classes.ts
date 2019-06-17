class Student {
    private _name: string;
    private _age: number;

    //构造函数
    public constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    //设置名称
    public set name(v: string) {
        this._name = v;
    }


    //返回名称
    public get name(): string {
        return this._name;
    }

}

let student: Student = new Student("Jack", 30);
console.log(student.name);//通过构造器来访问


class AppContext {

    private static _instance: AppContext = new AppContext();
    //私有化
    private AppContext() { };


    public static getInstance(): AppContext {
        return AppContext._instance;
    }

    getData(): any {
        return "test data";
    }
}

let data = AppContext.getInstance().getData();
console.log(data);



function reverse<T>(something: string | T[]): string | T[] {
    if(typeof something === 'string'){
        return something.split('').reverse().join('');
    }
    return something.slice().reverse();
}
