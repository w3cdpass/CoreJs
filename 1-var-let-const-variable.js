/** Varibales-declaration in js 
 *  var
 *  let
 *  const 
 */


// var is function scope

var hello = "it's *var* deccalration"
function greetme() {
    var scopeVar = "this is not will getter"
}
greetme()
/**
 *  console.log(scopeVar)  // output: scopeVar is not defined
 */
// hoisting in the var
// console.log(hoisting)
var hoisting = "this is hoisting." // output : undefined

// problem with var

var textSay = "First Text";
var count = 4;
if (count > 2) {
    var textSay = "Second Text";
}

// console.log(textSay) // this will getting printed in console


// let is block scoped variable declaration

let number = 4;

if (number > 2) {
    let blockVariable = "this is inside of the blocked scope decalaration"
    // console.log(blockVariable) // this will print in the console
}

// console.log(blockVariable) // this is give error with referenceError


/**     { let } can be updated but not re-declared
 * 
 */

let updatedValue = "gamer";
// let updatedValue = "gamerXpro"; // output: this is give error already used 
updatedValue = "gamerXpro";
// console.log(updatedValue)

/** let will worked when the defined to to diff block scopes. */

let OuterVar = "Hello i am outer Scope with let, also same Variable"

{
    let OuterVar = "I'm inner Scoped decalaration also same Variable but { }"
    console.log(OuterVar)
}

console.log(OuterVar)



/** Const declarations are block scoped */
// this is will not update or re-declared

const contentConst = "hello Const";

// contentConst = "gamer"
// console.log(contentConst) // error


const contentObject = {
    msg1: "this is the message one",
    msg2: ""
}

console.log(contentObject.msg2 = "this is update content with the hellper")