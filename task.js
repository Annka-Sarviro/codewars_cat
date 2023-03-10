// -------------------//
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let res = arr.filter((el) => el !== arr[0])
  return res.length > 1 ? arr[0] : res[0]
}

findUniq([0, 0, 1, 0, 0])

// ----------------------//
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let res = [...numbers].sort((a, b) => a - b)
  return res[0] + res[1]
}

// ----------------------------//
// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).
// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

function lostSheep(friday, saturday, total) {
  let friSheep = friday.reduce((acc, val) => val + acc, 0)
  let satSheep = saturday.reduce((acc, val) => val + acc, 0)
  return total - friSheep - satSheep
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  let res = []
  let arr = words.split(' ')
  for (let i = 1; i < arr.length + 1; i += 1) {
    arr.map((val) => {
      val.includes(i) ? res.push(val) : val
    })
  }
  return res.join(' ')
}

// --------------------------//
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n)
}

// -----------------------------//
// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let alfabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = string.toLowerCase().split('')
  let filteredArr = arr.filter(
    (val, index, array) => array.indexOf(val) === index,
  )
  let res = filteredArr.reduce((acc, val, i) => {
    alfabet.includes(val) ? (acc = acc + 1) : (acc = acc)
    return acc
  }, 0)

  return res === alfabet.length ? true : false
}

// ore
function isPangrams(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x))
}

// ----------------------//
// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let pp = p0
  for (let i = 1; i <= p; i += 1) {
    let year = Math.floor(pp + (pp * percent) / 100 + aug)
    if (year >= p) {
      return i
    } else {
      pp = year
    }
  }
}

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let arr = s.split('')
  let res = [arr[0].toUpperCase()]
  for (let i = 1; i < arr.length; i += 1) {
    res.push('-')
    res.push(arr[i].toUpperCase())
    res.push(arr[i].repeat(i).toLowerCase())
  }

  return res.join('')
  // your code
}
// -----------------------------------//
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array) {
  const alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < array.length; i += 1) {
    let index = alfabet.indexOf(array[i])
    if (array[i + 1] !== alfabet[index + 1]) {
      return alfabet[index + 1]
    }
  }
}
// ------------------------------------//
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).

function findOdd(A) {
  let res
  A.map((val, i, arr) => {
    let b = A.filter((a) => a === val)
    if (b.length % 2 !== 0) {
      return (res = val)
    }
  })
  return res
}

// ---------------------//
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let array = num.toString().split('')
  let count = 0

  while (array.length > 1) {
    let res = array.reduce((acc, val, i) => {
      return acc * Number.parseInt(val)
    }, 1)
    array = res.toString().split('')
    count += 1
  }

  return count
}

// ========================//
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  let number = n.toString(2).split('')
  return number.reduce((acc, val, i) => {
    return acc + parseInt(val, 10)
  }, 0)
}


//----------------------------//
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
return arr.filter((val) => val.length < 4)
                .filter((val)=> val.charAt(0) === ":"|| val.charAt(0) === ";")
                .filter((val)=> val.charAt(1) === "-"|| val.charAt(1) === "~" || val.charAt(1) === ")" || val.charAt(1) === "D")
                .reduce((acc, val, ind, arr)=> {
                        return val.charAt(val.length-1) === ")" || val.charAt(val.length-1) === "D" ? acc +=1 : acc},0)}


// ---------------------------------------//
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const newArr = [];
  const zerroArr = []
  arr.map((value)=> {
    value !== 0? newArr.push(value) :  zerroArr.push(value)
  })
  console.log(arr, newArr)
  return [...newArr, ...zerroArr]
}

// -------------------------------------//
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let string = num.toString().split('').reverse()
  let res =[]
  for (let i=0; i<string.length; i+=1){
  if(string[i] !== "0")
    {res.push(string[i] + "0".repeat(i))}  }
return res.reverse().join(" + ")}

// ------------------------------------------//
// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
 let friends = s.toUpperCase().split(';').map((el)=> el.split(':'))
 let sortedFriends = friends.sort((a,b)=> a[0].localeCompare(b[0])).sort((a,b)=> a[1].localeCompare(b[1]))
 let res = sortedFriends.map((el)=> "(" + el.reverse().join(', ') + ")")
 return  res.join('')
}