const input = document.querySelector('.input');
const button = document.querySelectorAll('.btn');

let str = "";
let arr = Array.from(button);

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == 'C'){
            str = "";
            input.value = str;
        }
        else if (e.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    });
})
