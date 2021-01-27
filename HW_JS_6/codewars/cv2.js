// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
// Given three integers a ,b ,c,
// return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , *_try every combination of a,b,c with [+()] , and return the Maximum Obtained_**

function expressionMatter(a, b, c) {
    let arr = [a+b+c, a*(b+c), (a+b)*c, a*b*c];
    arr.sort((x, y) => y - x);
    return arr[0]
}


console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(2, 2, 2));

