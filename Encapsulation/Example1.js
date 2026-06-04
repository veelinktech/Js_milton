class Employee
{
    empid =1;
    empname="milton";
    salary = 75000;

    getEmpDetails()
    {
        console.log("Empid = ", this.empid)
        console.log("Empname = ", this.empname)
        console.log("Salary =", this.salary)
    }
}

const e1 = new Employee()
e1.salary=85000
e1.getEmpDetails()