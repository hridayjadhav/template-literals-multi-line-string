// ES 5   3 types
console.log("My Name is Hriday" + " " + "My Surname is Jadhav");

let firstName = "Hriday";
let lastName = "Jadhav";
console.log("My name is" + " " + firstName + "." +" My lastname is " + lastName);

// expressions
let a = 20;
let b = 30;
console.log("Fifty is" + " " + ( a + b ) + " " + "\nnot" + " " + ( 2 * a + b ) + ".");       //   \n = for new line


// ES 6 2 types

console.log(`My name is hriday. My surname is Jadhav`);

let firstname = "Hriday";
let lastname = "Jadhav";
console.log(`My firstname is ${firstname}. My lastname is ${lastname}`);

// expressions
let c = 20;
let d = 30;
console.log(`Fifty is ${ c + d }
not ${ 2 * c + d }`);



const multiLineString = `This is a multi-line string.
It can span across multiple lines 
without the need for explicit line breaks`;
console.log(multiLineString);