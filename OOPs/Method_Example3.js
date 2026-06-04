class SampleC
{
    m1()
    {
        console.log("Instance method1")
        this.m3()
    }

    static m2()
    {
        console.log("Static method1")
        SampleC.m4()
    }

    m3()
    {
        console.log("Instance method2")
        SampleC.m2()
    }

    static m4()
    {
        console.log("Static method2")
    }

}

new SampleC().m1()

//instance method to instance method --> this

//static method to instance method --> class name

//static method to static method --> class name

//instance method to static method --> Object