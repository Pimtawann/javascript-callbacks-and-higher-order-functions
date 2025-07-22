// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  return previousSalary + 5000;   
}

function forEach(array, operation) {
  const result = [];
  for (let i = 0; i < array.length; i=i+1) {
    result.push(operation(array[i]));
  }
  return result;
}

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
  Ans - ฟังก์ชัน addSalary5000 เป็นฟังก์ชั่น Callback
  มีจุดสังเกตคือ ฟังก์ชันถูกส่งเป็นพารามิเตอร์ให้กับฟังก์ชั่นอื่น และไม่ได้ถูกเรียกใช้เองโดยตรง แต่ถูกเรียกผ่านฟังก์ชั่นอื่น

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
  Ans - ฟังก์ชั่น forEach เป็นฟังก์ชั่น Higher Order Function
  มีจุดสังเกตคือ ฟังก์ชันนี้รับฟังก์ชันอื่นเป็นพารามิเตอร์

====================================
*/
