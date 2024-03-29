// Given a two-digit integer, return the sum of its digits.

// Input: 29
// Output: 11

// Input: 30
// Output: 3

function sumOfDigits(n) {
  // Check if the input is a two-digit integer
  if (n >= 10 && n <= 99) {
    // Convert the number to a string, split it into an array of characters,
    // map each character back to a number, and finally, reduce to get the sum.
    return String(n)
      .split('')
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  } else {
    // Handle the case when the input is not a two-digit integer
    return 'Input is not a two-digit integer';
  }
}

// Examples
console.log(sumOfDigits(29)); // Output: 11
console.log(sumOfDigits(30)); 

//Write a function called oddsEvens that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line.

//Input: Hacker
//Output: Hce akr

function oddsEvens(s){
    const evenChars= s.split('').filter((char,index) => index % 2 === 0).join('');

    const oddChars = s.split('').filter((char,index) => index % 2 !== 0).join('');

    console.log(evenChars + ' ' + oddChars)
}

oddsEvens('Hacker')

//Write a function called isAnagram that, given 2 strings, returns true if the strings are anagrams

function isAnagram(str1, str2){
    const cleanSort = (str) => str.toLowerCase().split('').sort().join('')

    const sorted1 = cleanSort(str1)
    const sorted2 = cleanSort(str2)

    return sorted1 === sorted2
}
isAnagram("cinema", "iceman") == True
isAnagram("randum", "werdz") == False

// Given an array of strings, return another array containing all of its longest strings.


// Output: ["aba", "vcd", "aba"]

function allLongestStrings(inputArray){

    const maxLength = Math.max(...inputArray.map(str => str.length));

    const longestStrings = inputArray.filter(str => str.length === maxLength);

    return longestStrings;
}


function largestNumber(numArray){
    const maxNum = Math.max(...numArray)
    return maxNum
}
const numArray = [1,2,5,10]
const result = largestNumber(numArray)
console.log(result)

function printArr(array){
    return array.map(str => console.log(str))
}

array = ['sally','monique','caleb']
printArr(array)

// Write a function called isPalindrome that, given a string, returns true
// if the string is a palindrome, and false if not

// Input: isPalindrome("tacocat")
// Output: True

// Input: isPalindrome("nottacocat")
// Output: False

// Additional levels of difficulty:
// Input: isPalindrome("Race car")
// Output: True

// Input: isPalindrome("a man, a plan, a canal - panama")
// Output: True

function isPalindrome(str){
   return str === str.split('').reverse().join('')
}
isPalindrome("tacocat")

// Write a function called likes which takes in an array, containing the names of people who like an item. It must return the display text as shown in the examples and is dependent on the number of elements in the array.

// Input: likes([])
// Output: "no one likes this"

// Input: likes(["Peter"])
// Output: "Peter likes this"

// Input: likes(["Jacob", "Alex"])
// Output: "Jacob and Alex like this"

// Input: likes(["Max", "John", "Mark"])
// Output: "Max, John and Mark like this"

// Input: likes(["Alex", "Jacob", "Mark", "Max"])
// Output: "Alex, Jacob and 2 others like this"

function likes(names){
    const length = names.length

    switch(length){
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`  ; 
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]}, and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]}, and ${length - 2} others like this`
    }
}
console.log(likes([]));                        
console.log(likes(["Peter"]));                 
console.log(likes(["Jacob", "Alex"]));        
console.log(likes(["Max", "John", "Mark"]));   
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


// Create a function called findMissingNums that takes in two arrays. Iterate over the first array and the number you are iteratring over is NOT present in the second array, push the number into it. Once the loop is complete return the second array.

// Input: [0,1,2,3,4,5,6,7,8,9], [2,3,7,9]
// Output: [ 2, 3, 7, 9, 0, 1, 4, 5, 6, 8 ]

function findMissingNums(arr1, arr2){
    for(let num of arr1){
        if(!arr2.includes(num)){
            arr2.push(num)
        }
    }
    return arr2
}

const array1 = [0,1,2,3,4,5,6,7,8,9]
const array2 = [2,3,7,9]

const results = findMissingNums(array1, array2)

console.log(results)


// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.

// Input: [3, 2, 5, 7, 11, 15], 9
// Output: Return [2, 7]

function twoSum(nums,target){
    const numMap = {};

    for(let num of nums) {
        const complement = target - num;

        if (complement in numMap) {
            return [complement, num];
        }
        numMap[num]= true;
    }
    return null
}

const numsArray = [3, 2, 5, 7, 11, 15];
const targetSum = 9;

const twoSumResult = twoSum(numsArray, targetSum);
console.log(twoSumResult);


// Write a function called hasVowels that takes in an array of words and returns a new array of only those words that contain one or more vowels.

// Input: hasVowels(['jon', 'ada', 'ppzpp', 'brgggg', 'eric'])
// Output: ['jon', 'ada', 'eric']

function hasVowels(words){
    vowels= ['a','e','i','o','u']

    return words.filter(word =>{
        return vowels.some(vowel => word.toLowerCase().includes(vowel))
    });
}

const inputArray = ['jon', 'ada', 'ppzpp', 'brgggg', 'eric'];
const vowelresult = hasVowels(inputArray);
console.log(vowelresult);

// Write a function called isPrime, that takes in a positive integer and returns
// True if number is Prime, otherwise false

// Input: isPrime(10)
// Output: False

// Input: isPrime(13)
// Output: True

function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0){
            return false
        }
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime(13));


// Write a function called uniqueVals that will return an array of unique values, no duplicates allowed. It will accept 2 arguments, the first will be the desired length of the returned array and the second will the be the max value in the random set.

// Input: uniqueVals(5,10)
// Possible Output: [1,7,3,9,2]

function uniqueVals(length,maxValue){
    const uniqueArray=[];

    while (uniqueArray.length < length){
        const randomNum= Math.floor(Math.random() * maxValue) + 1;

        if (!uniqueArray.includes(randomNum)){
            uniqueArray.push(randomNum)
        }
    }
    return uniqueArray
}

const randomresult = uniqueVals(5,10);
console.log(randomresult)

// Write a function called greatestCommomFactor that, given two distinct positive integers,
// returns the greatest common factor of those two values

// Input: greatestCommonFactor(9,12)
// Output: 3

// Input: greatestCommonFactor(6,18)
// Output: 6

// Input: greatestCommonFactor(7,11)
// Output: 1

function greatestCommonFactor(num1,num2){
    while(num2 !== 0){
        const temp = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1;
}

console.log(greatestCommonFactor(9, 12));
console.log(greatestCommonFactor(6, 18)); 
console.log(greatestCommonFactor(7, 11)); 

