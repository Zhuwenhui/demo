class Animal{

    //输出写一个方法并且赋予默认值
    move(distanceInMeters:number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log("Woof Woof!");
    }
}

const dog = new Dog();
console.log(dog);
dog.move();
dog.bark();




