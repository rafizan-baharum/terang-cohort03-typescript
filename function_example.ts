// function declaration
// with no return value
function calculate():void {
	// function body
	let someArray:number[] = [1, 2, 3];

	for (let entry of someArray) {
		console.log(entry); 
	}
}

// calling function
calculate();
document.body.innerHTML = 'function is called';





