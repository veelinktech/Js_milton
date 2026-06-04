//public, private, protected

class TestA
{
    name1 = "Milton"; //public variable

    getName()
    {
        console.log(this.name1)
    }
}

const t = new TestA()
t.getName()
console.log(t.name1)

console.log("====Private====")

class TestB
{
    #name2 = "Raja";  //private

    getName2()
    {
        console.log(this.#name2)
    }
}

const tb = new TestB()
tb.getName2()
// console.log(tb.#name2) //outside the class can't access