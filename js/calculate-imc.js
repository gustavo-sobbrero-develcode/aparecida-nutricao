// var titulo = (document.querySelector(".titulo"));
// titulo.textContent = prompt("Digite o título");
var subtitulo = document.querySelector("h2");
subtitulo.addEventListener("click" , function(){
    alert("Você clicou hehe")
});
// subtitulo.textContent = prompt("Digite o subtítulo");
var pacientes = document.querySelectorAll(".paciente");

for (var i=0 ; i < pacientes.length ; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValida = validaPeso(peso);
    var alturaValida = validaAltura(altura);


    if(!pesoValida) {
    pesoValida = false;
    tdImc.textContent = "Peso inválido";
//    paciente.classList.add("paciente-invalido");
    
}
    if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
 //   paciente.classList.add("paciente-invalido");

}
    if (pesoValida && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
   // paciente.classList.add("paciente-valido");
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if (peso >= 0 && peso <= 250) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura (altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    }
    else {
        return false;
    }
}




