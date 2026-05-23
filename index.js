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




console.log(isValidScore(85)); // true
console.log(isValidScore(101)); // false
console.log(isValidScore(-5)); // false
console.log(isValidScore(null)); // Warning: no score provided. → false
console.log(isValidScore(0)); // true (0 is a valid score!)