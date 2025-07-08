let n=5; 
let str = "";
for(let i=1; i<=n; i++)
{
   if(i==1 || i==5)
   {
    for(let j=1; j<=n; j++)
    {
        str+= "* ";
    }
   }
   else{
    for(let j=1; j<=5; j++)
    {
        if(j == 1|| j==5)
        {
            str+="* ";
        }
        else{
            str+= "  ";
        }
    }

   }
   str+= "\n";
}
console.log(str);
