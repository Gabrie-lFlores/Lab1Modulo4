// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
 // Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    var varVar = "I'm a var variable";
    let varLet = "I'm a let variable";
    const varConst = "I'm a const variable";
    varVar = "I'm a var variable, but I can be reassigned";
     varLet = "I'm a let variable, but I can be reassigned"; // This will throw an error
     varConst = "I'm a const variable, but I can be reassigned"; // This will throw an error  
}
