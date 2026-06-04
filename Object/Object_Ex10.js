const person1 = {pname:"Arun", age:25, city:'Bangalore'}
const person2 = {pname:"Kavyaa", age:27, city:'Chennai'}
const person3 = {pname:"Surya", age:29, city:'Vellore'}


function getpdetails(person = {pname:'default', age:'default', city:'default'})
{
    console.log("Person name = ", person.pname)
    console.log("Person age = ", person.age)
    console.log("Person city = ", person.city)
}

getpdetails()
console.log("===========")
getpdetails(person1)
console.log("===========")
getpdetails({pname:"Ragul", age:23,city:"Bangalore"})
console.log("===========")
getpdetails(person2)
console.log("===========")
getpdetails(person3)