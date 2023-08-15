// bloquear os carecteres do input de senha e confirmar senha
var bloqCaract = document.querySelector("input[name=senha]");
var bloqCaract2 = document.querySelector("input[name=ConfirmeSenha]");

bloqCaract.addEventListener("keypress", function (Event) {
  if (!checkCaractSenha(Event)) {
    Event.preventDefault();
  }
});

bloqCaract2.addEventListener("keypress", function (Event) {
  if (!checkCaractSenha(Event)) {
    Event.preventDefault();
  }
});

function checkCaractSenha(Event) {
  var char = String.fromCharCode(Event.keyCode);
  var padrao = "[a-zA-Z0-9]";

  if (char.match(padrao)) {
    return true;
  }
}

// bloquear os carecteres e numeros do input do nome
var bloqCaract3 = document.querySelector("input[name=nome]");

bloqCaract3.addEventListener("keypress", function (Event) {
  if (!checkCaractNome(Event)) {
    Event.preventDefault();
  }
});

function checkCaractNome(Event) {
  var char = String.fromCharCode(Event.keyCode);
  var padrao = "[a-zA-Z]";

  if (char.match(padrao)) {
    return true;
  }
}

// bloquear alguns carecteres do input do email
var bloqEmail = document.querySelector("input[name=email]");

bloqEmail.addEventListener("keypress", function (Event) {
  if (!checkCaractEmail(Event)) {
    Event.preventDefault();
  }
});

function checkCaractEmail(Event) {
  var char = String.fromCharCode(Event.keyCode);
  var padrao = "[/S+@S+-.S+_S+a-zS+A-ZS+0-9/]";

  if (char.match(padrao)) {
    return true;
  }
}

function registrarUsers() {
  var eemail = document.getElementById("email").value;
  var password = document.getElementById("senha").value;
  var cofirmPassword = document.getElementById("ConfirmeSenha").value;
  var name = document.getElementById("nome").value;
  var logradouro = document.getElementById("endereco").value;
  // var nascimento = document.getElementById('dataNasc').value;
  // var senha = document.querySelector('input[name=senha]');
  // var cofirmSenha = document.querySelector('input[name=ConfirmeSenha]');

  if (
    eemail !== "" &&
    password !== "" &&
    name !== "" &&
    logradouro !== "" &&
    cofirmPassword === password
  ) {
    tablepessoas(eemail, password, name, logradouro);
    alert("Usuario registrando com sucesso!");
    navLogin();
  } else if (cofirmPassword !== password) {
    // cofirmPassword.setCustomValidity('As senha não conferem!');
    alert("As senha não conferem!");
  } else {
    alert("Preenchar os dados corretamente!!");
  }
}

// users

users = [
  {
    email: "igor@gmail.com",
    logradouro: "rosa da penha",
    name: "igor",
    password: "123",
  },
];

function tablepessoas(email, password, name, logradouro) {
  users.push({ email, password, name, logradouro });
  var transformJsonString = JSON.stringify(users);
  localStorage.setItem("Users", transformJsonString);
}
