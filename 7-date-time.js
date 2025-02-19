// Date and the time


let mydate = new Date()
mydate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})

console.log(mydate)