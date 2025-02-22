// objects in js

/** DOT and Bracket Notation 
 * 
 */

// DOT and Symbol 
const id = Symbol()
const usr = {
    name: "Aligator",
    [id]:'23',
    age: 25,
    address: 'near pond/Sukna Lake,Chd',
    bio: function () {
    return `${this.name} here !,\ni'm ${this.age} years old\nAnd live in ${this.address}`
    }
};

// console.log(usr.bio())

// Bracket Notation

