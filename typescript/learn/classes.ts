class Person{
    private name:string;
    public constructor(name:string){
        this.name =name;
    }

    public getName(){
        return this.name
    }
}


const person = new Person("Tue");
const rs:string = person.getName()


interface Shape{
    getArea:()=>number;
    
}


class Rec implements Shape{
    private width:number;
    private height:number;
    public constructor(width:number,height:number){
        this.width=width;
        this.height=height;
    }

    public getArea() : number{
        return this.width * this.height;
    }
    public toString():string{
        return "this is rec"
    }
}

class Square extends Rec{
    public constructor(edge:number){
        super(edge,edge);
    }
    public override toString(): string {
        return "this is squre"
    }
}