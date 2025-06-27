function find()
{
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let num = parseInt(input);

    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num % i == 0)
        {
            document.getElementById("output").innerHTML = num + " is not a prime number";
            return;
        }
    }
    document.getElementById("output").innerHTML = num + " is a prime number";
}