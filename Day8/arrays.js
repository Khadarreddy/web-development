//Find the Maximum Element
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
findMax([1, 2, 3, 4, 5]); // Output: 5


//Find the Minimum Element
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
findMin([1, 2, 3, 4, 5]); // Output: 1


//Find the Sum of Elements
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
findSum([1, 2, 3, 4, 5]); // Output: 15




//Find the Average of Elements
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
findAverage([1, 2, 3, 4, 5]); // Output: 3




//Check if Array is Sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
isSorted([1, 2, 3, 4, 5]); // Output: true


//Count Even and Odd Numbers
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}
let a=countEvenOdd([1, 2, 3, 4, 5]); // Output: { evenCount: 2, oddCount: 3 }
console.log(a);


//Reverse the Array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]





//Find the Index of a Given Element
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // Element not found
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2



//Remove Duplicates from Array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]



//Rotate Array by One Position
function rotateArray(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstElement;
    return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]



//Find Second Largest Element
function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4





//Left Rotate Array by k Positions
function leftRotate(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
}
console.log(leftRotate([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]




//Find the Missing Number
function findMissingNumber(arr) {
    let n = arr.length + 1; // Since one number is missing
    let total = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let sum = arr.reduce((a, b) => a + b, 0); // Sum of elements in the array
    return total - sum; // Missing number
}
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3




//Check for a Pair with Given Sum
function hasPairWithSum(arr, sum) {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(sum - arr[i])) {
            return true; // Pair found
        }
        seen.add(arr[i]);
    }
    return false; // No pair found
}   
console.log(hasPairWithSum([1, 2, 3, 4, 5], 8)); // Output: true (3 + 5 = 8)




//Count Frequencies of Elements
function countFrequencies(arr) {
    let freqMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (freqMap[arr[i]]) {
            freqMap[arr[i]]++;
        } else {
            freqMap[arr[i]] = 1;
        }
    }
    return freqMap;
}
console.log(countFrequencies([1, 2, 2, 3, 4, 4, 5])); // Output: { '1': 1, '2': 2, '3': 1, '4': 2, '5': 1 }




//Maximum Subarray Sum (Kadane’s Algorithm)
function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray [4, -1, 2, 1])


