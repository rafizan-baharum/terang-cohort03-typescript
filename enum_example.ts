// enum definition
enum Brand {
    PROTON, // 0
    HONDA,  // 1
    TOYOTA, // 2
    SUZUKI  // 3
}

// declared and assigned
let myBrand: Brand = Brand.HONDA;

if(myBrand === Brand.HONDA){
    // do something
} else if (myBrand === Brand.SUZUKI) {
    // do something
}


console.log(myBrand);

// calling function
document.body.innerHTML = `${myBrand} : ${Brand[myBrand]}` ;





