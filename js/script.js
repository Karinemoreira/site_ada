document.getElementById("botaoEnviar").addEventListener("click", validatesForm)

function validatesForm(){
  if(document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("telephone").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}
