try {
    let a = 10
    let b = 0

    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }

    console.log(a / b)
}
catch(err) {
    console.log("Skip the line:", err.message)
}

finally
{
    console.log("Execution completed")
}