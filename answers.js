//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.
var printPositives = [32,15,-32,5,-6,-32];
var filteredPositives = [];
printPositives.forEach(function(item){
    if(item > 0) {
	    filteredPositives.push(item);
    }
})
console.log(filteredPositives);

