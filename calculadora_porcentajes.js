//helpers
function getId(idElement){
    const id =  document.getElementById(idElement);
    return id;
}

//Calculadoras

function calcularC1(){
    const numero = getId("numeroC1").value;
    const porcentaje = getId("porcentajeC1").value;
    const campoResultado = getId("resultadoC1");

    const resultado = (numero * porcentaje) / 100;
    campoResultado.value = resultado;
}

function calcularC2(){
    const numero = getId("numeroC2").value;
    const porcentaje = getId("porcentajeC2").value;
    const campoResultado = getId("resultadoC2");

    const resultado = (numero * 100) / porcentaje;
    campoResultado.value = resultado;
}

function calcularC3(){
    const numeroA = getId("numeroAC3").value;
    const numeroB = getId("numeroBC3").value;
    const campoResultado = getId("resultadoC3");

    const resultado = (numeroB * 100) / numeroA;
    campoResultado.value = resultado;
}

function calcularC4(){
    const numeroA = getId("numeroAC4").value;
    const numeroB = getId("numeroBC4").value;
    const numeroC = getId("numeroCC4").value;
    const campoResultado = getId("resultadoC4");

    const resultado = (numeroB * numeroC) / numeroA;
    campoResultado.value = resultado;
}

//pendiente calculadora 5, 6 y 7

function calcularC5(){
    const numeroA = getId("numeroAC5").value;
    const numeroB = getId("numeroBC5").value;  
    const campoResultado = getId("resultadoC5");

    const resultado = (numeroA * (100 - numeroB)) / 100;

    campoResultado.value = resultado;
}

//Problema con esta funcion solucionar

function calcularC6(){
    const numeroA = getId("numeroAC6").value;
    const numeroB = getId("numeroBC6").value;  
    const campoResultado = getId("resultadoC6");

    const preResultado = ((100 + numeroB) * numeroA);
    const resultado = preResultado / 100;

    campoResultado.value = resultado;

    return console.log("Numero A: " + numeroA + ", Numero B: " + numeroB + "preResultado: " + preResultado + "Resultado: " + resultado);
}

