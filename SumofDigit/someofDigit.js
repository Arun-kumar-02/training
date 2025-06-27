


function sum()
{
const input = document.getElementById("input").value;
const output = document.getElementById("output");
let num = parseInt(input);
    let result = 0;
    while(num != 0)
    {
        result += (num % 10);
        num =Math.floor(num/10);
    }
   document.getElementById("output").innerHTML = "answer is : "+ result;
}
