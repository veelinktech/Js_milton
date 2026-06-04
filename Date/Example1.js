const now = new Date()
console.log(now)

const date1 = new Date("2026-03-17")
console.log(date1)

const date2 = new Date(2026,2,18);
console.log(date2)


const today = new Date();

console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log("====Time====")
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())

console.log("========")

const d1 = new Date()

d1.setFullYear(2026)
d1.setMonth(2)
d1.setDate(18)
d1.setHours(8,8,32,341)

console.log(d1)

const d2 = new Date()

console.log(d2.toDateString())
console.log(d2.toTimeString())
console.log(d2.toLocaleDateString())
console.log(d2.toLocaleTimeString())
console.log(d2.toLocaleString())