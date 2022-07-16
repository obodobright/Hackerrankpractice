// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  // to get the maximum and minimu sum value of the arr.
  // step 1 - add up all intergers in arr
  let sum = arr.reduce((a, b) => a + b);
  // step2 - get the max and min value of the numbers in the array;
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);

  // step 3 - subract the total sumfrom the maxVal and minVal rrespectively;
  console.log(sum - maxVal, sum - minVal);
}
miniMaxSum([2, 3, 4, 2, 1]);
