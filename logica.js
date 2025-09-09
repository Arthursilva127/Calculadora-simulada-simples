function insert (num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
  
function limpar() {
    document.getElementById('resultado').innerHTML = ""
}

function voltar() {
   let resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length-1);
}

function insert (num) {
    let resultado = document.getElementById('resultado');
    if(resultado.innerHTML.length <20){
    resultado.innerHTML += num;
  }
}

function calcular() {
     let resultado = document.getElementById('resultado').innerHTML;
     try{
        if(resultado); {
     document.getElementById('resultado').innerHTML = eval (resultado);

        } 
      } catch {
       window.alert("calculo incorreto");
        
      }

     }