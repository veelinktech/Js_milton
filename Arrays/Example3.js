let lang = ["Javascript",'Python','Java','Kotlin','R','M','C','C#']

console.log(lang[2])

console.log("==========")

lang.forEach((e)=>{
    console.log(e)
})

console.log("=====for loop====")

for(let i=0; i<lang.length; i++)
{
    console.log(lang[i])
} 

console.log("=====for in====")

for (let i in lang)
{
    console.log(lang[i])
}

console.log("====for of=====")

for(let j of lang)
{
    console.log(j)
}