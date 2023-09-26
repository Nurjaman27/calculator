let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
let simbol = ["%", "*", "/", "-", "+", "="];
let angka = "";

const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        angka = eval(angka.replace("%", "/100"));
    }
    else if(btnValue === 'AC') {
        angka = "";
    }
    else if(btnValue == 'DEL'){
        angka = angka.toString().slice(0, -1);
    }
    else {
        if (angka === "" && simbol.includes(btnValue)) return;
        angka += btnValue;
    }
    input.value = angka;
}

button.forEach((button) => {
    button.addEventListener("click", (e) =>calculate(e.target.dataset.value));
});

/*
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {c
        if(e.target.innerHTML == '='){
            angka = eval(angka);
            input.value = angka;
        }
        else if(e.target.innerHTML == 'AC') {
            angka = "";
            input.value = angka;
        }
        else if(e.target.innerHTML == 'DEL'){
            angka = angka.substring(0, angka.length -1);
            input.value = angka;
        }
        else {
            angka += e.target.innerHTML;
            input.value = angka;
        }
    })
})
*/