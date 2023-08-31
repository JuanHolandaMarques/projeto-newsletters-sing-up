const form = document.querySelector('#divForm')
const emailInput = document.querySelector('#email')
const buttonInput = document.querySelector('#button')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  //verificar se o campo de email ta vazio ou mal digitado
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email corretamente")
    return
  }else{
    window.location.href = 'page-login.html'
  }
})

  //verificando se o email está minimamente correto.
function isEmailValid(email) {
  const emailRegex = new RegExp(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true
  }else{
    return false
  }
}





