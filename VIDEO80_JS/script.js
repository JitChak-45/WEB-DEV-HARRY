// let obj={
//     a:1,
//     name:"Harry"
// }
// console.log(obj);

// let animal={
//     eats:true
// }

// let rabit={
//     jumps:true
// }

// rabit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created....");
    }

    eats(){
        console.log("kha raha hoon...");
    }
    jumps(){
        console.log("kood raha hoon...");
    }
}

//inheritence
class Lion extends Animal{
    constructor(name){
        super(name);
        
        console.log("Object is created and he is a lion....");
    }
    //overriding

    eats(){
        super.eats();
        console.log("kha raha hoon roar....");
    }
}

let a=new Animal("mannu");
console.log(a);
console.log(a.name);

let l=new Lion("Shera");
console.log(l);

//instace of(tells about object of a class or not)
console.log(l instanceof Lion);
console.log(l instanceof Animal);
console.log(a instanceof Lion);