let n= prompt("Enter the Name:");

function createGreeting(says,n)
{
    return says(n);
}
function says(n)
{
    return "Hello "+n;
}
console.log(createGreeting(says,n));