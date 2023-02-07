// Criando evento 
document.getElementById("adicionar-veiculo").addEventListener("click", function(event) {
  event.preventDefault();

  // Capturando valores dos dados
  const id = document.getElementById("id").value;
  const placa = document.getElementById("placa").value;
  const modelo = document.getElementById("modelo").value;
  const cor = document.getElementById("cor").value;


  // Verificando campos
  if ( !placa || !modelo) {
    alert("Por favor, preencha todos os campos.");
    console.log("Por favor, preencha todos os campos.");
    return;
  }

  // Fazendo conexão 
  axios.post("http://127.0.0.1:8090/criaveiculo", {
            id: id,
            placa: placa,
            modelo: modelo,
            cor: cor
        })

        // Se nao houver nenhum erro a tabela será criada
        .then(function (response) {
          console.log(response.data);
          const tabelaVeiculos = document.getElementById("tabela-veiculos");
          const tr = document.createElement("tr");
          tr.innerHTML = `
              <td class="info-id">${id}</td>
              <td class="info-placa">${placa}</td>
              <td class="info-modelo">${modelo}</td>
              <td class="info-cor">${cor}</td>
          `;
          tabelaVeiculos.appendChild(tr);
      })
      .catch(function (error) {
          console.log("ERRO: NÃO FOI POSSIVEL REALIZAR INSERÇÃO");
      });
    });

