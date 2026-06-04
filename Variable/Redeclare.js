console.log("=====Var Keyword=====")

var a ="Java";
console.log(a)
var a = 1000;
console.log(a)

console.log("=====let Keyword=====")

let x ="Java";
console.log(x)
/*let x = 1000;
console.log(x)*/

cconsole.log("=====Const Keyword=====")

const y ="Java";
console.log(y)
/*const y = 1000;
console.log(y)*/


//               reinitialization         redeclare

//   var             yes                     yes
//   let             yes                     no
//   const           no                      no


let a = 10, b=20;

console.log(a) //10
console.log(b) //20



console.log(a) //20
console.log(b) //10