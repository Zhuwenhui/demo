class Person {
    protected _name: string;
    protected _age: number;

    protected constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    protected displayAsString(): void {
        console.log(this);
    }
}

class Employee extends Person {

    private _salary: number;
    public constructor(name: string, age: number, salary: number) {
        super(name, age);
        this._salary = salary;
    }

    //方法都是放在原型对象中 ...
    public display(): void {
        super.displayAsString();
    }
}

let emp: Employee = new Employee("Ashlee", 23, 3000);
emp.display();

