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
