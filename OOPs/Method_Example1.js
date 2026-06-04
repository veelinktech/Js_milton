class SampleA
{
    m1()
    {
        console.log("Instance method")
    }

    static m2()
    {
        console.log("Static method")
    }
}

new SampleA().m1()  //name less object

const obj = new SampleA() //named object

obj.m1()

SampleA.m2()  //class name 


//instance method to static method or static area --> object

//static method to static method or static area --> class name