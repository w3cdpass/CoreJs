const button = document.querySelectorAll('.buttin')
const body = document.querySelector('body');

button.forEach(function (button) {
    // event listner

    button.addEventListener('click', function (e) {
        // console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.background = "green";
        }
        if (e.target.id === 'red') {
            body.style.background = "yellow";
        }
        if (e.target.id === 'blue') {
            body.style.background = "pink";
        }
        if (e.target.id === 'green') {
            body.style.background = "violet";
        }
    })
})