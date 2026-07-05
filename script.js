const textbox=document.getElementById("textbox");
const operators=document.querySelectorAll(".operator");
const numbers= document.querySelectorAll(".number");
const result=document.getElementById("result");
const clear=document.getElementById("clear");
textbox.value="";
let firstnum="";
let selectedoperator="";
let secondnum="";
numbers.forEach(number=>{
    number.addEventListener("click",function(){
    textbox.value=textbox.value + number.textContent;
    })
});

operators.forEach(operator=>{
    operator.addEventListener("click",function(){
            firstnum=textbox.value;
            selectedoperator=operator.textContent;
            textbox.value="";
        })
    });
clear.addEventListener("click",function(){
    firstnum="";
    secondnum="";
    selectedoperator="";
    textbox.value="";
  
    })

result.addEventListener("click",function(){

secondnum=textbox.value;
textbox.value="";
switch(selectedoperator){
    case "+":
        textbox.value=Number(firstnum)+Number(secondnum);
        break;
     case "-":
        textbox.value=Number(firstnum)-Number(secondnum);
        break;        
    case "*":
        textbox.value=Number(firstnum)*Number(secondnum);
        break;
        
    case "/":
        textbox.value=Number(firstnum)/Number(secondnum);
        break;
}
});
