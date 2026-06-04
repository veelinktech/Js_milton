class TestA
{
    a = 100        //instance variable
    static b = 200 //static variable

    m1()
    {
        let c = 300;  //local variable
        console.log("Local variable = ",c)
        console.log("Instance variable = ",this.a)
        console.log("Static variable = ",TestA.b)
    }

    static m2()
    {
        let d = 400;
        console.log("Local variable = ", d)
        console.log("Instace variable = ", new TestA().a)
        console.log("static variable = ", TestA.b)
    }
}

new TestA().m1()

console.log("=============")

TestA.m2()