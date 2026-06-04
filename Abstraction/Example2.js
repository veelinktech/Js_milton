class ATM
{
    withdraw(amt)
    {
        this.#processTransaction(amt)
    }

    #processTransaction(amount)
    {
        console.log("Withdraw amount = "+ amount)
    }
}

const atm = new ATM()
atm.withdraw(5000)
