class Emp
{

    #eid;
    #ename;
    #esalary;

    setEid(id)
    {
        this.#eid = id;
    }

    setEname(name)
    {
        this.#ename = name;
    }

    setSalary(salary)
    {
        this.#esalary = salary;
    }

    getEid()
    {
        return this.#eid;
    }

    getEname()
    {
        return this.#ename;
    }

    getSalary()
    {
        return this.#esalary;
    }
}

const e1 = new Emp();

e1.setEid(1)
e1.setEname("Rajesh")
e1.setSalary(65000)

console.log("Empid = ", e1.getEid())
console.log("Empname = ", e1.getEname())
console.log("Empsalary = ", e1.getSalary())