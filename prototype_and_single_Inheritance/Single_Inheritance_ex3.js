class DemoA
{
    a = 100;
    static b = 200;

   

    constructor()
    {
        this.x = this.a
        console.log("Parent class constructor")
    }
    
     getA()
    {
        return this.x;
    }

    m1()
    {
        console.log("Parent class instance method")
    }

   static m2()
   {
    console.log("Parent class static method")
   }

}

class ChildDemoA extends DemoA
{
    a = 1000;
    static b = 2000;


    constructor()
    {
        super()
        console.log("Child class constructor")
    }

    m1()
    {
        console.log("Child class instance method")
    }

    static m2()
    {
        console.log("Child class static method")
    }

    get_all_one()
    {
        console.log("child class instance variable = ", this.a)
        console.log("parent class instance variable = ", super.getA())
        console.log("child class static variable = ", ChildDemoA.b)
        console.log("parent class static variable = ",DemoA.b)
        this.m1()
        super.m1()
        ChildDemoA.m2()
        DemoA.m2()
    }

    static get_all_two()
    {
        const chobj = new ChildDemoA()
        console.log("Child class instance variable = ", chobj.a)
        const probj = new DemoA()
        console.log("Parent class instance variable = ", probj.a)
        console.log("Child class static variable = ", ChildDemoA.b)
        console.log("Parent class static variable = ", DemoA.b)

        chobj.m1()
        probj.m1()
        ChildDemoA.m2()
        DemoA.m2()

    }

}

const obj = new ChildDemoA()
obj.get_all_one()
console.log("===========")
ChildDemoA.get_all_two()