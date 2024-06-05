let boton = document.getElementById('Sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let suma=n1+n2;
    respuesta.innerHTML=`La sumatoria es ${suma}`;
}