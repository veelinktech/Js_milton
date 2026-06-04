const Employee = {
    empid : 1,
    empName : "Sabari",
    no_of_workingdays : 30,
    calculate_Salary: function(perdaySalary)
    {
        return perdaySalary * this.no_of_workingdays;
    }
}

console.log(Employee)
console.log(Employee.empid)
console.log(Employee.empName)
console.log(Employee.no_of_workingdays)

console.log(Employee.calculate_Salary(3500))

