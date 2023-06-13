let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let angka = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
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