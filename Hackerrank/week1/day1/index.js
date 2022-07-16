// Problem
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

function plusMinus(arr) {
  // step 1 - initiate the count total number of both positive and negative or zero in the array
  let numOfPostive = 0;
  let numOfNegative = 0;
  let numOfZero = 0;
  // step 2 - iterate the array to look for a number that is positive or negative
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      numOfPostive++;
    }
    if (arr[i] < 0) {
      numOfNegative++;
    }
    if (arr[i] === 0) {
      numOfZero++;
    }
  }
  let ratioPositive = numOfPostive / arr.length;
  let ratioNegative = numOfNegative / arr.length;
  let ratioZero = numOfZero / arr.length;

  console.log(ratioPositive.toFixed(6));
  console.log(ratioNegative.toFixed(6));
  console.log(ratioZero.toFixed(6));
}

plusMinus([2, 5, -1, -4, 0, 4]);
