
let firstNum;
let secondNum;
let operation;

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
    } else if (op=='*') {
        return multiplication(a, b);
    } else if (op=='/') {
        return division(a, b);
    } else {
        return 'OPERATOR ISSUE';
    }

}