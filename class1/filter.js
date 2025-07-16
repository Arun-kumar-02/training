const arr = [23, 12,16,85,32,42,10];

const result = arr.filter(filtering);

function filtering(age)
{
    return age < 18;
}

// console.log(arr);
// console.log(result);

const obj = [
    {pname: "tomato", price: 30},
    {pname: "potato", price: 40},
    {pname: "Ginger", price: 60}
];

const result2 = obj.filter(filter);

function filter(item){
    return obj.price <= 40;
}

console.log(result2);