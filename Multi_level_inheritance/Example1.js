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
    m3()
    {
        console.log("TestB class instance method")
    }

    static m4()
    {
        console.log("TestB class static method")
    }
}

class TestC extends TestB
{
    m5()
    {
        console.log("TestC class instance method")
    }

    static m6()
    {
        console.log("TestC class static method")
    }
}

class TestD extends TestC{

    m7()
    {
        console.log("TestD class instance method")
    }

    static m8()
    {
        console.log("TestD class static method")
    }

    get_all_method1()
    {
        this.m1()
        this.m3()
        this.m5()
        this.m7()
        TestD.m2()
        TestD.m4()
        TestD.m6()
        TestD.m8()
    }

    static get_all_method2()
    {
        const dobj = new TestD()

        dobj.m1()
        dobj.m3()
        dobj.m5()
        dobj.m7()
        TestD.m2()
        TestD.m4()
        TestD.m6()
        TestD.m8()
    }
}

const dobj = new TestD()
dobj.get_all_method1()

console.log("===========")

TestD.get_all_method2()