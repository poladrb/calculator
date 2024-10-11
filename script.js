let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'log') {
            string = Math.log10(eval(string)); // Logaritm hesabı
            input.value = string;
        }
        else if (e.target.innerHTML == 'x²') {
            string = Math.pow(eval(string), 2); // Kvadrat hesabı
            input.value = string;
        } else if (e.target.innerHTML == '√') {
            string = Math.sqrt(eval(string)); // Kökaltı hesabı
            input.value = string;
        }
        else if (e.target.innerHTML == 'sin') {
            string = Math.sin(eval(string) * (Math.PI / 180)); // Sinus hesabı
            input.value = string;
        }
        else if (e.target.innerHTML == 'cos') {
            string = Math.cos(eval(string) * (Math.PI / 180)); // Kosinus hesabı
            input.value = string;
        }        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})