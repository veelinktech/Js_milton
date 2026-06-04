function add()
{
    console.log("Normal function")

}

add()

let sub = function()
{
    console.log("Anonymous function")
}

sub()

let mul = ()=>{

    console.log("Arrow function")
}

mul()


function add1(a, b)
{
    console.log(a + b)
}


let sub1 = function(x, y)
{
    console.log(x - y)
}

let mul1 = (a, b)=>{
    console.log(a * b)
}

add1(10,20)
sub1(100,80)
mul1(10,6)