let lang = new Array(10, 20, 300, 400, 500);

console.log(lang)

console.log("===Access array specife element===")

console.log(lang[3])

console.log("====Accessing all elements====")

lang.forEach((e)=>{
    console.log(e)
})

console.log("=====for loop====")

for(let i=0; i<lang.length; i++)
{
    console.log(lang[i])
}

console.log("====for in=====")

for(let j in lang)
{
    console.log(lang[j])
}

console.log("====for of====")

for(let k of lang)
{
    console.log(k)
}