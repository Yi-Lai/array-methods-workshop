//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.
var printPositives = [32,15,-32,5,-6,-32];
var filteredPositives = [];
printPositives.forEach(function(item){
    if(item > 0) {
	    filteredPositives.push(item);
    }
})
console.log(filteredPositives);

//Similar to the previous exercise, write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.

var getPositives = [49,-32,100,-49,29,-10];
var filteredPositive = [];
getPositives.filter(function(getPositive){
    if(getPositive > 0){
        filteredPositive.push(getPositive)
    }
})
console.log(filteredPositive);