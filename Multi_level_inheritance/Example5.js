class DemoA
{
    constructor()
    {
        console.log("DemoA class constructor")
    }
}

class DemoB extends DemoA
{
    constructor()
    {
        super()
        console.log("DemoB class constructor")
    }
}

class DemoC extends DemoB{

    constructor()
    {
        super()
        console.log("DemoC class constructor")
    }
}

class DemoD extends DemoC{

    constructor()
    {
        super()
        console.log("DemoD class constructor")
    }
}

new DemoD()