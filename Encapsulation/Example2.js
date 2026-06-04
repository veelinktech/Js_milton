class Employee1
{
    #empid;
    #empname;
    #salary;

    constructor(empid, empname, salary)
    {
        this.#empid = empid;
        this.#empname = empname;
        this.#salary = salary;
    }


   getEmpid()
   {
     return this.#empid;
   }

   getEmpname()
   {
     return this.#empname;
   }

   getEmpSalary()
   {
     return this.#salary;
   }
}

const e1 = new Employee1(1,"Ram",55000)
const empid = e1.getEmpid()
const empname = e1.getEmpname()
const salary = e1.getEmpSalary()

console.log("Empid = ", empid)
console.log("Empname = ", empname)
console.log("Salary = ", salary)