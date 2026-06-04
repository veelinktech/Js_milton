class TestA
{
    m1()
    {
        console.log("TestA class instance method")
    }

    static m2()
    {
        console.log("TestA class static method")
    }
}

class TestB extends TestA
{
    m1()
    {
        console.log("TestB class instance method")
    }

    static m2()
    {
        console.log("TestB class static method")
    }
}

class TestC extends TestB
{
    m1()
    {
        console.log("TestC class instance method")
    }

    static m2()
    {
        console.log("TestC class static method")
    }
}

class TestD extends TestC{

    m1()
    {
        console.log("TestD class instance method")
    }

    static m2()
    {
        console.log("TestD class static method")
    }

    get_all_method1()
    {
        this.m1()
        super.m1()
        const bobj = new TestB()
        bobj.m1()
        const aobj = new TestA()
        aobj.m1()

        TestD.m2()
        TestC.m2()
        TestB.m2()
        TestA.m2()
    }

    static get_all_method2()
    {
       new TestD().m1()
       new TestC().m1()
       new TestB().m1()
       new TestA().m1()
       TestD.m2()
       TestC.m2()
       TestB.m2()
       TestA.m2()

    }

}

const dobj = new TestD()

dobj.get_all_method1()

console.log("===========")

TestD.get_all_method2()