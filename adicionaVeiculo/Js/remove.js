document.querySelector("#excluir-veiculo").addEventListener("click", function(event) {
    event.preventDefault();
    const id = document.getElementById("excluir-id").value;

    axios.get(`http://127.0.0.1:8090/deletacarro?id=${id}`)
    .then(function (response) {
      console.log(response);

      // Procurando a linha com o ID especificado
      const tabelaVeiculos = document.getElementById("tabela-veiculos");
      const linhas = tabelaVeiculos.querySelectorAll("tr");
      for (const linha of linhas) {
        const idTd = linha.querySelector(".info-id");
        if (idTd == id) {
          // Excluindo a linha da tabela
          linha.remove();
          break;
        }
      }
      alert("Veiculo excluido com sucesso, atualize a pagina!");
        location.reload();
    })
    .catch(function (error) {
      console.log("ERRO: NÃO FOI POSSÍVEL REALIZAR EXCLUSÃO");
    });
  });











// let tabela = document.querySelector("table");

// tabela.addEventListener("dblclick", function (event) {
//   event.target.parentNode.classList.add("fadeOut");

//   setTimeout(function () {
//     // Envia a requisição DELETE para o back-end
//     fetch(`http://localhost:8080/deletar/` + id, { method: "DELETE" })
//       .then(response => response.json())
//       .then(data => {
//         console.log("Registro deletado com sucesso!", data);
//       })
//       .catch(error => {
//         console.error("Erro ao excluir registro:", error);
//       });

//     event.target.parentNode.remove();

//   }, 500);
// });




