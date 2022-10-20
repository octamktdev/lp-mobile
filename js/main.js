const sendButton = document.getElementsByClassName('hs-form__actions__submit')

//verifica se o site é válido
sendButton.addEventListener('keyup', (event) =>{
  event.preventDefault()

  const siteEmpresa = document.getElementById('company_subdmain-input')

  if(siteEmpresa.value.indexOf('www') == -1 || siteEmpresa.value.indexOf('.') == -1){
    alert ('digite um dominio valido')
  }
  else(
    alert('enviado com sucesso!')
  )
});