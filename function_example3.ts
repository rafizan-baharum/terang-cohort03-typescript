// function declaration
// with parameters
function getMessage(name:string): string {
    // function body
    let message: string = 'this is a test from ' + name;
    return message;
}

// calling function
let myVariable: string = getMessage('AhLong');

document.body.innerHTML = myVariable;





