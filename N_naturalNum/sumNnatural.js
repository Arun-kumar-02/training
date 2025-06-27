
function Nsum(){

    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let num = parseInt(input);
    let result = 0;

    for(let i=1; i<=num; i++)
    {
        result +=i;
    }
    document.getElementById("output").innerHTML =result;
}
