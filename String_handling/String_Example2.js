let st1 = "javascript";
let st2 = "PLAYWRIGHT";
let st3 = "\uD800";
let st4 = "javascriptplaywright";
let st5 = "java python java";
let st6 = "     javascript     ";
let st7 = "Javascript+playwright+selenium+pom+git+github"

console.log(st1.length)
console.log(st1.toUpperCase())
console.log(st2.toLowerCase())
console.log(st1.charAt(7))
console.log(st1.at(7))
console.log(st1.at(-3))
console.log(st1.charCodeAt(0))
console.log(st1.codePointAt(0))
console.log(st1.concat(st2))
console.log(st1.endsWith("pt"))
console.log(st1.endsWith('st'))
console.log(st1.startsWith("ja"))
console.log(st1.startsWith("Ja"))
console.log(st1.includes("scri"))
console.log(st1.includes('scr',4))
console.log(st1.isWellFormed())
console.log(st3.isWellFormed())
console.log(st1.indexOf('v'))
console.log(st4.length)
console.log(st4.indexOf('i'))
console.log(st4.indexOf('i',10))

console.log(st4.lastIndexOf('a'))
console.log(st4.lastIndexOf('a',10))

console.log(st4.slice(10,20))
console.log(st4.replace("javascript","python"))
console.log(st5.replaceAll("java", "JavaScript"))
console.log(st1.repeat(3))
console.log(st1.padStart(15))
console.log(st1.padEnd(15))
console.log(st6.trim())
console.log(st6.trimStart())
console.log(st6.trimEnd())
console.log(st7)

//console.log(st7.split(','))
console.log(st7.split('+'))
console.log(st7.split('+',3))

let x1 = "banana"
let x2 = "apple"
let x3 = "banana"

console.log(x1.localeCompare(x2))
console.log(x1.localeCompare(x3))
console.log(x2.localeCompare(x1))



