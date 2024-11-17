// Question Set 01;

let name = "john"
let age = 25;

console.log(`I'm ${name} and I am ${age} years old`);

// console.log("My name is john and I am 25 years old");
// console.log(name , age);


// Question Set 02;

let num = [7];

if ("%") {
    console.log("The number is even.");
    
} else {
    console.log("The number is odd."
);
    
}



// Question Set 03;
for (let i=0; i<=50; i++) {
    console.log(i);
    
}

// #### *4. Functions*Question:*;  

function addNumbers(item1, item2) {
    return item1 + item2;
    
} 

let sum =
addNumbers (3,7)
console.log(sum);


// #### *5. Arrays*Question:*;
let fruits = [ "apple", "banana", "cherry"]
fruits.push("orange")

console.log(fruits[0]);
console.log(fruits.length);


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2);
});

// ### *7. DOM Manipulation*;
document.getElementById("changeText").addEventListener("click", function () {
    document.querySelector("h1").innerText = "You clicked the button!";
  });

 // #### *8. String Manipulation*;

let text = "hello world";
console.log(text.toUpperCase()); 


// #### *9. Objects*;

let person = {
    name: "Alice",
    age: 30,
    greet: function () {
      return `Hello, my name is ${`this.name`}.`;
    }
  };
  
  console.log(person.greet());
