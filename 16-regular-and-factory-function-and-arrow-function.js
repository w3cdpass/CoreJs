// function 

const usrs = [
    { name: "gamer", age: 23 },
    { name: "lion", age: 4 },
    { name: "pro", age: 84 },
    { name: "lipo", age: 54 },
    { name: "nerf", age: 94 },
];



function showName() {
    const Names = [];
    const ages = [];
    for (let name in usrs) {
        Names.push(usrs[name].name)
        ages.push(usrs[name].age)
        // Names.push(usrs[age].age)
    }
    return `${Names},\n ${ages}`
}
// console.log(showName())


/** we can also use the [ forEach(), Map(), other methods] */
// const Names = []
// usrs.map((name) => {
//         Names.push(name['name'])
//     })


// showNameAndAge()
// console.log(Names)


FIXME:
// factory function


/**
 * 
 * @param {*} fname define the first-name
 * @param {*} lname define the last-name 
 * @param {*} age define age
 * @param {*} food define favroite food
 * @returns
 * @example {const} createUser(John, Doe, 34, Kadhai-Paneer)
 */
function createUser(fname, lname, age, food) {
    return {
        type: fname,
        lname: lname,
        age: age,
        fav: food,
        usrData() {
            return `My name ${this.fname, this.lname}, and ${this.age} years old. ${this.fav} is favroite food.`
        }
    }
};

const usr1 = createUser()


// apply()

const arry = [23, 2, 44, 33, 3];
let maxnumber = Math.max.apply(null,arry)
let minNumber = Math.min.apply(null, arry)
// console.log(minNumber)


// call()
function bio () {
    console.log(this.fname, this.age)
}
const user = {
    fname: "gamerXpro",
    age: 90,
    
}

const user2 = {
    fname: "gamerXpro",
    age: 90,
}
// user.bio.call(user2)

// bio.apply(user, [...restParameter, ...nextParameter])


//TODO:  callback and callstack funtion 