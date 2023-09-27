//Example of Inheritance

// Person
// Teacher
// Students

class Person{
    constructor(_name, _age){
        this.name = _name,
        this.age = _age
    }
    welcome(){
        console.log(`welcome ${this.name}`)
    }   
}
//extends to person in inheritance function

class Teacher extends Person{
    constructor(_name,_age, _classStrength){
        super(_name,_age)
        this._classStrength = _classStrength
    }
    test(){
        super.welcome();  //call line 12 and 13 by super function
    }
}
let t1 = new Teacher("Kabbu sir", 29, 10)
console.log(t1);
t1.test();

class Students extends Person{
    constructor(_name,_age, _marks){
        super(_name,_age)
        this._marks = _marks
    }
    run(){
        super.welcome();
    }

}


let s1 = new Students("Shekhar Singh Thapa", 25, 50)
console.log(s1);
s1.run();