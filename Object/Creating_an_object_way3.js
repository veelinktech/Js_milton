console.log("====Creating an Object Constructor function====")

function Person(name, age)
{
    this.name = name;
    this.age = age;
}

let obj  = new Person("Peter", 30)
console.log(obj.name)
console.log(obj.age)