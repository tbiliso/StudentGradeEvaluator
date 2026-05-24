// Part 1 — Grade Validator
// Write three functions that validate and classify a numeric exam score.
// 1.1 isValidScore(score)
// Returns true if score is a number between 0 and 100 (inclusive), false otherwise. The function
// must also handle falsy inputs — if score is falsy (null, undefined, 0 treated carefully, empty
// string), log a warning and return false.

// FIRST VERSION
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
// ARROW VERSION
// const isValidScore = num => num>=0&&num<100&&num!==null;

// GEMINI VERSION
const isValidScore = num => {
  const parsed = Number(num);
  // ვამოწმებთ, რომ არ იყოს ცარიელი (null), იყოს ნამდვილი რიცხვი (not NaN) და იჯდეს 0-100 შუალედში
  return num !== null && num !== "" && !isNaN(parsed) && parsed >= 0 && parsed <= 100;
};
// console.log(formScore == 85);  // დაიბეჭდება: true (რადგან == არ ამოწმებს ტიპს და ტექსტ "85"-ს ათანაბრებს რიცხვ 85-თან)
// console.log(formScore === 85); // დაიბეჭდება: false (რადგან === მკაცრია, String და Number სხვადასხვა ტიპებია)

// console.log(isValidScore(85)); // true
// console.log(isValidScore(101)); // false
// console.log(isValidScore(-5)); // false
// console.log(isValidScore(null)); // Warning: no score provided. → false
// console.log(isValidScore(0)); // true (0 is a valid score!)

// 1.2 getLetterGrade(score, passingScore = 50)
// Returns the letter grade as a string, based on the scale below. The passingScore parameter
// sets the D/F boundary and defaults to 50.


//2. GEMINI VERSION
function getLetterGrade(score, passingScore = 50, checkFn){
  // აქ აუცილებლად გამოიყენე checkFn (შემოსული ქოლბექი) და არა პირდაპირ isValidScore
  if(!checkFn(score)){
    return "Invalid";
  } else if(score <= 100 && score >= 90){
    return "A";
  } else if(score <= 89 && score >= 75){
    return "B";
  } else if(score <= 74 && score >= 60){ // ბარემ აქაც 60 დასვი, როგორც ცხრილშია
    return "C";
  } else if(score <= 59 && score >= passingScore){
    return "D";
  } else if(score < passingScore){
    return "F";
  } 
}

// აი, როგორ უნდა გამოიძახო prompt-თან ერთად სწორად:
let userScore = prompt("შეიყვანეთ შეფასება:");
console.log(getLetterGrade(userScore, 50, isValidScore));


// Part 2 — Score Calculators
// Arrow Functions Default Parameters Operators
// Write three calculator functions. All three must be arrow functions stored in const variables.
// 2.1 calculateAverage(s1, s2, s3, s4 = 0, count = 3)
// Calculates the average of up to four scores. The fourth score defaults to 0 

const calculateAverage = (s1, s2, s3, s4 = 0, count = 3)=> {
  if (s4 >0){
    count = 4;
    return (s1 + s2 + s3 + s4)/count;
  } else {
    return (s1 + s2 + s3)/count;
  }
}

console.log(calculateAverage(5,10,3,2))

// 2.2 calculateWeightedScore(exam, homework, bonus = 0)
// Returns the final weighted score using these weights: exam counts 60%, homework counts
// 40%, and bonus points are added on top (not weighted). Round the result to two decimal
// places.
const calculateWeightedScore = (exam, homework, bonus = 0) =>{
  const total = exam*0.6 + homework*0.4 + bonus;
  return Number(total.toFixed(2));
  
};
// console.log(calculateWeightedScore(71, 43,7))

// 2.3 isEligibleForRetake(score, attendance)
// A student is eligible for a retake exam if their score is below 60 AND their attendance is at or
// above 75 (percent). Returns a boolean.

const isEligibleForRetake = (score, attendance) =>{
  //პირველი ლოგიკა
  return score <60 && attendance >= 75 && score!==null;
  //მეორე ლოგიკა
  // return score >= 60 
  //   ? "Passed — no retake needed" 
  //   : (attendance < 75 ? "Failed, but too many absences" : "Eligible for retake");
}
console.log(isEligibleForRetake(calculateWeightedScore(71, 43, 8), 76)); 