class SampleB
{
    m1()
    {
        console.log("Instance method1")
    }

    static m2()
    {
        console.log("Static method1")
    }

    m3()
    {
        console.log("Instance method2")
    }

    static m4()
    {
        console.log("Static method2")
    }

}

const ob1 = new SampleB()
ob1.m1()
ob1.m3()

SampleB.m2()
SampleB.m4()
