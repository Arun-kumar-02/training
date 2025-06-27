function find()
{
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let num = parseInt(input);
    let n = num;
    let result = 0;
    while(n > 0 )
    {
        let rem = n%10;
        result = result*10 + rem;
        n=Math.floor(n/10); 
    }
    if(num === result)
    {
        document.getElementById("output").innerHTML = num + " is a palindrome";
    }
    else{
        document.getElementById("output").innerHTML = num + " is not a palindrome";
    }
}