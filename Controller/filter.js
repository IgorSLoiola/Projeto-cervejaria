const produtos = [
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
    nome: "Latao",
    descricao: "Brahma/Skol/Antartica",
    preco: 4.5,
  },
  {
    id: 3,
    img: "11026_1.jpg",
    nome: "Latao",
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

// Filtro produtos

function filterProdutos() {
  const valorCampo = document.querySelector("#inputBusca").value;
  const tableProduto = document.querySelector("#tableProdutos");
  var prod = localStorage.getItem("prdutos");
  var validarProd = JSON.parse(prod);

  tableProduto.innerHTML = ``;

  if (validarProd == "" || validarProd == null) {
    const produtosFiltrados = produtos.filter((obj) => {
      return obj.nome.toUpperCase().startsWith(valorCampo.toUpperCase());
    });
    for (let i = 0; i < produtosFiltrados.length; i++) {
      let newRow = document.createElement("tr");
      newRow.classList.add("linhaTabela");
      newRow.innerHTML = `
          <td>
          <img src="../CSS/img/${
            produtosFiltrados[i].img
          }" alt="" width="250px" height="250px">
          </td>
          <td class="cedulaTabela">${produtosFiltrados[i].descricao}</td>
          <td class="cedulaTabela">${produtosFiltrados[i].nome}</td>
          <td class="cedulaTabela">${produtosFiltrados[i].preco.toFixed(2)}</td>
          <td class="cedulaTabela">
          <button type="button" class="btnaddcart" onclick="add()">
          <i class='bx bxs-cart' ></i>
          </button>
          </td>
        `;
      tableProduto.appendChild(newRow);
    }
  } else {
    for (let i = 0; i < validarProd.length; i++) {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>
          <img src="../CSS/img/${
            validarProd[i].img
          }" alt="" width="250px" height="250px">
          </td>
          <td>${validarProd[i].descricao}</td>
          <td>${validarProd[i].nome}</td>
          <td>${validarProd[i].preco.toFixed(2)}</td>
          <td>
          <button type="button" class="btnaddcart" onclick="add()">
          <i class='bx bxs-cart' ></i>
          </button>
          </td>
        `;
      tableProduto.appendChild(newRow);
    }
  }
  localStorage.removeItem("prdutos");
}

//FIM Filtro produtos

window.onload = filterProdutos();
