const products = [
    {
        name: "Wireless Mouse",
        price: 799,
        color: "Black",
        brand: "Logitech"
    },
    {
        name: "Bluetooth Headphones",
        price: 1999,
        color: "Blue",
        brand: "Boat"
    },
    {
        name: "Smartwatch",
        price: 2499,
        color: "Grey",
        brand: "Noise"
    },
    {
        name: "USB-C Charger",
        price: 1499,
        color: "White",
        brand: "Samsung"
    }
];


const generateCard=document.getElementById("genCard");


generateCard.addEventListener('click',()=>{

    const con=document.getElementById("container");

    let cards="";

    products.forEach((pro,i)=>{

        cards=cards+`
        <div id="container">
        <button onclick='remove(event)' >Remove</button>
        <p>Name : ${pro.name}</p>
        <p>Price : ${pro.price}</p>
        <p>Color : ${pro.color}</p>
        <p>Brand : ${pro.brand}</p>
        <br>
        </div>
        `;
    })

    con.innerHTML = cards;

});

function remove(event)
{  
    
}
