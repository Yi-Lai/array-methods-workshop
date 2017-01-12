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
var filteredPositive = morearray.filter(function(element) {
    return element > 0 ;
})

console.log(filteredPositive);

//Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).
numberarray.filter(function(element) {
    return element > 0 ;
}).forEach(function(element) {
    console.log(element);
})