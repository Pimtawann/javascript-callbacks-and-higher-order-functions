// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}

function forEach(array, operation) {
  let result = [];
  for(let item of array){
    result.push(operation(item));
  }
  return result;
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function? // addSalary5000

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?  //forEach

====================================
*/
