

window.onload = function() {
document.getElementById("resultado2").addEventListener(
  "click", alturas
)

document.getElementById("boton2").addEventListener(
  "click", encima
)

document.getElementById("boton3").addEventListener(
  "click", inferior
)

document.getElementById("boton4").addEventListener(
  "click", igual
)


}

function alturas() { 
  // aca el promedio
  console.log('Ejecutando funcion alturas')
  let altura_1 = document.getElementById("altura1").value;
  let altura_2 = document.getElementById("altura2").value;
  let altura_3 = document.getElementById("altura3").value;
  let altura_4 = document.getElementById("altura4").value;
  let altura_5 = document.getElementById("altura5").value;
  let resultado = (parseInt(altura_1) + parseInt(altura_2)+parseInt(altura_3) + parseInt(altura_4)+parseInt(altura_5))/5;
  document.getElementById('resultado1').textContent = resultado;
  }
 
  function encima() { 
    let encima1=0
    // Cantidad persona con altura encima de la media
    console.log('Ejecutando funcion encima')
    let altura_1 = document.getElementById("altura1").value;
    let altura_2 = document.getElementById("altura2").value;
    let altura_3 = document.getElementById("altura3").value;
    let altura_4 = document.getElementById("altura4").value;
    let altura_5 = document.getElementById("altura5").value;
    let resultado = (parseInt(altura_1) + parseInt(altura_2)+parseInt(altura_3) + parseInt(altura_4)+parseInt(altura_5))/5;
    document.getElementById('resultado1').textContent = resultado;
    
   
    if (altura_1>resultado){
       encima1=encima1 + 1;}

    if (altura_2>resultado) {
        encima1=encima1 + 1;
       }
       if (altura_3>resultado){
        encima1=encima1 + 1;}
     if (altura_4>resultado) {
         encima1=encima1 + 1;
        }
      if (altura_5>resultado){
          encima1=encima1 + 1;}
       
    document.getElementById('encima').textContent = encima1;
    }

    function inferior() { 
      // Cantidad persona con altura encima de la media
      console.log('Ejecutando funcion inferior')
      let inferior1=0
    // Cantidad persona con altura encima de la media
    let altura_1 = document.getElementById("altura1").value;
    let altura_2 = document.getElementById("altura2").value;
    let altura_3 = document.getElementById("altura3").value;
    let altura_4 = document.getElementById("altura4").value;
    let altura_5 = document.getElementById("altura5").value;
    let resultado = (parseInt(altura_1) + parseInt(altura_2)+parseInt(altura_3) + parseInt(altura_4)+parseInt(altura_5))/5;
    document.getElementById('resultado1').textContent = resultado;
    
   
    if (altura_1<resultado){
       inferior1=inferior1 + 1;}

    if (altura_2<resultado) {
        inferior1=inferior1 + 1;
       }
       if (altura_3<resultado){
        inferior1=inferior1 + 1;}
     if (altura_4<resultado) {
         inferior1=inferior1 + 1;
        }
      if (altura_5<resultado){
          inferior1=inferior1 + 1;}
       
    document.getElementById('inferior2').textContent = inferior1;
    }

    function igual() { 
      // Cantidad persona con altura encima de la media
      console.log('Ejecutando funcion igual')
    let igual1=0
    // Cantidad persona con altura encima de la media
    let altura_1 = document.getElementById("altura1").value;
    let altura_2 = document.getElementById("altura2").value;
    let altura_3 = document.getElementById("altura3").value;
    let altura_4 = document.getElementById("altura4").value;
    let altura_5 = document.getElementById("altura5").value;
    let resultado = (parseInt(altura_1) + parseInt(altura_2)+parseInt(altura_3) + parseInt(altura_4)+parseInt(altura_5))/5;
    // document.getElementById('resultado1').textContent = resultado;
    
   
    if (altura_1==resultado){
       igual1=igual1 + 1;}

    if (altura_2==resultado) {
        igual1=igual1 + 1;
       }
       if (altura_3==resultado){
        igual1=igual1 + 1;}
     if (altura_4==resultado) {
         igual1=igual1 + 1;
        }
      if (altura_5==resultado){
          igual1=igual1 + 1;}
       
    document.getElementById('igual2').textContent = igual1;
    }