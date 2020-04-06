var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var from = document.getElementById("xiswhatpersenofy");

from.addEventListener('submit',function(event){
if (!num1.value || !num2.value){
    alert("plase enter number");
}else{
    var x =Number(num1.value);
    var y = Number(num2.value);
    var last_result  = x/y;
    var persen = last_result*100;
    result.innerText = "Answer is "+persen+" %";
    event.preventDefault();

}
}); 