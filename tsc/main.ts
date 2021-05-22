export {}
let name = "Nitin";
console.log(name);

class boy{

    constructor(public fname:String, public lname:String, public age:Number, public smoke:Boolean)
    { }
    
    getdetail(){
        console.log(`Name ${this.fname} ${this.lname} and age is ${this.age} is smoke ${this.smoke}`);
    }
    
}

let boys = new boy("Nitin", "More", 24, true);
boys.getdetail();
console.log(boys.age);
