//Função para verificação de preenchimento de formulário
function verificar(){

  var nome = document.getElementById('nome').value; 
  var email = document.getElementById('email').value;
  var fone = document.getElementById('fone').value;
  var cpf = document.getElementById('cpf').value;


     if(!nome || !email || !fone || !cpf){
     	alert("Campos não preenchidos ou incorretos, favor preenchê-los corretamente");
     } else{
     	alert("Campos preenchidos com sucesso");
     }

}

function maskFone(){

var numeroAtual = document.getElementById('fone').value
const isCelular = numeroAtual.length === 11;
const isFone = numeroAtual.length === 10;

let numeroAjustado;

if(isCelular){

 const part1 = numeroAtual.slice(0,2);
 const part2 = numeroAtual.slice(2,7);
 const part3 = numeroAtual.slice(7,11);
numeroAjustado = `{${part1})${part2}-${part3}}`

} else if (isFone){
 const part1 = numeroAtual.slice(0,2);
 const part2 = numeroAtual.slice(2,6);
 const part3 = numeroAtual.slice(6,10);
numeroAjustado = `{${part1})${part2}-${part3}}`
}else{
numeroAtual.value='';
 alert("Número infrormado é incorreto, favor verificar!")	
}
 numeroAtual.value = numeroAjustado;

}