const inputText = document.getElementById('Email')
const button = document.querySelector('button')

//mostrando o email que o usuario cadastrou
const userEmail = localStorage.getItem("emailData")

inputText.value = userEmail
