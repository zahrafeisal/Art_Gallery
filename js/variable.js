// variables are storage containers for info referencing
// we define variables using two keywords, let and const
// variable rules;
// 1. Start every variable name with a lowercase letter. Variable names starting with a number are not valid.
// 2. Don't use spaces. If a variable name consists of multiple words, camelCaseYourVariableNames
// 3. Don't use JavaScript reserved words or future reserved words.

// variables defined using let are mutable; the variable's value can be changed during the running of the program. 
// when coming up with the name for a variable, make it descriptive as possible
// an equal sign is used to ASSIGN a value to a variable name
let person_name = "Zahra Feisal"
// to check on changes, print info to the console; use a method in js called console.log
console.log(person_name)
// on your terminal, ensure you're in the right location(js folder)then run node filename; in this case node variable.js
// variables once defined cannot be redefined
// dont say let person_name again
person_name = "Sally"
console.log(person_name)
let second_person_name = "Alvin"
console.log(second_person_name)

// const is immutable; to make a variable's value permanent.
const position = 1
console.log(position)