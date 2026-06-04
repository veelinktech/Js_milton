
class Sample
{
    add()
    {
        console.log("no parameter")
    }

    add(a)
    {
        console.log(a)
    }

    add(a, b)
    {
        console.log(a+b)
    }

    add(a, b, c)
    {
        console.log(a+b+c)
    }
}

const s = new Sample()

s.add()

s.add(10)

s.add(10, 20)

// class method can't overload