const m2 = new Map()

m2.set(1,"Automation Testing");
m2.set(2,"Developing");
m2.set(3,"Data Analyst");
m2.set(4,"API Testing");

console.log(m2)

console.log(m2.size)
console.log(m2.keys())
console.log(m2.values())
console.log(m2.get(3))
console.log(m2.has(5))
console.log(m2.has(1))
console.log(m2.has('API Testing'))

const iteration = m2.entries()
console.log(iteration.next().value)
console.log(iteration.next().value)
console.log(iteration.next().value)

console.log("=======for each=========")
m2.forEach((value, key) => {
    console.log("Key :" ,key, "Value : ",value)
})

m2.delete(1)
console.log(m2)

m2.clear()
console.log(m2)