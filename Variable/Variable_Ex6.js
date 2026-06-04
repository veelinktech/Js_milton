let x = 100; //global variable

function add()
{
    let y = 200; //local variable
}

{
    let z = 300; //local variable
}

console.log("Global variable = ", x)
// console.log("Local variable y= ", y)
console.log("Block variable z =", z)

// let :
//  inside the function variable --> outside the function can't access
//  inside the block variable --> outise the block can't access