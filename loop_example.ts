// array declaration with assignment
let names: string[] = ['proton', 'toyota', 'honda', 'suzuki'];

// array delaration and with empty assignment
let namesWithIndex: string[] = [];

for (let i = 0; i < names.length; i++) {
    let obj = names[i];
    namesWithIndex.push(i + ': ' + obj);
}

// calling function
document.body.innerHTML = namesWithIndex.toString();





