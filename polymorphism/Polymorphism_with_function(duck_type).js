class Bird
{
    fly()
    {
        console.log('Bird flies')
    }
}

class Flight
{
    fly()
    {
        console.log("Flight flies")
    }
}

class Helicopter
{
    fly()
    {
        console.log("Helicopter flies")
    }
}

function startFly(obj)
{
    obj.fly()
}

const b = new Bird()
const f = new Flight()
const h = new Helicopter()

startFly(h)
startFly(b)
startFly(f)