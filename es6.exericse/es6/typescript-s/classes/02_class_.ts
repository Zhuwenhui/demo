export abstract class Pencil {

    private productedDate:Date;
    protected protectedProperty: string;

    constructor(private width: number, private color: string,protected n:string) {
        this.width = width;
        this.color = color;
        this.productedDate = new Date();
        this.protectedProperty = n;
    }

    get aviableColor(){
        return this.color;
    }

    set aviableColor(color:string){
        this.color = color;
    }
}

class Pen extends Pencil{
    constructor(public paint:string) {
        super(100,"red","a");
        this.paint = paint;
    }
}

const pen = new Pen("👋");
pen.aviableColor = "绿色";
//获取颜色
console.log(pen.aviableColor);

// console.log(pen.protectedProperty);


console.log(pen);

