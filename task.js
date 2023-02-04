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
 let res =  [...numbers].sort((a,b) => a-b)
 return res[0]+ res[1] 
}

// ----------------------------//
// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).
// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6


function lostSheep(friday,saturday,total){
  let friSheep=friday.reduce((acc, val)=> val + acc,0)
  let satSheep=saturday.reduce((acc, val)=> val + acc,0)
  return total - friSheep - satSheep
 
}