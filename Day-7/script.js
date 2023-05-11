const div = document.getElementById('hello');
const size = '100px';

div.style.backgroundColor = 'red';
div.innerHTML='Hey';
div.style.height= size;
div.style.width = size;


// Functions 

function pract(){
    div.style.border="3px solid black";
    div.style.borderRadius ="50%"; 
    div.style.backgroundColor='Black';
    div.style.color='red';
}

div.addEventListener('mouseover', pract);
function jaidev(){
    div.style.backgroundColor = 'red';
div.innerHTML='Hey';
div.style.height= size;
div.style.width = size;
}
div.addEventListener('click', jaidev);


