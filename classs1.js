// classes in the java script is same as constructior function

class Person {
    constructor(_name, _age){
        this.name = _name,
        this.age =_age
    }
    welcome(){
        console.log(`Welome ${this.name}`)
    }
}
let p1 = new Person("kamlesh Bafila","25");
let p2 = new Person("Shekhar Singh Thapa","25");

console.log(p1);
p1.welcome()
console.log(p2);
p2.welcome()


