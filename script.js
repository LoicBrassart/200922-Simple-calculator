
function cal(ope1, operator, ope2) {
    ope1=parseInt(ope1);
    ope2=parseInt(ope2);
    
    switch(operator){
        case "+":
            return ope1+ope2;
        case "-":
            return ope1-ope2;
        case "*":
            return ope1*ope2;
        case "/":
            if(ope2!==0)
                return ope1/ope2;
            return "Invalid operand ! CANNOT DIVIDE BY 0 !!!"
        default:
            return "Invalid operator!"
    }
}

const formCalc = document.getElementById("form1");
const ope1=document.getElementById("val1");
const ope2=document.getElementById("val2");
const operator=document.getElementById("ope");
const resSpan = document.getElementById("res");

formCalc.addEventListener("submit", function() {
    const res = cal(ope1, operator, ope2);
    resSpan.innerHTML=res;
})


