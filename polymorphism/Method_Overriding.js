class RBI
{
    getRateofInterest(rate)
    {
        console.log("RBI interest rate = ", rate ,"%")
    }
}

class HDFC extends RBI
{

    getRateofInterest(rate)
    {
        console.log("HDFC interest rate = ", rate+2.25 ,"%")
    }

}

class SBI extends RBI{

    getRateofInterest(rate)
    {
        console.log("SBI interest rate = ", rate+2.75 ,"%")
    }
}

class IOB extends RBI
{
    getRateofInterest(rate)
    {
        console.log("IOB interest rate = ", rate + 3.0 ,"%")
    }
}

const r = new SBI()
r.getRateofInterest(5.5)

const r1 = new HDFC()
r1.getRateofInterest(5.5)

const r2 = new IOB()
r2.getRateofInterest(5.5)