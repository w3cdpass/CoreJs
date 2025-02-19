// Data types

// Primitive data types
/** there are the 7 types of the primitive 
 * 
 */

// primitiver datatype are the stored in { stack }

// String, Number, Boolean, null, undefined,
// Symbol,

// they stored as a stackmemory
// and take less space in memory

/**
 *              *
 *              *
 *              *
 *       10     *
 *        9     *
 *        6     *
 *        5     *
 * ______4______*
 *      fig:1
 * */


const id = Symbol('1123');
const id2 = Symbol('34');
console.log(id === id2)


// Refrence (non-primitive)
// array, Objects, Funtions

// they stored in the heap memory 
const array1 = ["Tiger", "Lion", "Hyena"];
const array2 = ["Tiger", "Lion", "Hyena"];
const Object = {
    tiger: "Carnivorus",
    age: 7
};

const func = function () {
    console.log('erer')
}

console.log(typeof Object, typeof array, typeof func)

const obj = {
    tiger: "Carnivorus",
    age: 7
};
const obj2 = obj;

console.log(obj === obj2)
console.log(array1 === array2)