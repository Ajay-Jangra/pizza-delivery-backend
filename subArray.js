// minimum  size  subarray  sum   https://leetcode.com/problems/minimum-size-subarray-sum/description/
// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray whose sum is greater than or equal to target.If there is no such subarray, return 0 instead.

let target = 9;
let arr = [2, 1, 3, 5, 4, 3, 8, 4]



function findSmallestSubarray(arr, target) {

    let minLength = Infinity; // initial length 

    for (var i = 0; i < arr.length; i++) {    // iterate for every subarray
        let currSum = 0;

        for (var j = i; j < arr.length; j++) {
            currSum += arr[j];
            if (currSum >= target && (j - i + 1) < minLength) {   // compair currSum with target

                minLength = (j - i + 1);
            }
        }
    }
    return (minLength === Infinity) ? 0 : minLength;
}

let length = findSmallestSubarray(arr, target);

console.log("Length of smallest subarray with Sum  greater then or equal to " + target + " = " + length);