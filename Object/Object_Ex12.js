/*function getPerson(firstName, lastName)
{
    let fullName = firstName + lastName;

    return fullName;
}

let result = getPerson("Raja","M")

console.log("Full Name = ", result)*/


function getPerson(firstName, lastName)
{
    const fullName = {fn:firstName, ln:lastName}
    return fullName;
}

let result = getPerson("Raj","Kumar")
console.log("Get Name = ", result)