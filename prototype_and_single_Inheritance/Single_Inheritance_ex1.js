class ParentA
{
    a = 10;

    static b = 20;

    constructor()
    {
        console.log('Parent class constructor')
    }

    m1()
    {
        console.log("Instance method")
    }

    static m2()
    {
        console.log("Static method")
    }
}

class childA extends ParentA
{
     

    getParentProperty()
    {

        console.log("Parent class variable = ", this.a)

        console.log("Parent class static variable = ", childA.b)

        this.m1()

        childA.m2()
    }

    static getparentProperty1()
    {
       console.log("Parent class variable = ",new childA().a)
       console.log("Parent class static variable",childA.b)

       new childA().m1()
       childA.m2()

    }
}


new childA().getParentProperty()
console.log("=========")
childA.getparentProperty1()