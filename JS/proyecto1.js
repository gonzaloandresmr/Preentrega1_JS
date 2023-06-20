//años de los mundiales
let anho;
let contador = 0;
let anho_actual = 2023;
let anho_inicio_mundiales = 1930;

function calcularMundialesHasta(anho) {
  for (let i = anho_inicio_mundiales; i <= anho; i += 4) {
    if (i === 1942 || i === 1946) {
      console.log("En el año " + i + " no hubo mundial, fue suspendido");
      continue;
    }
    contador++;
    console.log(i);
  }
}

function mostrarMundialesTotales() {
  alert("El número total de mundiales hasta el año " + anho + " es: " + contador);
}

let confirmacion_preg_1 = confirm("¿Quieres saber en qué año se jugó un mundial?");

if (confirmacion_preg_1) {
  do {
    anho = parseInt(prompt("Ingrese el año a consultar"));
    if (anho > anho_actual) {
      alert("Ingresa el año actual o uno anterior");
    }
    else if(anho < anho_inicio_mundiales){
      alert("El primer mundial fue recién en " + anho_inicio_mundiales)  
    }
    else if (isNaN(anho)){
      alert("Ingresa un valor válido")
    }
  } while (anho > anho_actual || anho < anho_inicio_mundiales || isNaN(anho)){
    
  }

  calcularMundialesHasta(anho);

  let confirmacion_preg_2 = confirm("¿Quieres saber cuántos mundiales son en total hasta el año ingresado?");
  if (confirmacion_preg_2) {
    mostrarMundialesTotales();
  }
} else {
  alert("Ok, entonces chau");
}
