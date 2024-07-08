
//Variables

var $example1=value  
var example1=value  
var _example$=value 

var x = 100;  
var x=200;  
console.log(x);

const arr = [1, 2, 3]
arr[0] = 4
console.log(arr)

// Create an object using object literal:
const Test = {
    firstName :"Sariga",
    lastName:"Jayaraj",
    age:24,
    isAlive:true,
    parent:{
        father:'appa',
        mother:'amma',
    },
    fullName: function(){
     return `${this.firstName} ${this.lastName}`
    }
}

// getting object values
document.getElementById('result').innerHTML = Test.fullName
console.log(Test.parent);

//1.Dot property accessor
// const hero = {
//     name: 'Batman'
//   };
  
  // Dot property accessor
  console.log(hero.name); 

//1.1 Dot property accessor requires identifiers
// const weirdObject = {
//     'prop-3': 'three',
//     '3': 'three'
//   };
  
//   weirdObject.prop-3; // => NaN
//   weirdObject.3; // throws SyntaxError: Unexpected number

  const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
  };
  
  console.log(weirdObject['prop-3']); // => 'three'
  console.log(weirdObject['3']); 

  //2. Square brackets property accessor
  const property = 'name';
  const hero = {
    name: 'Batman'
  };
  
  // Square brackets property accessor:
  console.log(hero['name']);   // => 'Batman'
  console.log(hero[property]);

//3. Object destructuring
const { [property]: name } = hero;
console.log(name);

//object merging
const personMethods = {
    yearofBirth(){
    console.log(new date.getFullYear() - 27)
    },
    favColor:'red',
    }

//object cloning
const objCopied = Object.assign({},person)

//spread operator
const obj2 = {...person, ...personMethods}
let numbers = [3, 2, 5, 1, 4]
console.log(Math.max(numbers))   // does not accept array
//NaN
console.log(Math.max(...numbers))   // same as: Math.max(3, 2, 5, 1, 4)
//5
console.log(Math.max(...numbers, 9))   // same as: Math.max(3, 2, 5, 1, 4, 9)
//9

let arr1 = [1, 2, 3],
    arr2 = ['a', 'b']

let arr3 = [...arr1, ...arr2]
console.log(arr3)
//[ 1, 2, 3, 'a', 'b' ]

let arr4 = ['a', ...arr1, 'b']
console.log(arr4)
//[ 'a', 1, 2, 3, 'b' ]


person.firstName = 'Sandhiya'
person.age = 41

object.assign(person,personMethods)

//arrays

const arr = [1, 2, 3]
arr[0] = 4
console.log(arr)

let fruits = ['apple', 'banana']
for (let i = 0; i < fruits.length; ++i) {
   console.log(fruits[i])
}

//Array De-structuring
let coffees = ['cappuccino', 'espresso', 'latte', 'mocha']

let [coffee1, coffee2] = coffees
console.log(coffee1, coffee2)
//cappuccino espresso

let [ , , coffee3] = coffees
console.log(coffee3)
//latte

let [coffee4, ...coffee5] = coffees   // rest, must be the last element
console.log(coffee4)
//cappuccino
console.log(coffee5)
//[ 'espresso', 'latte', 'mocha' ]