function Log(target: any) {
    // the new constructor behaviour
    var f : any = function (...args) {
        console.log("New: " + target.name);
    }
    return f;
}

@Log
class Car {
    constructor() {
    }
}

let c:Car = new Car();