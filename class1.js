let car ={
    car : "Thar",
    company :"Mahindra",
    color : "Blue"
}
console.log(car);

let car1 ={
    car : "suzuki",
    company :"maruti",
    color : "Blue"
}
console.log(car1);

let car2 ={
    car : "scorpio",
    company :"Mahindra",
    color : "Blue"
}
console.log(car2);

//constructor function -> jab bhaut sari car, company, and color hai to ek hi code
// me lane k liye construction function use kartehai 
//this is a perameter object
//this is an empty object

// function createCar(_name,_company,_color){
//     this.name = _name,
//     this.company = _company,
//     this.color =_color
// } 

// let car3 = new createCar("Thar", "Mahindra","black")
// let car4 = new createCar("Nexon","Tata","blue")
// let car5 = new createCar("Punch","Tata","Black")
// let car6 = new createCar("Scorpio","Mahindra","White")

// console.log(car3);
// console.log(car4);
// console.log(car5);
// console.log(car6);


// Method inside a constructor function->


function createCar(_name,_company,_color){
    this.name = _name,
    this.company = _company,
    this.color =_color

    this.drive = function(){
console.log('Driving Car ${this.name} of color $ {this.color}');   //template litral syntex is ${this.name}etc
    }
} 

let car3 = new createCar("Thar", "Mahindra","black")
let car4 = new createCar("Nexon","Tata","blue")
let car5 = new createCar("Punch","Tata","Black")
let car6 = new createCar("Scorpio","Mahindra","White")

console.log(car3);
car3.drive();
console.log(car4);
car4.drive();
console.log(car5);
car5.drive();
console.log(car6);
car6.drive();


