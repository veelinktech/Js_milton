// Object destructuring using variable

console.log("========Way1========")

let favNum1, favNum2;

({favNum1, favNum2} = {favNum1:1, favNum2:2,
    favNum3:3, favNum4:4, favNum5:5
})

console.log(favNum1, favNum2)
// console.log(favNum1, favNum2, favNum3)

console.log("======Way2======");

({favNum1, favNum2, ...othervalues} = {favNum1:100, favNum2:200,
    favNum3:300, favNum4:400, favNum5:500})

console.log(favNum1, favNum2, othervalues)

console.log("====Way3====")

const person1 = {

    firstName : 'Arun',
    lastName : 'Kumar',
    mobileno : 9837348548,
    age: 30,
    city:'Chennai'

}

const {firstName, lastName, ...remainingproperty} = person1

console.log(firstName, lastName,remainingproperty)