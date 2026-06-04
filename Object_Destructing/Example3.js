// Object destructuring using functions

const user1 = {
    uid : 1,
    uname : 'Ram',
    contact_no:9338484959,
    area:'porur',
    city : 'chennai'
}

const user2 = {
    uid : 2,
    uname : 'Kavitha',
    contact_no:7364745848,
    area:'porur',
    city : 'chennai'
}


function displayUser(userObj)
{
    console.log(`Hello my name is ${userObj.uname} and my 
        userid is ${userObj.uid} and my contact_no 
        is ${userObj.contact_no}`)
}

displayUser(user1)

console.log("=============")

displayUser(user2)