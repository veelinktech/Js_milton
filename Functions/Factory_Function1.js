function createGreetings(greeting)
{
    return function(name)
    {
        console.log(greeting+ " "+ name)
    }
}

const sayHello = createGreetings('Hello')

sayHello("Milton")