// try and catch


function inputvalidation() {
    const message = document.getElementById('exception');
    // message.innerHTML = "";
    let x = document.getElementById('demo').value;
    try {
        if (x.trim() == '') throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if(x >= 5) throw "Currest guess"
        if (x > 10) throw "too hight";
    }
    catch (err) {
        message.innerHTML = `Input is ${err}`
    }

}


