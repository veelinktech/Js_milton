const person1 = {pname:"Arun", age:25, city:'Bangalore'}
const person2 = {pname:"Kavyaa", age:27, city:'Chennai'}
const person3 = {pname:"Surya", age:29, city:'Vellore'}


function getPersonDetails(person)
{
    console.log("Person name = ", person.pname);
    console.log("Person age = ", person.age);
    console.log("Person city =", person.city)

}

getPersonDetails(person1)
console.log("=========")
getPersonDetails(person2)
console.log("=========")
getPersonDetails(person3)