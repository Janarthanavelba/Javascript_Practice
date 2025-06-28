let a=Number(prompt("Enter the a"));

function applyTwice(double,a)
{
    return double(a)*2;
}
function double(a)
{
    return a*2;
}
console.log(applyTwice(double,a));