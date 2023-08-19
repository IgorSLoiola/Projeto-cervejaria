function validarLogin(email, senha) {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
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

// bloquear os carecteres do input de senha e confirmar senha
var bloqCaractSenha = document.querySelector("input[name=senha]");

bloqCaractSenha.addEventListener("keypress", function (Event) {
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

//validar users
users = [
  {
    email: "igor@gmail.com",
    logradouro: "rosa da penha",
    name: "igor",
    password: "123",
  },
];
function validateUser() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var BDW = localStorage.getItem("Users");
  var validarBDW = JSON.parse(BDW);
  for (var i = 0; i < validarBDW.length; i++) {
    if (validarBDW[i].email == email && validarBDW[i].password == senha) {
      addURL("email", validarBDW[i].email);
      break;
    } else {
      document.getElementById("userInvalido").style.display = "block";
      limpaCampos();
    }
  }
}

function addURL(key, value) {
  var buscarParametro = new URLSearchParams(window.location.search);
  buscarParametro.set(key, value);
  var newUrl = window.location.pathname + "?" + buscarParametro.toString();
  history.pushState(null, "", `login.html?${buscarParametro}`);
  getURL(buscarParametro);
  navHome(buscarParametro);
}

// get URL

var urlparameter;
function getURL(url) {
  var getParam = url;
  console.log(getParam);
}
//FIM get URL

// Mensagem de error

function errorSenha() {
  var senha = document.getElementById("senha").value;
  if (!senha) {
    document.getElementById("senhaObrigatorio").style.display = "block";
  } else {
    document.getElementById("senhaObrigatorio").style.display = "none";
  }
}

function errorEmail() {
  var email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("emailObrigatorio").style.display = "block";
  } else {
    document.getElementById("emailObrigatorio").style.display = "none";
  }
}

// FIM Mensagem de error

// Limpa campos

function limpaCampos() {
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}
// FIM Limpa campos
