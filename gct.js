let debtn = document.querySelector('#debtn');
let Department = document.querySelector('#Department');
let Admission = document.querySelector('#Admission');
let Adbtn = document.querySelector('#Adbtn');

let cur= 'ligh';


document.getElementById('debtn').onclick = function() {
    if (cur=== 'ligh') {
        Department.style.display='block'
        Admission.style.display='none'


    } else {
        Department.style.display='none'
        Admission.style.display='none'


    }}
document.getElementById('Adbtn').onclick = function() {
    if (cur=== 'ligh') {
        Department.style.display='none'
    
        Admission.style.display='block'

    } else {
        Department.style.display='none'
        Admission.style.display='none'

    }};
    //fhfgffgf
  
  window.location(Response)