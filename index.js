let string ='';
let buttons = document.querySelectorAll('.cal-buttons');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == "="){
        string= eval(string);
        document.querySelector('.result').value = string;
    }
    else if(e.target.innerHTML == "C"){
        string= "";
        document.querySelector('.result').value = string;
    }
    else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('.result').value = string;
    }
    })
})