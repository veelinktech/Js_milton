class SampleA
{
    a = 10;
    static b = 20;
}

class SampleB extends SampleA{

    c = 30;
    static d = 40;
}

class SampleC extends SampleB{

    e = 50;
    static f = 60;
}

class SampleD extends SampleC{

    g =70;

    static h = 80;

    get_all_variable1()
    {
        console.log(this.a)
        console.log(this.c)
        console.log(this.e)
        console.log(this.g)
        console.log(SampleD.b)
        console.log(SampleD.d)
        console.log(SampleD.f)
        console.log(SampleD.h)
    }

    static get_all_variable2()
    {
        const dobj = new SampleD()

        console.log(dobj.a)
        console.log(dobj.c)
        console.log(dobj.e)
        console.log(dobj.g)
        console.log(SampleD.b)
        console.log(SampleD.d)
        console.log(SampleD.f)
        console.log(SampleD.h)
    }


}

const sobj = new SampleD()
sobj.get_all_variable1()
console.log("==========")
SampleD.get_all_variable2()