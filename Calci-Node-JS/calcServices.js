class Calculator{
    
    _add(obj){
        return obj.num1+obj.num2;
    }
    _sub(obj){
        return obj.num1-obj.num2;
    }
    _div(obj){
        return obj.num1/obj.num2;
    }
    _mul(obj){
        return obj.num1*obj.num2;
    }
    _pow(obj){
        let result=1;
        for(var i=1; i<=obj.num2; i++) {
            result = result * obj.num1 ;
        }
        return result;
    }
    _sqrt(obj){
     let a= Math.sqrt(obj);
     let result= Math.round(a);
     return result;
    }
}

module.exports.CalculatorServices=Calculator;