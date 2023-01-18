//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/
let arr = [1, 2, 3, 5, 6, 7]

function firstNonConsec(arr){
    let previous = arr[0]
    let first;
    for (let i = 0; i < arr.length-1; i++){
        if ((previous + 1) !== arr[i]){
            first = arr[i];
        }
        previous ++;
    }
    return first !== undefined ? first: null;
}

console.log(firstNonConsec(arr))



//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

function SumPos( array ){
    var total = 0
    for(var i = 0; i < array.length; i++){
        if(array[i]>0){
            total+= array[i];
        }
    }
    return total;
}

console.log(SumPos(numbers1))
console.log(SumPos(numbers2))