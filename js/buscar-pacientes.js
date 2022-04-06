var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click" , function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load" , function(){
        if (xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
           
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else { 
            var erroAjax = document.querySelector("#erro-buscar");
            erroAjax.classList.remove("invisivel");
        }

       // Opção com for
        // for (i = 0 ; i < pacientes.length ; i++) {
       // var paciente = pacientes [i];
      //  adicionaPacienteNaTabela(paciente);
        // }
       // Opção forEach
       
    });    
    xhr.send();

});