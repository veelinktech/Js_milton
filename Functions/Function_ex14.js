// inner function

function getName(fn, ln)
{
    function combineName(n1, n2)
    {
        const name = n1 + n2;

        return name;
    }

    const fullName = combineName(fn, ln)
    console.log("Full Name = ", fullName)
}

getName("Raj", "Kumar")