let CartProducts=require('../Dbs/cartProducts').cartProducts;


class Cartproducts{
    constructor(){
     this.Cartproducts=CartProducts;
  }
  _all(){
      return this.Cartproducts;
  }
  _add(cart){
      this.Cartproducts.push(cart)
      return this.Cartproducts;
  }
}

module.exports.Cartproducts=Cartproducts;