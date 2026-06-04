function add()
{
    console.log("Add result = ", 10+5)
}

function sub()
{
    add()
    console.log("Sub result = ", 10-5)
    
}

function mul()
{
    sub()
    console.log("Mul result ", 10*5)
}

function div()
{
    mul()
    console.log("Div result = ", 10/5)
}

div()