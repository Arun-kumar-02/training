const arr = [20, 18, 12, 10, 23, 25,54];

const filter_arr = filters(arr, callback);

console.log(arr);
console.log(filter_arr);

function filters(arr, check){
    const result = [];

   for(let i=0; i<arr.length; i++)
   {
    if(check(arr[i]))
    {
        result.push(arr[i])
    }
   }
   return result;
}

function check(i){
    return i>=18;
}

