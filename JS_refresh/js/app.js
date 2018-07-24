console.log('Hello');
//arrow function
const printMyName = name =>{
    console.log(name)
}
printMyName("Kasia")

const printMyName1 = () =>{
    console.log('Karolina')
}
printMyName1()

const printMyName2 = (name, age) =>{
    console.log(name, age)
}
printMyName2('Kasia', 25)

const multiply = number =>  number *2;
console.log(multiply(2));

//import and export modules
/*
import person from "./person.js";
import {baseData} from "./utility.js";
console.log(person);
console.log(baseData);
*/

//class
class Human {
    constructor (){
        this.gender = "male"
    }
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor(){
        super();
        this.name = "Kasia";
        this.gender = 'female';
    }
    printMyName (){
        console.log(this.name)
    }
}
const person = new Person();
person.printMyName();
person.printGender();


