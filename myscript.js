$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function getHistory(){
    return document.getElementById("history-value").innerText;

}
function prinHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("out-value").innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num == ""){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operation = document.getElementsByClassName("operation");
for(var i = 0; i < operation.length; i++){
    operation[i].addEventListener("click", function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }else{
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if(output != "" || history != ""){
                output = output == ""?
                output:reverseNumberFormat(output);
                history = history+output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}