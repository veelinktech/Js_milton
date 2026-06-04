class TestB
{
    a = 100;
    static b = 200;

    m1()
    {
       let a=10, b=20;
        console.log("Local variable a = ", a)
        console.log("Local variable b = ", b)
        console.log("Instance variable a =",this.a)
        console.log("Static variable b = ", TestB.b)
    }

    static m2()
    {
        let a = 1, b =2;

        console.log("Local variable a = ", a)
        console.log("Local variable b = ", b)
        console.log("Instance variable a =", new TestB().a)
        console.log("Static variable b = ", TestB.b)


    }
}

new TestB().m1()

console.log("==========")

TestB.m2()