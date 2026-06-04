function add(a, b)
{
    let c = a + b;

    console.log("Add result =", c)
}

function sub(x, y)
{
    let z = x - y
    console.log("Sub result =", z)
}

function mul(a, b, c, d)
{
    let res = a * b * c * d;
    console.log("Mul result =", res)
}

function div(x, y)
{
    let z = x / y;
    console.log("Div result =", z)
}

function addition(a=10, b=20)
{
    let c = a+b;
    console.log("Addition result =", c)
    console.log(a)
    console.log(b)
}

add(10,45)
mul(10,20, 30, 40)
div(1000,25)
mul(10,10,25,25)
sub(100,45)
console.log("==========")
addition()
console.log("==========")
addition(35,68)
console.log("==========")
addition(50)