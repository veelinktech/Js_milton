console.log("====Using Literal Way1=====")
const person = {

    Name:"Ram",
    Age:35,
    MobileNo:9837384950
}

console.log(typeof person)
//Accessing property
console.log(person)

console.log(person.Name)
console.log(person['MobileNo'])



console.log("====Using Literal Way2=====")

const customer = {};

console.log(customer)

customer.cName = "Ramesh";
customer.cMobileno = 94837373747,
customer.gender = 'Male',
customer.city = 'Chennai',
customer.pincode = 600001

console.log(customer)
