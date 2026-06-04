class Person
{
    constructor(pname, page)
    {
        this.name = pname;
        this.age = page;
    }

    getpersonDetails()
    {
        console.log("Person Name = ", this.name)
        console.log("Person Age = ", this.age)
    }
}

const p1 = new Person("Ravi", 25)
p1.getpersonDetails()

const p2 = new Person("Kavin", 30)
p2.getpersonDetails()

const p3 = new Person("Raja", 28)
p3.getpersonDetails()