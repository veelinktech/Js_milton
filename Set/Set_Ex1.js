console.log("====Way1====")
const s1 = new Set(["Jan","Feb","Mar","Apr","May"])
console.log(s1)
console.log(typeof s1)


console.log("====Way2====")
const s2 = new Set()
s2.add("JS")
s2.add("Python")
s2.add("Playwright")
s2.add('Java')
s2.add("Git")
console.log(s2)

console.log("====Way3=====")

let x1 = "a", x2="b", x3="c", x4="d"

const s3 = new Set()

s3.add(x1)
s3.add(x2)
s3.add(x3)
s3.add(x4)
console.log(s3)