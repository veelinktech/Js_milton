const car1 = {carName:"Kia", model:"Seltos", mfy:2026}
const car2 = {carName:"MG", model:"Winsor", mfy:2026}
const car3 = {carName:"Tata",model:"Nexon", mfy:2025}

function getCarDetails(...arg)
{
    
    arg.forEach((e)=>{

        console.log("carName = ", e.carName)
        console.log("Car model =",e.model)
        console.log("Car Myf = ", e.mfy)
        console.log("=============")
    })
}

getCarDetails(car1, car2, car3)