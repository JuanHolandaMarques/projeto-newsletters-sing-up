const inputText = document.getElementById('Email')
const button = document.querySelector('button')

const userEmail = localStorage.getItem("emailData")


inputText.value = userEmail