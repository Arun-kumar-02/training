function check()
{
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let result = 0;
    let num = input;
    while(num > 0)
    {
        let rem = num%10;
        result = result*10 + rem;
        num = Math.floor(num/10);
    }
    
    document.getElementById("output").innerHTML ="reversed number is : " + result;

}
  