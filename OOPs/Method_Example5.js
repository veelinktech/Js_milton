class SampleE
{
    add(a, b)
    {
        let c = a + b;

        return c;
    }

    mul(x, y, z)
    {
        let res = x * y * z;

        return res;
    }
}

const s1 = new SampleE()

let r1 = s1.add(10,20)
let r2 = s1.mul(10,20,20)

console.log(r1)
console.log(r2)