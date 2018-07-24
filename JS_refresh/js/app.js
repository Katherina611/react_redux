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