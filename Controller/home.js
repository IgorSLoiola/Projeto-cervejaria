//array com os produtos
// var z = JSON.parse(); para transformar string em obj
// var z = JSON.stringify(); para transformar obj em string
var produtos = [
  {
    id: 0,
    img: "png-transparent-green-beer-bottle-in-kind-green-beer-bottle-bottle.png",
    descricao: "600ml",
    nome: "Stella",
    preco: 8.0,
  },
  {
    id: 1,
    img: "garrafa-cerveja-600ml.jpg",
    descricao: "1 Litro",
    nome: "Brahma",
    preco: 7.5,
  },
  {
    id: 2,
    img: "cerveja-lata-17515.jpg",
    nome: "Latão",
    descricao: "Brahma/Skol/Antartica",
    preco: 4.5,
  },
  {
    id: 3,
    img: "11026_1.jpg",
    nome: "Latão",
    descricao: "Heineken",
    preco: 5.99,
  },
  // {
  //   id: 4,
  //   img: "cerveja_corona_extra_long_neck_330ml_561_1_20201124131158.png",
  //   nome: "Corona",
  //   descricao: "600ml",
  //   preco: 9.99,
  // },
];

// dialog
var alertaDialog = document.getElementById("alertaDialog");
// deixa o dialog dinamico.
// iconAlert = document.querySelector('#alertaDialog .sacola')
// titleAlert = document.querySelector('#alertaDialog .sacola')
// descriptionAlert = document.querySelector('#alertaDialog .sacola')

function openDialog() {
  // alertaDialog.className = `sacola`
  alertaDialog.showModal();
}

function closeDialog() {
  alertaDialog.close();
}

function total(resultado, adição) {
  var resulta = document.getElementById("resultado");
  var item = parseInt(resulta.innerHTML);
}

// Lista de itens na sacola
var listaSacolas = [];
var list = document.querySelector(".listaItem");
function listasDeProdutos() {
  produtos.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <button type="button" class="btnadd" onclick="add(${key})">
            <div>
                <img src="../CSS/img/${
                  value.img
                }" alt="" width="250px" height="250px">
            </div>
            </button>
            <div class="homepreco">
            <span>${value.descricao}</span>
            <h2>${value.nome}</h2>
            <h1>${value.preco.toFixed(2)}</h1>
            </div>
            <button type="button" class="btnaddcart" onclick="add(${key})">
            <i class='bx bxs-cart' ></i>
            </button>
        `;
    list.appendChild(newDiv);
  });
}

function add(key) {
  // if(){

  // }
  if (listaSacolas[key] == null) {
    listaSacolas[key] = produtos[key];
    listaSacolas[key].quantify = 1;
  }
  openDialog();
  reloadSacola();
}
var totais = document.querySelector(".total");
var listsaco = document.querySelector(".itensSacola");
var cont = "";
function reloadSacola() {
  listsaco.innerHTML = "";
  var count = 0;
  var totalpreco = 0;
  listaSacolas.forEach((value, key) => {
    if (value.quantify < Number(cont.innerText)) {
      var pegaValorAtual = totais.innerHTML;
      var transformarValorAtualEmInt = Number(pegaValorAtual);
      totalpreco = transformarValorAtualEmInt - value.preco;
    } else if (value.preco && value.quantify >= 2) {
      var pegaValorAtual = totais.innerHTML;
      var transformarValorAtualEmInt = Number(pegaValorAtual);
      totalpreco = transformarValorAtualEmInt + value.preco;
    } else {
      var pegaValorAtual = totais.innerHTML;
      var transformarValorAtualEmInt = Number(pegaValorAtual);
      totalpreco = transformarValorAtualEmInt + value.preco;
    }
    count = count + value.quantify;
    // <div>${value.quantify}</div>
    if (value != null) {
      var newDiv = document.createElement("li");
      newDiv.innerHTML = `
            <div><img src="../CSS/img/${
              value.img
            }" alt="" width="100px" height="100px"></div>
            <div>${value.nome}</div>
            <div>${value.preco}</div>
            <div class="rowsss">
                <button type="button" class="remv" onclick="changeQuatify(${key}, ${
        value.quantify - 1
      })">-</button>
                <div class="count">${value.quantify}</div>
                <button type="button" class="adic" onclick="changeQuatify(${key}, ${
        value.quantify + 1
      })">+</button>
            </div>
            `;
      listsaco.appendChild(newDiv);
      var pegacount = document.querySelector(".count");
      cont = pegacount;
    }
  });
  // totais.innerHTML = totalpreco.toLocaleString();
  totais.innerHTML = totalpreco.toFixed(2);
  quantify.innerHTML = count;
}
var quantify = document.querySelector(".numeroItem");
function changeQuatify(key, quantify) {
  var x = produtos[key];
  if (quantify == 0) {
    delete listaSacolas[key];
    closeDialog();
  } else {
    listaSacolas[key].quantify = quantify;
    // listaSacolas[key].preco = quantify * produtos[key].preco;
  }
  reloadSacola();
}

function limpasacola() {
  var reset = document.querySelector(".btnLimpa");
  var listsaco = document.querySelector(".itensSacola");
  var zero = document.querySelector(".total");
  var quantify = document.querySelector(".numeroItem");
  var count = document.querySelector(".count");
  listsaco.innerHTML = "";
  zero.innerHTML = 0;
  quantify.innerHTML = 0;
  listaSacolas = [];
  closeDialog();
}

// slide animation

const images = [
  "../CSS/img/o-que-e-cerveja-artesanal-imagem-destacada.jpg",
  "../CSS/img/Four-cups-of-beer_3840x2160.jpg",
  "../CSS/img/570958.jpg",
];

var slid = document.querySelector("#img1");
function slideImage(imagem) {
  slid.setAttribute("src", imagem);
}

let countt = 0;

setInterval(() => {
  if (countt >= 3) {
    countt = 0;
  }
  slideImage(images[countt]);
  countt++;
}, 10000);
//FIM slide animation

// botoes para passar o slide
function arrowLeft() {
  let = document.querySelector(".btn-arrow-left");
  if (countt > 0) {
    countt--;
    slideImage(images[countt]);
  }
}

function arrowRight() {
  let arrowR = document.querySelector(".btn-arrow-right");
  if (countt < 2) {
    countt++;
    slideImage(images[countt]);
  }
}

//FIM botoes para passar o slide

function urlUser() {
  var urlparameter = new URLSearchParams(window.location.search);
  console.log(urlparameter.toString());
}

window.onload = urlUser();
window.onload = listasDeProdutos();
