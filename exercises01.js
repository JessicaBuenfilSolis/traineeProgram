// exercises-01

function sum (a, b) {
    return console.log(a+b)
}

sum(3,4)

//===============================

var data = 'data';

function logData() {
  console.log(data)
}
logData();

//===============================

function logNumber(num = null) {
    num ? console.log(num) : console.log(0)
}
  
logNumber(10);
logNumber();

//===============================

function logAsArray(...numbers) {
    let array = []
    for (let i=0; i<numbers.length; i++) {
        array.push(numbers[i])
    }
    return console.log(array)
}

logAsArray(1, 2); // [1,2]
logAsArray(1, 2, 3); // [1,2,3]
logAsArray(1, 2, 3, 4, 5); // [1,2,3,4,5]

//===============================

function logArray(array = []) {
    array.map(element => {
        console.log(element)
    })
}

logArray([1, 2, 3, 4, 5]);

//===============================

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}
  
var teslaS = new Car('brand-test', 'model-test', 'year-test');
console.log(teslaS)

//===============================

function calculateRectanglePerimeter() {
    let perimeter = this.height * 2 + this.width*2
    console.log(perimeter)
    return perimeter
}
  
calculateRectanglePerimeter.apply({
  height: 2,
  width: 2
}); // 8

//===============================

function calculateCirclePerimeter() {
    return 3.1416 * this.radius * this.radius
}

var boundCalculateCirclePerimeter = calculateCirclePerimeter.bind({
  radius: 2
});

console.log(boundCalculateCirclePerimeter()); // ~ 12.56

//===============================

function reverseString(str) {
    return str.split("").reverse().join("")
}
  
reverseString("hola"); // aloh

//===============================

function sortString(str) {
    return console.log(str.split("").sort().join(""))
  }
  
sortString("david"); // 'addiv'

//===============================

function arePalindromes(a, b) {
  a = a.split('').reverse().join('')
  return console.log(a === b)
}

arePalindromes("anita lava la tina", "anit al aval atina"); // true
arePalindromes("avid", "diva"); // true
arePalindromes("juan", "jose"); // false