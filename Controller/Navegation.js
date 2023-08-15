// funções de navegação
function navLogin() {
  window.location.href = "login.html";
}

function navRegister() {
  window.location.href = "register.html";
}

function navSacola() {
  window.location.href = "sacola.html";
}

function navHome(url) {
  if (url == "" || url == null) {
    window.location.href = "home.html";
  } else {
    var urlparam = url;
    window.location.href = `home.html`;
  }
}
