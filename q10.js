let a=Number(prompt("Enter the a"));
let b=Number(prompt("Enter the b"));

function operate(a,b,add)
{
    return add(a,b);
}
function add(a,b)
{
    return a+b;
}
console.log(operate(a,b,add));
