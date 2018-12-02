// declaring interface
interface Person {
    name: string;
    age: number;
}
// implementing interface
let ahmad: Person = {"name": "Ahmad", "age": 100};

console.log("ahmad :  " + ahmad);
console.log("ahmad :  " + JSON.stringify(ahmad));
