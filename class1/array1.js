person = [
    {name: "venu",
     age: 5},
     {
        name: "arun",
        age: 21
     }

]

let f=person.find(fun);

function fun(obj)
{
    return obj.age>18;
}
console.log(f);