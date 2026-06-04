const lang=["js","python"]
const automation = ["Cypress",'Playwright', "Selenium"]

console.log(lang.length)
console.log(lang)
lang.push("java")
console.log(lang)
lang.push("C","C++","Kotlin")
console.log(lang)
console.log(automation)

technology = lang.concat(automation)
console.log(technology)

console.log("==================")

lang.forEach((item)=>console.log(item))

console.log("======Join=======")

let x1 = ["A", "B","C","D","E"]


console.log(x1.join())
console.log(x1.join(""))
console.log(x1.join(":"))
console.log(x1.join("-"))

console.log("==========")

console.log(lang)

console.log(lang.slice(2,6))
console.log(lang.slice(1,5))

console.log("===========")
console.log(lang)

console.log(lang.at(4))
console.log(lang.at(-2))

console.log("========")

let x3 = [28,20,25,12,34,36,32,10]

let res = (e) => e < 40

console.log(x3.every(res))

let x4 = [48,40,55,72,44,66,82,60]

let res1 = (e) => e > 40

console.log(x4.every(res1))

console.log("===========")
console.log(lang)

let b1 = lang.entries()
console.log(b1.next().value)
console.log(b1.next().value)
console.log(b1.next().value)

console.log("============")
console.log(lang)
lang.fill('Playwright', 2,5)
console.log(lang)
console.log("===============")

console.log(x4.find((e)=> e > 70))

console.log(x3.find((i) => i < 18))

console.log("=============")

console.log(lang)

console.log(lang.filter((e)=>e.length>6))

console.log(x4.findIndex((e)=>e>75))

console.log(x4.findLast((e)=>e > 62))

console.log(x4.findLastIndex((e)=>e > 63))

let x5 = ["A", "B","C","D","E", "F","G","H","I","J"]

//console.log(x5.copyWithin(0,4))

console.log(x5.copyWithin(2,4,7))

let x6 = [1,2,3,[4,5]]

console.log(x6)

console.log(x6.flat())

let x7 = [0, 1, [2, [3, [4, 5]]]];

console.log(x7)

console.log(x7.flat())
console.log(x7.flat(2))
console.log(x7.flat(3))

let x8 = [1,2,3,4,5]

console.log(x8)

console.log(x8.map((e)=>e*3))

let x9 = [1,2,3,4,5,6,7,8,9,10]

console.log(x9)

console.log(x9.flatMap((e)=> e === 2 ? 10 : 1))

let x10 = ["Js",'Playwright','Java','Js','git','js']
console.log(x10.includes('Js'))
console.log(x10.includes("Js", 4))

console.log(x10.indexOf('Js'))

console.log(x10.indexOf("Js", 2))

console.log(x10.lastIndexOf('Js'))

console.log(x10.lastIndexOf("js", 3))

const a1 = new Map();

a1.set(1,"JavaScript")

a1.set(2,"Java");

a1.set(3,"Python")

console.log(a1.keys())

console.log(x10)

console.log(x10.pop())

console.log(x10)

let arr1 = [10,20,30,40]

const iniValue=0;

const sumValue = arr1.reduce((x,y)=> x+y+iniValue)

console.log(sumValue)

let arr2 =[ [0,1],[2,3],[4,5],[6,7]] 

const sum = arr2.reduceRight((x,y)=>x+y)

console.log(sum)

console.log(arr1.reverse())

console.log(arr1)

console.log(arr1.shift())

console.log(arr1)

let arr3 = [0,2,4,6] 

const odd = (e)=> e % 1 !== 0

console.log(arr3.some(odd))

let arr4 = ["Python","JavaScript","Angular","React","Playwright","Git"]

console.log(arr4.sort())

console.log(arr4)

arr4.splice(2,0,"Github")

console.log(arr4)

arr4.splice(5,1,"Vue")

console.log(arr4)

arr4.splice(5,2,"Vue.js")

console.log(arr4)

let arr5 = [1,2,"js", new Date("21 Dec 1997 14:12:00 UTC")]

console.log(arr5.toLocaleString("en",{timeZone:"UTC"}))


console.log(arr3.toReversed())

let ar1 = [9,5,1,3,6,4,8]
console.log(ar1.toSorted())

let ar2 = ["Jan","Feb","Apr"]

console.log(ar2.toSpliced(2,0,"Mar"))

console.log(ar2.toSpliced(1,1,"Dec"))

console.log(ar2.toSpliced(1,1,"Feb","Mar"))

let ar3 = [1,2,"Js","Java"]
console.log(ar3.toString())

console.log(ar3.unshift(3,4))

console.log(ar3)

let temp = ar3.values()

for(let i of temp)
{
    console.log(i)
}

console.log(ar3)

console.log(ar3.with(5,"Python"))

