/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/



// My solution
function findOdd(A) {
  return A.reduce((acc, cur) => acc ^ cur)
}

// Arrow function format
const findOdd = A => A.reduce((acc, cur) => acc ^ cur
