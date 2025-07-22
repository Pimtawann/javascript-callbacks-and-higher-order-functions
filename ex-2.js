//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  return score > 70;
}

function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i=i+1) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
  Ans - ฟังก์ชัน checkGradeOver70 เป็นฟังก์ชั่น Callback
  มีจุดสังเกตคือ ฟังก์ชันถูกส่งเป็นพารามิเตอร์ให้กับฟังก์ชั่นอื่น (ฟังก์ชัน atLeastFive)

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
  Ans - ฟังก์ชัน atLeastFive เป็นฟังก์ชั่น Higher Order Function
  มีจุดสังเกตคือ เป็นฟังก์ชั่นที่รับฟังก์ชั่นอื่น (checkGradeOver70) เป็นพารามิเตอร์และเรียกใช้งาน

====================================
*/
