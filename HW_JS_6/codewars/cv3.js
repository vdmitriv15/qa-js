// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
    if (name === owner) return 'Hello boss'
    else return 'Hello guest'
}

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))
