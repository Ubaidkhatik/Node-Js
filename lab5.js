const MathModule = (() =>{

    function Addition(a,b){
        return a+b;
    }
    function Substraction(a,b){
         return a-b;
    }
    function Multiplication(a,b){
        return  a*b;
    }
    function Division(a,b){
        if(b===0){
            console.log("Not Divisible by 0")
        }
        return a/b;
    }
    return{
        Addition,
        Substraction,
        Multiplication,
        Division
    };

})();
const num1 =parseFloat(process.argv[2]);
const num2=parseFloat(process.argv[3]);
if(isNaN(num1) || isNaN(num2)){
    console.log("Please Enter two numbers ");
    console.log("Example: node mathApp.JS 20 10");
    process.exit(1);
}
console.log("Addition:", MathModule.Addition(num1,num2));
console.log("Substraction:", MathModule.Substraction(num1,num2));
console.log("Multiplication:", MathModule.Multiplication(num1,num2));
console.log("Division:", MathModule.Division(num1,num2));