let CartProducts=require('../Dbs/cartProducts').cartProducts;


class Cartproducts{
    constructor(){
     this.Cartproducts=CartProducts;
  }
  _all(){
      return this.Cartproducts;
  }

  //adding item into the cart - detecting duplicates inside the cart items 

  _add(cart){ 
    let flag = 0
    console.log(this.Cartproducts.length)
      if(this.Cartproducts.length>0){
       this.Cartproducts.forEach(key=>{
        if(key.item===cart.item){ 
            console.log("inside if")
            console.log(cart.item)
            console.log(key.item)
            flag =1
        }
        });
    }
    if (flag == 1)
    {
        return this.Cartproducts;
    } 
    else { 
        console.log("outside if")
        this.Cartproducts.push(cart)
        return this.Cartproducts;

    }
    //if there is no duplication then add the itme into the cart product dataabse
        
    }   
   
}

module.exports.Cartproducts=Cartproducts;