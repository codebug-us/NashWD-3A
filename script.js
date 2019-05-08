document.addEventListener("DOMContentLoaded", function() { 
  // write your javascript code below.
//console.log('Test!'); 
// var age = prompt("Enter your age");
// if(age<16){
// 	alert("YOU CAN'T DRIVE!!");
// }else{
// 	alert("HERE'S THE KEY TO MY FERRARI!");
// }
// var happyRating = prompt("Rate your happiness of a scale of 1 to 10");
// if(happyRating<=5){
// 	alert("Don't worry, you are killing it!");
// }else{
// 	alert("I hope your day continues to rock!");
// }
// var birthdayIsToday = prompt("Is your birthday today?");
// if(birthdayIsToday=="yes"){
// 	console.log("HAPPY BIRTHDAY!!");
// }else{
// 	console.log("Good Day, Mate!");
// }
// var tacoMeat =prompt("Do you want chicken or steak on your taco?");
// if(tacoMeat=="chicken"){
// 	console.log("Chicken tacos are the best!");
// }else if(tacoMeat=="steak"){
// 	console.log("Steak tacos are the best!");
// }else{
// 	console.log("That item is not on the menu.");
// }
// var favColor =prompt("What is your favorite color in the rainbow?");
// if(favColor=="red"){
// 	console.log("I love red");
// }else if(favColor=="orange"){
// 	console.log("Orange is great!");
// }else if(favColor=="yellow"){
// 	console.log("Yellow is groovy!");
// }else if(favColor=="green"){
// 	console.log("Green is the bee's knees!");
// }else if(favColor=="blue"){
// 	console.log("Blue skyies are DOPE!");
// }else if(favColor=="indigo"){
// 	console.log("This answer is pretentious");
// }else if(favColor=="violet"){
// 	console.log("This is a royal color! Good choice.");
// }else{
// 	console.log("This color isn't worthy of a response.");
// }
var hungryResponse = prompt("Are you hungry?");
var thirstResponse = prompt("Are you thirsty?");
if(hungryResponse=="yes"&&thirstResponse=="yes"){
	console.log("Here is a cookie and milk");
}else if(hungryResponse=="yes"&&thirstResponse=="no"){
	console.log("Here is a cookie");
}else if(thirstResponse=="yes"&&hungryResponse=="no"){
	console.log("Here is milk");
}else if (hungryResponse=="no"&&thirstResponse=="no"){
	console.log("Go away then!");
}else{
	console.log("One of your answers in invalid");
}







  
});