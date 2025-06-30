//Write a program to print the multiplication table of a number.
let num=5;
let n=10;
for(let i=1;i<=n;i++)
{
    console.log(num+" * "+i+" = "+num*i);
}

//Write a program to find the power of a number using recursion.
let num=5;
let p=3;
let res=1;
function power(num,p)
{
    if(p==0) return 1;
    return num*power(num,p-1);
   
}
 console.log(power(num,p));

//Write a program to find the largest of three numbers.
let a=30;
let b=30;
let c=122;

if(a>b && a>c)  console.log("a is greater");
else if(b>a && b>c)  console.log("b is greater");
else  console.log("c is greater");
