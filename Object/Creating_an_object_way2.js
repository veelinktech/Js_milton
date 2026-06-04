console.log("====Creating an object using new keyword")

const employee = new Object()

console.log(typeof employee)
console.log(employee)

employee.empid=1;
employee.empname="Milton";
employee.empsalary=60000;
employee.city='Chennai'

console.log(employee)

console.log("=====Accessing Object Property====")

console.log(employee['empid'])
console.log(employee.empname)
console.log(employee.empsalary)
console.log(employee['city'])