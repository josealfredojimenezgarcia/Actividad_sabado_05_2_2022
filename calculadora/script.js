
// window.onload = function() {

//   document.getElementById("btn_run_1").addEventListener(
//       "click", run_1
//   )
//   document.getElementById("btn_run_2").addEventListener(
//       "click", run_2
//   )
//   document.getElementById("btn_run_3").addEventListener(
//       "click", run_3
//   )
//   document.getElementById("btn_run_4").addEventListener(
//       "click", run_4
//   )
// }




// function run() {

// console.log('Estoy corriendo el metodo run')
// Suma

// let number_1 = prompt("Ingresa el primer numero:", 30);
// let number_2 = prompt("Ingresa el segundo numero:", 60);
// const resultado = parseInt(number_1) + parseInt(number_2);
// alert('la suma de ' + number_1 + ' + ' + number_2 + ' = ' + resultado);

// // Resta

// number_1 = prompt("Ingresa el primer numero:", 30);
// number_2 = prompt("Ingresa el segundo numero:", 60);
// const resultado1 = parseInt(number_1) - parseInt(number_2);
// alert('la resta de ' + number_1 + ' + ' + number_2 + ' = ' + resultado1);

// // Multiplicación

// number_1 = prompt("Ingresa el primer numero:", 30);
// number_2 = prompt("Ingresa el segundo numero:", 60);
// const resultado2 = parseInt(number_1) * parseInt(number_2);
// alert('la multiplicación de ' + number_1 + ' + ' + number_2 + ' = ' + resultado2);

// // División

// number_1 = prompt("Ingresa el primer numero:", 30);
// number_2 = prompt("Ingresa el segundo numero:", 60);
// const resultado3 = parseInt(number_1) / parseInt(number_2);
// alert('la división de ' + number_1 + ' + ' + number_2 + ' = ' + resultado3);

// }

// function run_1() { 
//   // console.log('estoy corriendo la funcion run_1')
//   // aca esta la suma 

//   let number_1 = prompt("Ingresa el primer numero:", 30);
//   let number_2 = prompt("Ingresa el segundo numero:", 60);
//   let resulatado = parseInt(number_1) + parseInt(number_2);
//   document.getElementById('resultado').textContent = resulatado;
//   // alert('la suma de ' + number_1 + ' + ' + number_2 + ' = ' + resulatado);
// }

// function run_2() { 
//   // console.log('estoy corriendo la funcion run_2')

// // Resta
// let number_1 = prompt("Ingresa el primer numero:", 30);
// let number_2 = prompt("Ingresa el segundo numero:", 60);
// let resultado1 = parseInt(number_1) - parseInt(number_2);
// document.getElementById('resultado').textContent = resulatado1;
// // alert('la resta de ' + number_1 + ' + ' + number_2 + ' = ' + resultado1);
// }

// function run_3() { 
//   // console.log('estoy corriendo la funcion run_3')
// // Multiplicación
// let number_1 = prompt("Ingresa el primer numero:", 30);
// let number_2 = prompt("Ingresa el segundo numero:", 60);
// let resultado2 = parseInt(number_1) * parseInt(number_2);
// document.getElementById('resultado').textContent = resultado2;
// // alert('la multiplicación de ' + number_1 + ' + ' + number_2 + ' = ' + resultado2);

// }

// function run_4() { 
// // console.log('estoy corriendo la funcion run_4')
// // División
// let number_1 = prompt("Ingresa el primer numero:", 30);
// let number_2 = prompt("Ingresa el segundo numero:", 60);
// let resultado3 = parseInt(number_1) / parseInt(number_2);
// document.getElementById('resultado').textContent = resultado3
// // alert('la división de ' + number_1 + ' + ' + number_2 + ' = ' + resultado3);
// }

window.onload = function() {

  document.getElementById("run").addEventListener(
    "click", run
)

 document.getElementById("btn_run_1").addEventListener(
      "click", run_1
  ) 

  document.getElementById("suma1").addEventListener(
    "click", run_1
) 

  document.getElementById("btn_run_2").addEventListener(
      "click", run_2
  )

  document.getElementById("resta1").addEventListener(
        "click", run_2

  )
  document.getElementById("btn_run_3").addEventListener(
      "click", run_3
  )

  document.getElementById("multipliacion1").addEventListener(
    "click", run_3
)

  document.getElementById("division1").addEventListener(
      "click", run_4
  )

  document.getElementById("btn_run_4").addEventListener(
    "click", run_4
)

  document.getElementById("numero1").addEventListener(
    "click", pinNumero1
) 

document.getElementById("numero2").addEventListener(
  "click", pinNumero2
) 
document.getElementById("numero3").addEventListener(
  "click", pinNumero3
) 
document.getElementById("numero4").addEventListener(
  "click", pinNumero4
) 
document.getElementById("numero5").addEventListener(
  "click", pinNumero5
) 
document.getElementById("numero6").addEventListener(
  "click", pinNumero6
) 
document.getElementById("numero7").addEventListener(
  "click", pinNumero7
) 
document.getElementById("numero8").addEventListener(
  "click", pinNumero8
) 
document.getElementById("numero9").addEventListener(
  "click", pinNumero9
) 
document.getElementById("numero_").addEventListener(
  "click", pinNumero_
) 

}

function run() { 
  // aca esta la suma 

  
  let resultado0 = ' Jehová Dios es Amor Infinito';
  document.getElementById('mensaje').textContent = resultado0
  // alert('la suma de ' + number_1 + ' + ' + number_2 + ' = ' + resulatado);
}


function run_1() { 
  // aca esta la suma 
  document.getElementById('operacion').textContent = "+"
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let resulatado = parseInt(number_1) + parseInt(number_2);
  document.getElementById('resultado').textContent = resulatado
  // alert('la suma de ' + number_1 + ' + ' + number_2 + ' = ' + resulatado);
}

function run_2() { 
  // aca esta la Resta
  document.getElementById('operacion').textContent = "-"
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let resultado1 = parseInt(number_1) - parseInt(number_2);
  document.getElementById('resultado').textContent = resultado1;

  // alert('la resta de ' + number_1 + ' - ' + number_2 + ' = ' + resulatado);
}

function run_3() { 
  // aca esta la multiplicación
  document.getElementById('operacion').textContent = "*"
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let resultado2 = parseInt(number_1) * parseInt(number_2);
  document.getElementById('resultado').textContent = resultado2;

  // alert('la multiplicacion de ' + number_1 + ' * ' + number_2 + ' = ' + resulatado);
}

function run_4() { 
  // aca esta la división
  document.getElementById('operacion').textContent = "/"
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let resultado3 = parseInt(number_1) / parseInt(number_2);
  document.getElementById('resultado').textContent = resultado3;
    // alert('la division de ' + number_1 + ' * ' + number_2 + ' = ' + resulatado);
}



function pinNumero1() { 
  // aca esta pintar numero uno
operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=1;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 1;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=1;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 1;
  }
}

}

function pinNumero2() { 
  // aca esta pintar numero dos

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=2;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 2;
  // }
  operacion1= document.getElementById('operacion').textContent 
  if (operacion1==""){
    let number_1 = document.getElementById("number_1").value;
    if (number_1=="") {
      document.getElementById("number_1").value=2;  
    }
    else{
      document.getElementById("number_1").value= number_1 + 2;
    }
  }else{
    let number_2 = document.getElementById("number_2").value;
    if (number_2=="") {
      document.getElementById("number_2").value=2;  
    }
    else{
      document.getElementById("number_2").value= number_2 + 2;
    }
  }

}



function pinNumero3() { 
  // aca esta pintar numero tres

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=3;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 3;
  // }

  operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=3;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 3;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=3;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 3;
  }
}
}

function pinNumero4() { 
  // aca esta pintar numero cuatro

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=4;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 4;
  // }
  operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=4;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 4;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=4;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 4;
  }

}
}

function pinNumero5() { 
  // aca esta pintar numero cinco

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=5;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 5;
  // }

  operacion1= document.getElementById('operacion').textContent 
  if (operacion1==""){
    let number_1 = document.getElementById("number_1").value;
    if (number_1=="") {
      document.getElementById("number_1").value=5;  
    }
    else{
      document.getElementById("number_1").value= number_1 + 5;
    }
  }else{
    let number_2 = document.getElementById("number_2").value;
    if (number_2=="") {
      document.getElementById("number_2").value=5;  
    }
    else{
      document.getElementById("number_2").value= number_2 + 5;
    }
  }

}

function pinNumero6() { 
  // aca esta la división seis

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=6;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 6;
  // }
  operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=6;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 6;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=6;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 6;
  }
}
}

function pinNumero7() { 
  // aca esta pintar numero siete

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=7;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 7;
  // }
  operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=7;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 7;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=7;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 7;
  }
}
}

function pinNumero8() { 
  // aca esta pintar numero ocho

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=8;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 8;
  // }
  operacion1= document.getElementById('operacion').textContent 
if (operacion1==""){
  let number_1 = document.getElementById("number_1").value;
  if (number_1=="") {
    document.getElementById("number_1").value=8;  
  }
  else{
    document.getElementById("number_1").value= number_1 + 8;
  }
}else{
  let number_2 = document.getElementById("number_2").value;
  if (number_2=="") {
    document.getElementById("number_2").value=8;  
  }
  else{
    document.getElementById("number_2").value= number_2 + 8;
  }
}
}

function pinNumero9() { 
  // aca esta pintar numero nueve

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=9;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 9;
  // }
  operacion1= document.getElementById('operacion').textContent 
  if (operacion1==""){
    let number_1 = document.getElementById("number_1").value;
    if (number_1=="") {
      document.getElementById("number_1").value=9;  
    }
    else{
      document.getElementById("number_1").value= number_1 + 9;
    }
  }else{
    let number_2 = document.getElementById("number_2").value;
    if (number_2=="") {
      document.getElementById("number_2").value=9;  
    }
    else{
      document.getElementById("number_2").value= number_2 + 9;
    }
  }

}

function pinNumero_() { 
  // aca esta pintar numero cero

  // let number_1 = document.getElementById("number_1").value;
  // if (number_1=="") {
  //   document.getElementById("number_1").value=0;  
  // }
  // else{
  //   document.getElementById("number_1").value= number_1 + 0;
  // }
  operacion1= document.getElementById('operacion').textContent 
  if (operacion1==""){
    let number_1 = document.getElementById("number_1").value;
    if (number_1=="") {
      document.getElementById("number_1").value=0;  
    }
    else{
      document.getElementById("number_1").value= number_1 + 0;
    }
  }else{
    let number_2 = document.getElementById("number_2").value;
    if (number_2=="") {
      document.getElementById("number_2").value=0;  
    }
    else{
      document.getElementById("number_2").value= number_2 + 0;
    }
  }

}