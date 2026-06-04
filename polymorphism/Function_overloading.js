function add(a=null, b=null, c=null, d=null)
{
    if(a!=null && b!=null && c != null && d != null)
    {
        console.log(a+b+c+d);
    }

    else if(a!=null && b!=null && c!=null)
    {
        console.log(a+b+c)
    }

    else if(a!=null && b!=null)
    {
        console.log(a+b)
    }

    else if(a!=null)
    {
        console.log(a)
    }

    else
    {
        console.log("No parameter")
    }
}

add()
add(10)
add(10,20)
add(10,20,30)
add(10,20,30,40)

