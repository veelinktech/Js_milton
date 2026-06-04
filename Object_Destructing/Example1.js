const person = {

    firstName : 'Arun',
    lastName : 'Kumar',
    age: 30,
    city:'Chennai'

}

console.log("===Way1===")

console.log(person.firstName,person.lastName)


console.log("===Way2===")

/*const {firstName, lastName} = person;

console.log(firstName, lastName)*/

// console.log("===Way3===")

// const {firstName,lastName,mobileNo='948475485'} = person;

// console.log(firstName, lastName, mobileNo)

console.log("===Way4===")

const {firstName:fn, lastName:ln} = person;

console.log(fn, ln)