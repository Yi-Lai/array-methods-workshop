//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.
var numberarray = [32,15,-32,5,-6,-32];
var filteredPositives = [];
numberarray.forEach(function(item){
    if(item > 0) {
	    filteredPositives.push(item);
    }
})
console.log(filteredPositives);

//Similar to the previous exercise, write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.

var morearray = [49,-32,100,-49,29,-10];
var filteredPositive = morearray.filter(element => element > 0)

console.log(filteredPositive);

//Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).
function test(element) {
    return element > 0 ;
}
numberarray.filter(test).forEach(function(element) {
    console.log(element);
})

//Write a function called filterArray that takes a callback function and an array as arguments. Your filterArray function should return a new array that contains only the elements where the callback function returns true.
var numberz = [12,32,49,23,13];

function filterArray(mytest,myarray){
    return myarray.filter(mytest)
}
filterArray(test,numberz)

//Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.

function longestWord(str) {
    var strArray = str.split(" ");
  return strArray.reduce(function(a, b) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  });
}
console.log(longestWord("THIS IS A VERY LONG STRING"))
