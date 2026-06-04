{
    var x=10;
    let y=20;
    const z=30;
    console.log("with in the block",x)
    console.log("with in the block",y)
    console.log("with in the block",z)
   
}

{

    console.log("another block", x)
    //console.log(y) -->can't access
    //console.log(z) --> can't access

}

function add()
{
    console.log(x)
}

console.log('+++++++++')
console.log(x)
console.log("++++++++++++")
add()

// var       