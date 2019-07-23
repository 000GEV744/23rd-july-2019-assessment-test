const products=require('../Dbs/Products').products;


class Products{
    constructor(){
     this.products=products;
  }

  _all(){
      return this.products;
  }
}

module.exports.products=Products;