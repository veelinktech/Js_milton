class Vehicle
{
    constructor()
    {
        if(this.constructor === Vehicle)
        {
            throw new Error("Cannot create instance of abstract class")
        }
    }

    startEngine()
    {
        throw new Error("Method 'startEngine()' must be implement");
    }
}

class car extends Vehicle
{
    startEngine()
    {
        console.log("Car engine started")
    }
}

const myCar = new car();
myCar.startEngine()

// const v = new Vehicle();