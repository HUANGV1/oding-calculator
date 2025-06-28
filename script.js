
let firstNum='';
let secondNum='';
let operator='';
let answer='';
const display=document.querySelector('#display');
const digitButtonPressed=document.querySelectorAll('#buttons-numbers button');
const operatorPressed=document.querySelectorAll('#buttons-operators button');
const equalPressed=document.querySelector('#button-equals');
const clearPressed=document.querySelector('#button-clear');


digitButtonPressed.forEach(button =>{
    button.addEventListener('click', ()=>{
        if (operator==''){
            display.textContent='0';
            firstNum+=button.textContent;
            display.textContent=firstNum;
            console.log('firstNum'+firstNum);
        } else {
            secondNum+=button.textContent;
            display.textContent=secondNum;
            console.log('secondNum'+secondNum);
        }
        
    });
});


operatorPressed.forEach(button =>{
    button.addEventListener('click', ()=>{
        operator=button.textContent;
        console.log('operator'+operator);
    });
});


equalPressed.addEventListener('click', ()=>{
    answer=operate(+firstNum, +secondNum, operator);
    display.textContent=Math.round(answer*100)/100;
    console.log('answer'+answer);
});

clearPressed.addEventListener('click', ()=>{
    firstNum='';
    secondNum='';
    operator='';
    display.textContent='0';
});


function addition(a, b) {
    return a+b;
}

function subtraction(a, b) {
    return a-b;
}

function multiplication(a, b) {
    return a*b;
}

function division(a, b) {
    if (b==0) {
        return 'CANNOT DIVIDE BY ZERO';
    } else {
        return a/b;
    }
}

function operate(a, b, op) {
    if (op=='+') {
        return addition(a, b);
    } else if (op=='-') {
        return subtraction(a, b);
    } else if (op=='x') {
        return multiplication(a, b);
    } else if (op=='÷') {
        return division(a, b);
    } else {
        return 'OPERATOR ISSUE';
    }

}

