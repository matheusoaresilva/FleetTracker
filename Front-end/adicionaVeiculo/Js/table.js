// Pegando tabela pelo id
const tabelaVeiculos = document.getElementById("tabela-veiculos");


// buscando GET conectando com banco
fetch("http://127.0.0.1:8090/veiculo")
  .then(response => response.json())
  .then(veiculos => {
    veiculos.forEach(veiculo => {

      // Criando linhas e colunas da tabela para cada dado do banco
      const linha = document.createElement("tr");
      
      const colunaId = document.createElement("td");
      colunaId.textContent = veiculo.id;
      
      const colunaPlaca = document.createElement("td");
      colunaPlaca.textContent = veiculo.placa;
      
      const colunaModelo = document.createElement("td");
      colunaModelo.textContent = veiculo.modelo;

      const colunaCor = document.createElement("td");
      colunaCor.textContent = veiculo.cor;
      
      linha.appendChild(colunaId);
      linha.appendChild(colunaPlaca);
      linha.appendChild(colunaModelo);
      linha.appendChild(colunaCor);
      
      tabelaVeiculos.appendChild(linha);
    });
  });
