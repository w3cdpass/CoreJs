// Nested de-strucure

const usrs = [
    { name: "gamer", age: 23 },
    { name: "lion", age: 4 },
    { name: "pro", age: 84 },
    { name: "lipo", age: 54 },
    { name: "nerf", age: 94 }
];
/** Nested de-structring */
// const [usr, us ,...all] = usrs

// for (let keys in usrs) {
//     console.log(usrs[keys].name,usrs[keys].age)
// };
usrs.map((name) => {
    console.log(name['name'])
})







