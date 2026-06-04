function createUser(name, age, city)
{
    return 
    {
        name, age, city,
        greetings()
        {
            return `Hi, My Self ${this.name} and my age is ${this.age} and
            my city is ${this.city};`
        }

    };
}

const obj = createUser("Rajesh", 27, "Chennai")
console.log(obj)
console.log(obj.greetings())