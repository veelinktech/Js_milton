class SampleD
{
    add(a, b)
    {
        let c = a + b;

        console.log("Add result = ", c)
    }

    static mul(a, b, c)
    {
        let d = a * b * c;

        console.log('Mul result = ', d)
    }

    static m3(...args)
    {
        args += args;
        console.log("Total = "+ args)
    }
}

SampleD.mul(10,20,10)

new SampleD().add(100,50)

SampleD.m3(10,20,30,40)