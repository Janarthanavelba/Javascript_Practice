//Function to find prime or not
function prime(num){
  let count = 0;
  for(let i=1;i<=num;i++){
    if(num%i == 0){
      count ++;
    }
  }
  const p = count == 2 ? "prime" : "not a prime";
  return p;
  
}
console.log(prime(3));
console.log(prime(4));
console.log(prime(5));
console.log(prime(6));


//Function to reverse the number
function reverse(num){
  let rev = 0;
  while(num != 0){
    let rem = num%10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverse(192));
console.log(reverse(121));
console.log(reverse(543));
console.log(reverse(111));

//
function palindrome(num){
  let temp = num, rev = 0;
  while(temp != 0){
    let rem = temp%10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  const p = num == rev ? "Palindrome" : "Not a Palindrome";
  return p;
}
console.log(palindrome(192));
console.log(palindrome(121));
console.log(palindrome(543));
console.log(palindrome(111));

//Function to find the gcd
function gcd(n1,n2){
  let gcd = 0;
    for(let i=1;i<=n1;i++){
      if((n1%i == 0 && n2%i==0)){
        gcd = i;
      }
      
    }
    return gcd;
   
}
console.log(gcd(10,12));
