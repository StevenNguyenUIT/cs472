"use strict";

let a = 100;
let b = 50;
let c = 70;
let d = 110;
let char1 = 'e';
let char2 = 'h'; 
let arrayNumber0 = [1,2,3,4];
let arrayNumber1 = [1,3,4,5,7];
let arrayNumber2 = [1,3,5,6,7,8,10];
let arrayNumber3 = [1,2,3,4,5,6];
let string0 = "jag testar";
let string1 = "Wap MIU";
let arrayString0 = ["java", "or", "javascript"];
let arrayString1 = ["This", "is", "a", "test", "for", "words"];
const n0 = 2;
const n1 = 6;
const a1 = 0;
const a2 = 1;

/* 1.Define a function max() that takes two numbers as arguments 
and returns the largest of them. Use the if-thenelse construct 
available in Javascript. */
function max(x, y){
    if( x > y) return x;
    return y;
}

let fmax = max(a, b);
let fmax1 = max(c, d);
console.log(`1. Max of 2 numbers ${a} and ${b} : ${fmax}`);
console.log(`   1.1 Max of 2 numbers ${c} and ${d} : ${fmax1}`);

/* 2. Define a function maxOfThree() that takes three numbers as 
arguments and returns the largest of them */
function maxOfThree(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x;
        } else {
            return z;
        }
    } else if (y > z){
        return y;
    } else {
        return z;
    }
}

let fmaxThree = maxOfThree(a, b, c);
let fmaxThree1 = maxOfThree(b, c, d);
console.log(`2. Max of 3 numbers  ${a}, ${b} and ${c} : ${fmaxThree}`);
console.log(`   2.1 Max of 3 numbers ${b}, ${c} and ${d} : ${fmaxThree1}`);


/* 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
function isVowel(char){
    if(char=="e" || char=="E" || char=="o" || char=="O" || char=="a" || char=="A" || char=="u" || char=="U" || char=="i" || char=="I"){
        return true;
    }
    return false;
}

let vowel = isVowel(char1);
let vowel1= isVowel(char2);
console.log(`3. ${char1} is vowel: ${vowel}`);
console.log(`   3.1 ${char2} is vowel: ${vowel1}`);


/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */

function sum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

function multiplies(array){
    let mul = 1;
    for (let index = 0; index < array.length; index++) {
        mul *=array[index];
    }
    return mul;
}

let sumArrayResult = sum(arrayNumber0);
let sumArrayResult1 = sum(arrayNumber1);
let mulArrayResult = multiplies(arrayNumber0)
let mulArrayResult1 = multiplies(arrayNumber1)

console.log(`4. sum array ${arrayNumber0} is: ${sumArrayResult }, multiplies is: ${mulArrayResult} `);
console.log(`   4.1 sum array ${arrayNumber1} is: ${sumArrayResult1}, multiplies is: ${mulArrayResult1} `);

/* 5. Define a function reverse(str) that computes the reversal of a string. For example, reverse("jag testar") should
return the string "ratset gaj". */

function reverse(str) {
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
        newStr += str.charAt(str.length-1-index);
    }
    return newStr;
}



let revStr0 = reverse(string0);
let revStr1 = reverse(string1);
console.log(`5. Reverse of str ${string0} is: ${revStr0}`)
console.log(`   5.1 Reverse of str ${string1} is: ${revStr1}`)

/* 6. Write a function findLongestWordLength() that takes an array of words and returns the length of the longest one. */

function findLongestWordLength(array) {
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index].length > max){
            max = array[index].length;
        }
    }
    return max;
}

let longestWord = findLongestWordLength(arrayString0);
let longestWord1 = findLongestWordLength(arrayString1);
console.log(`6. Longest word in array [${arrayString0}] is: ${longestWord}`);
console.log(`   6.1 Longest word in array [${arrayString1}] is: ${longestWord1}`);

/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
containing only those words that were longer than i characters. */

function filterLongWords(arr, i){
    let newArr = arr.filter(element => element.length > i);
    return newArr;
}

let filterdArr = filterLongWords(arrayString1,2);
let filterdArr1 = filterLongWords(arrayString1,3);
console.log(`7. Filtered array [${arrayString1}] with length > 2 is: [${filterdArr}]`);
console.log(`   7. Filtered array [${arrayString1}] with length > 3 is: [${filterdArr1}]`);

/* 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
NOT use any explicit looping construct; instead use functional programming style/approach. */

function computeSumOfSquares(arr){
    return arr.reduce(((sum, current) => sum+=current*current),0);
}

let sumResult = computeSumOfSquares(arrayNumber0);
let sumResult1 = computeSumOfSquares(arrayNumber1);
console.log(`8. sum of squares arr ${arrayNumber0} is ${sumResult}`);
console.log(`   8.1 sum of squares arr ${arrayNumber1} is ${sumResult1}`);

/* 9. Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and prints
only the numbers which are odd. */

function printOddNumbersOnly(arr){
    return arr.filter(value=>value%2!=0)
}


let arrayReSult1 = printOddNumbersOnly(arrayNumber1);
let arrayReSult2 = printOddNumbersOnly(arrayNumber3);
console.log(`9. The numbers is odd in ${arrayNumber1} is:  ${arrayReSult1}`);
console.log(`   9.1 The numbers is odd in ${arrayNumber3} is:  ${arrayReSult2}`);

/* 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20. */

function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter(element=>element%2==0).reduce(((sum,current)=>sum+=current*current),0);
}


let arrayResult3 = computeSumOfSquaresOfEvensOnly(arrayNumber0);
let arrayResult4 = computeSumOfSquaresOfEvensOnly(arrayNumber3);
console.log(`10. Sum of Square of Even only in arr ${arrayNumber0} is ${arrayResult3}`);
console.log(`   10.1 Sum of Square of Even only in arr ${arrayNumber3} is ${arrayResult4}`);


/* 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
    above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
    functional programming style/approach.  */

    function sum1(array) {
        return array.reduce((sum,current)=>sum+=current,0);
    }
    
    function multiplies1(array){
        return array.reduce((mul,current)=>mul*=current,1);
    }
    
    let sumArrayResult2 = sum1(arrayNumber0);
    let sumArrayResult3 = sum1(arrayNumber1);
    let mulArrayResult2 = multiplies1(arrayNumber0)
    let mulArrayResult3 = multiplies1(arrayNumber1)
    console.log(`11. sum by functional style for array ${arrayNumber0} is: ${sumArrayResult2}, multiplies is: ${mulArrayResult2} `);
    console.log(`   11.1 sum by functional style for array ${arrayNumber1} is: ${sumArrayResult3}, multiplies is: ${mulArrayResult3} `);

/*12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
    and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
    a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
    output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
    3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */
  
// this function will return String    
function printFibo(n, a, b){
    let s0 = a;
    let s1 = b;
    let s2;
    var arr = [];
    for (let index = 0; index < n; index++) {
        arr[index] = s0;
        s2 = s0 + s1;
        s0 = s1;
        s1 = s2;
    }
    console.log(arr);
}

console.log(`12. Print fibo with ${n0} number and begin with ${a1} & ${a2} is:`);
printFibo(n0,a1,a2);
console.log(`   12.1 Print fibo with ${n1} number and begin with ${a1} & ${a2} is:`);
printFibo(n1,a1,a2);