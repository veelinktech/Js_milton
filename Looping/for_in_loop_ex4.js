// Object, array, string
const user = {

    uname: "Ram",
    age : 25,
    mobile : 9484954940,
    city : 'Chennai'
}

console.log("=======Ex1========")

for(let i in user)
{
    console.log(user[i])
}

console.log("========Ex2==========")

let lang = ['JavaScript', 'Java', 'Python','Perl','Php']

for(let j in lang)
{
    console.log(lang[j])
}

console.log("========Ex3==========")

let str = "Milton";

for(let k in str)
{
    console.log(str[k])
}