const user = {
    uname:"Vivke",
    email:"vivke@gmail.com",
    mobileno:938848485,
    getcustomerdetails: function(ln)
    {
        return `My firstname is ${this.uname} and my lastname is ${ln}`
    }
}

let res = user.getcustomerdetails("Kumar")
console.log(res)