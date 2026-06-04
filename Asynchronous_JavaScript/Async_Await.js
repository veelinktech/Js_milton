// function fetchData()
// {
//     new Promise((resolve) =>{
//         setTimeout(()=>{resolve("Data Received")})
//     }, 3000)
// }

// async function getData() {

//     const data = await fetchData();
//     console.log(data)
    
// }


// getData()




function fetchData()
{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data Received")
        }, 3000)
    })
}

async function getData() {
    const data = await fetchData();
    console.log(data)
}

getData()