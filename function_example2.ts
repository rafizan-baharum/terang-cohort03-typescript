// function declaration
// with return value
function getMessage(): string {
    // function body
    let message: string = 'this ' + ' is' + ' a' + ' test';
    return message;
}

// calling function
let myVariable: string = getMessage();

document.body.innerHTML = myVariable;





