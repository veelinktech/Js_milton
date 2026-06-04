const s1 = new Set(["Jan","Feb","Mar","Apr","May"])

console.log(s1.size)
console.log(s1.has("Feb"))
console.log(s1.has("Dec"))
console.log("=============")
s1.forEach((e)=>console.log(e))

const it = s1.entries()

for(let i of it)
{
    console.log(i)
}

let res1 = "  ";

for(let i of s1.entries())
{
    res1 += i;
}

console.log(res1)

console.log("============")

let res2 = s1.values()
console.log(res2.next().value)
console.log(res2.next().value)
console.log(res2.next().value)

console.log("==========")

let res3 = s1.keys()
console.log(res3.next().value)
console.log(res3.next().value)
console.log(res3.next().value)

console.log("==========")

console.log(s1)
s1.delete("Mar")
console.log(s1)

console.log("========")

console.log(s1)

s1.clear()
console.log(s1)

