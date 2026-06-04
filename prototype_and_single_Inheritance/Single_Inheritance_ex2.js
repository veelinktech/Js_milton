class TestA
{
    a = 10;
    static b = 20;

    constructor()
    {
        console.log("TestA parent class constructor")
    }

    m1()
    {
        console.log("TestA class instance method")
    }

    static m2()
    {
        console.log("TestA class static method")
    }
}


class ChildTestA extends TestA
{
    c = 30
    static d = 40;

    constructor()
    {
        super()
        console.log("ChildTestA class constructor")
    }

    m3()
    {
        console.log("ChildTestA class m3 method")
    }

    static m4()
    {
        console.log("ChildTestA class static  method")
    }

    get_all_one()
    {
        console.log("Child class instance variable = ", this.c)
        console.log("Child class static variable = ", ChildTestA.d)
        console.log("Parent class instance variable = ", this.a)
        console.log("Parent class static variable = ", ChildTestA.b)
        this.m3()
        ChildTestA.m4()
        this.m1()
        ChildTestA.m2()

    }

    static get_all_two()
    {
        const chobj = new ChildTestA()
        console.log("Child class instance variable = ", chobj.c)
        console.log("Child class static variable = ", ChildTestA.d)
        console.log("Parent class instance variable =", chobj.a)
        console.log("Parent class static variable = ", ChildTestA.b)

        chobj.m3()
        ChildTestA.m4()
        chobj.m1()
        ChildTestA.m2()
    }
}

const obj = new ChildTestA()
obj.get_all_one()
console.log("===========")
ChildTestA.get_all_two()