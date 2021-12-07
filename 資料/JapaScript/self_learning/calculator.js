var num_list = [];
var mark = ['+', '-', '*', '/'];
var i = 0;
var n1=0, n2=0;

calc = function(){
    n1 = num1.value;
    n2 = num2.value;

    switch (button2.value){
        case '+':return String(Number(n1)+Number(n2));
        case '-':return String(Number(n1)-Number(n2));
        case '*':return String(Number(n1)*Number(n2));
        case '/':return String(Number(n1)/Number(n2));
    }
}

result = function(){
    result = document.getElementById("result");
    result.value = calc();

    }
mark_ch = function(){
    button2.value = mark[i%4];

    i+=1
    }

button1 = document.getElementById("calc");
button2 = document.getElementById("mark");
num1 = document.getElementById("first_num")
num2 = document.getElementById("second_num")
button1.onclick = result;
button2.onclick = mark_ch;