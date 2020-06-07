/* Question 1 */
var petArray = ["cat", "cow", "dog"];

/* Question 2 */
var pet = petArray[1];
console.log(pet);
// or it can be done also like this:
console.log(petArray[1]);

/* Question 3 */
petArray.push("sheep");

/* Question 4 */
console.log(petArray.length);

/* Question 5 */
var catObject = {
	name: "Mirri",
	color: "Black",
	age: 3,
};

/* Question 6 */
console.log(catObject.age);

// If we where supposed to log the third property
// without neccessarily knowing its name, it can be
// done like this:
console.log(Object.values(catObject)[2]);

/* Question 7 */
var catArray = [catObject];

/* Question 8 */
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i].name);
	console.log(catArray[i].color);
	console.log(catArray[i].age);
}

/* Question 9 */
function logToConsole(output) {
	console.log(output);
}

/* Question 10 */
logToConsole("donkey");
