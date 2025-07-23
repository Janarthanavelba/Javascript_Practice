const a=document.getElementById("num1");
const b=document.getElementById("num2");
const result=document.getElementById("out");
//const btn=document.getElementById("b1");
/* 
if(a.value==="" || b.value==="")
{
   if(a.value==="") return result.textContent="Please Enter 1st Number";
   else return result.textContent="Please Enter 2nd Number";
} */


function funAdd()
{
  
   if(a.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 1st Number";
      }
   else if(b.value==="")
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 2nd Number";
      }
    else
      {
   const c=Number(a.value)+Number(b.value);
   return result.textContent=c;
      }

}
function funSub()
{

    if(a.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 1st Number";
      }
   else if(b.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 2nd Number";
      }
    else
      {
         const c=Number(a.value)-Number(b.value);
   return result.textContent=c;
      }
}
function funMul()
{
   if(a.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 1st Number";
      }
   else if(b.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 2nd Number";
      }
    else
      {
    const c=Number(a.value)*Number(b.value);
   return result.textContent=c;
      }
}
function funDiv()
{
   if(a.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 1st Number";
      }
   else if(b.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 2nd Number";
      }
    else
      { 
   const c=Number(a.value)/Number(b.value);
   return result.textContent=c;
      }
}
function funMod()
{
   if(a.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 1st Number";
      }
   else if(b.value==="") 
      {
         result.style.backgroundColor="red";
         return result.textContent="Please Enter 2nd Number";
      }
    else
      { const c=Number(a.value)%Number(b.value);
   return result.textContent=c;
      }
}
