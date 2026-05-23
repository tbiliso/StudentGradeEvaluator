// Part 1 — Grade Validator
// Write three functions that validate and classify a numeric exam score.
// 1.1 isValidScore(score)
// Returns true if score is a number between 0 and 100 (inclusive), false otherwise. The function
// must also handle falsy inputs — if score is falsy (null, undefined, 0 treated carefully, empty
// string), log a warning and return false.

// const isValidScore = num => {
//   if(num === null){
//     console.warn("no score provided")
//     return false;
//   } else {
//     return num>=0&&num<100;
//   } 
// }
// console.log(isValidScore(null)); // Warning: no score provided. → false
// console.log(isValidScore(50))
// console.log(isValidScore(-50))
// console.log(isValidScore(0))
// console.log(isValidScore(501))

const isValidScore = num => num>=0&&num<100&&num!==null;
// console.log(isValidScore(85)); // true
// console.log(isValidScore(101)); // false
// console.log(isValidScore(-5)); // false
// console.log(isValidScore(null)); // Warning: no score provided. → false
// console.log(isValidScore(0)); // true (0 is a valid score!)

// 1.2 getLetterGrade(score, passingScore = 50)
// Returns the letter grade as a string, based on the scale below. The passingScore parameter
// sets the D/F boundary and defaults to 50.
function getLetterGrade(score, passingScore = 50, checkFn){
  if(!isValidScore(score)){
    return "Invalid";
  } else if(score<=100 && score>=90){
    return "A";
  } else if(score<=89 && score>=75){
    return "B";
  } else if(score<=74 && score>=64){
    return "C";
  } else if(score<=59 && score>=passingScore){
    return "D";
  } else if(score<passingScore){
    return "F";
  } 
}

console.log(getLetterGrade(95,50,isValidScore))