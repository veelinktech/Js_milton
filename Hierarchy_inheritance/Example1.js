class Sample
{
    a = 10;
    static b = 20;

    constructor()
    {
        console.log("Parent Sample class constructor")
    }

    m1()
    {
        console.log("Parent sample class instance method")
    }

    static m2()
    {
        console.log("Parent sample class static method")
    }
}

class childA extends Sample
{

    get_all_one()
    {
        console.log("Parent class instance variable = ", this.a)
        console.log("Parent class static variable = ", childA.b)
        this.m1()
        childA.m2()
    }

    static get_all_two()
    {
        const cha = new childA()
        console.log("Parent class instance variable = ",cha.a)
        console.log("Parent class static variable = ", childA.b)
        cha.m1()
        childA.m2()

    }
}

const cha = new childA()
cha.get_all_one()
console.log("=============")
childA.get_all_two()

class childB extends Sample
{
    x = 1000;
    static y = 2000;

    constructor()
    {
        super()
        console.log("ChildB class constructor")
    }

    m3()
    {
        console.log("ChildB class instance method")
    }

    static m4()
    {
        console.log("childB class static method")
    }

    get_all_three()
    {
        console.log("ChildB class instance variable = ", this.x)
        console.log('Parent class instance variable = ', this.a)
        console.log("ChildB class static variable = ", childB.y)
        console.log("Parent class static variable = ", childB.b)
        this.m1()
        childB.m2()
        this.m3()
        childB.m4()
    }

    static get_all_four()
    {
        const chb = new childB()
        console.log("childB class instance variable = ", chb.x)
        console.log("Parent class instance variable = ", chb.a)
        console.log("childB class static variable = ", childB.y)
        console.log("Parent class static variable = ", childB.b)
        chb.m1()
        childB.m2()
        chb.m3()
        childB.m4()
    }
}

console.log("=========childB class=========")
const chb = new childB()
chb.get_all_three()
console.log("===========")
childB.get_all_four()


class childC extends Sample
{
    a = 1
    static b = 2

    constructor()
    {
        super()
        console.log("ChildC class constructor")
    }

    m1()
    {
        console.log("ChildC class instance method")
    }

    static m2()
    {
        console.log("ChildC class static method")
    }

    get_all_five()
    {
        console.log("ChildC class instance variable = ", this.a)
        console.log("Parent class instance variable = ", new Sample().a)
        console.log("ChildC class static variable = ", childC.b)
        console.log("Parent class static variable = ", Sample.b)
        this.m1()
        super.m1()
        childC.m2()
        Sample.m2()
    }

    static get_all_six()
    {
        const chc = new childC()
        console.log("childC class instance variable = ", chc.a)
        const sm = new Sample()
        console.log("Parent class instance variable = ", sm.a)
        console.log("childC class static variable = ", childC.b)
        console.log("Parent class static variable = ", Sample.b)
        chc.m1()
        sm.m1()
        childC.m2()
        Sample.m2()
    }
}

console.log("==============childC class==============")
const s1 = new childC()
s1.get_all_five()
console.log("=========")
childC.get_all_six()
