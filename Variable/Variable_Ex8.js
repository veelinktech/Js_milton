const x = 100;

function add()
{
    console.log("Global variable x =", x)
}


{
    console.log("Global variable x =", x)
}

add()

console.log("Global variable x =", x)
