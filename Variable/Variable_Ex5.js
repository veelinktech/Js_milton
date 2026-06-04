var x = 100; //global variable

function add()
{
    var y = 200; //local variable
}

{
    var z = 300; //local variable
}

console.log("Global variable = ", x)
//console.log("Local variable y ", y)
console.log("Local variable z =", z)

// var :
//  inside the function variable --> outside the function can't access
//  inside the block variable --> outise the block we can access