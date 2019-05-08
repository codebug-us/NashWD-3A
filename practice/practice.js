document.addEventListener('DOMContentLoaded', function() {
  // your code goes below

//console.log("the page has loaded!");
var givenNumber = prompt("Give me a number");
console.log(givenNumber);
if(givenNumber<4){
	console.log("The number is less than 4");
}else if(givenNumber>=4){
	console.log("The number is NOT less than 4");
}else {
	console.log("Something went wrong");
}


})