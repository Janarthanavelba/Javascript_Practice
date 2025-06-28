let n=Number(prompt("Enter the n"));

function printNum(n)
{
    if(n==0) return ;
    console.log(n);
    printNum(n-1);
}
printNum(n);