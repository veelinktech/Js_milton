const m1 = new Map()

m1.set(1,"Js");
m1.set(2,"Python");
m1.set(3,"Java");
m1.set(4,"TypeScript");
m1.set(5,"Kotlin")

console.log(m1)

console.log("=====for of======")

for(let [k, v] of m1)
{
    console.log(k,"***", v)
}

console.log("=========")

for(let k of m1)
{
    console.log(k)
}

console.log("===========")

for(let i of m1.keys())
{
    console.log(i)
}

console.log("===========")

for(let i of m1.values())
{
    console.log(i)
}