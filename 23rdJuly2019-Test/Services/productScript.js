function checkout(){
    const _url = 'http://localhost:1264/cart';
    fetch(_url)
        .then(data => data.json())
        .then(data2 => {
            console.log(data2);
            createTable(data2);
        })
}

//function for changing the quantity 
function changeQuantity(basePrice,i,op) {
    var quantity = parseInt(document.getElementById(`spn${i}`).innerText)
    if(op=='SUB')
    {   
        quantity--
        if(quantity<=0){
            quantity=0
        }
        
    }
    if(op=='ADD')
    { 
        quantity++
        if(quantity<=0){
           quantity=0
        }  
    }
    document.getElementById(`spn${i}`).innerText = quantity;
    document.getElementById(`totalPrice${i}`).innerText = incPrice(basePrice,quantity)
}

//function to get the total price
function incPrice(basePrice,quantity)
{   
    return basePrice * quantity
}
function createTable(data2) {
   window.location='checkOut.html'
    let rows = '';
    let i=1;
    data2.cartProducts.forEach(u => {
        rows += `<tr>
                    <td>${u.item}</td>
                    <td>${u.price}</td>
                    <td><button  onclick="changeQuantity(${u.price},${i},'SUB')">-</button><span id="spn${i}" >1</span><button  onclick="changeQuantity(${u.price},${i},'ADD')">+</button></td>
                    <td id="totalPrice${i}">${u.price}</td>
                </tr>`
                i++
    });
    const _table = `<table>
                        <tr>
                            <th>items</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total price</th>
                        </tr>
                        ${rows}
                    </table>`
    document.getElementById('products').innerHTML = _table;
}


function AddToCart(i){
//console.log(i)
const _urlFetch= 'http://localhost:1264/products'
fetch(_urlFetch)
.then(data => data.json())
.then(data2 => {
    console.log(data2);
    data2.products.forEach(u=>{
        if(u.Iid==i){
            console.log(u.name) 
            console.log(u.price) 
            saveToCartProduct(u.name,u.price); //API CALL
         }
    });
})
}



function saveToCartProduct(name,price){
    const baseUrl = 'http://localhost:1264/cart';
    // api to add my products into cart product json file 
        fetch(baseUrl+'/add',{
            method : 'POST',
            headers: {
             'content-type':'application/json'
            },
            body:JSON.stringify({
                    item : name,
                    price : price
                })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        });
    // })
}