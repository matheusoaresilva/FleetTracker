// Pegando o botao de adicionar pelo ID
const botaoAdicionar = document.querySelector("#adicionar-veiculo");

// Criando evento para click
botaoAdicionar.addEventListener("click", function() {
  const cor = document.querySelector("#cor").value;
  const placa = document.querySelector("#placa").value;
  const modelo = document.querySelector("#modelo").value;
  const id = document.querySelector("#id");
  
  // Buscando em toda tabela se há o ID que esta sendo inserido
  const linhas = document.querySelectorAll(`#tabela-veiculos tr td.info-id`);
  let linhaExistente = null;
  for (let i = 0; i < linhas.length; i++) {
    if (linhas[i].textContent === id) {
      linhaExistente = linhas[i].parentElement;
      break;
    } 
  }

// Se o ID existir os campos serão atualizados, se não, será criado nova linha
if (linhaExistente) {
  linhaExistente.querySelector(".info-placa").textContent = placa;
  linhaExistente.querySelector(".info-modelo").textContent = modelo;
  
  } else {
  let tabelaVeiculos = document.getElementById("tabela-veiculos");
  let novaLinha = tabelaVeiculos.insertRow();
  novaLinha.innerHTML = `
    <td class="info-id">${id}</td>
    <td class="info-placa">${placa}</td>
    <td class="info-modelo">${modelo}</td>
    <td class="info-cor">${cor}</td>
  `;
}


  alert(`A linha com ID inserido foi atualizada! Por favor, atualize a página.`);
location.reload();
});
