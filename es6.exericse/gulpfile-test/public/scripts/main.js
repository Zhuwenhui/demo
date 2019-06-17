var name = 'pppbb';
console.log(name);

document.write(name);


class Person{
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}

const person = new Person('章三',14,'JS');
document.write(person.hobby);
