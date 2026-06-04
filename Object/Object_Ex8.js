const customer1 = {
    cid:1,
    cname:"Milton",
    city:"Chennai"
}

const customer2 = {
    cid:2,
    cname:"Vignesh",
    city:"Chennai"
}

function cdetails(id, name, city)
{
    console.log("Customer id = ", id);
    console.log("Customer name =", name);
    console.log("Customer city =", city);
}

cdetails(customer1.cid, customer1.cname,customer1.city)
console.log("==============")
cdetails(customer2.cid, customer2.cname,customer2.city)