
// Adicionando evento
document.getElementById("adicionar").addEventListener("click",
function (event) {
  event.preventDefault();


  // Capturando valores dos dados do input
  const id = document.getElementById("id").value;
  const idVeiculo = document.getElementById("idVeiculo").value;
  const dataHora = document.getElementById("dataHora").value;
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  const dataFormatada = moment(dataHora).format("YYYY-MM-ddTHH:mm:ss");


  // Fazendo requisição POST
  axios.post("http://127.0.0.1:8090/criarastreio",{
    id: id,
    idVeiculo: idVeiculo,
    dataHora: dataHora,
    latitude: latitude,
    longitude: longitude
  })
    .then(function (response) {
      console.log(response);
      alert("Rastreio criado com sucesso!");
        location.reload();
    })

      .catch(function (error){
        console.error(error);
      });

});