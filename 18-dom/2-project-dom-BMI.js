// BMI calculator

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    }

    else {
        const BMI = (weight / ((height * height) /10000)).toFixed(2)
        // display in result 
        result.innerHTML = `<span>Your BMI is ${BMI}</span>`
    }
})