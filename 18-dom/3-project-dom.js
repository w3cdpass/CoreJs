const clock = document.getElementById('clock');
let date = new Date()
// console.log(date)
setInterval(function () {
    let date = new Date()
    // console.log(date)
    clock.innerHTML = date
}, 1000)