const parent = 
{
    greet()
    {
        console.log('Parent method')
    }

}

const child = Object.create(parent)

child.greet()