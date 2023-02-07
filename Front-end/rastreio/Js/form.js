// Inicializa o mapa na posição inicial
let map = L.map('map').setView([0, 0], 13);


// Adiciona a camada de tiles da API OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona a camada de ruas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png/streets/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona a camada de edifícios
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png/buildings/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona a camada de parques
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png/parks/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markers = [];
let polyline = null;

// Criando evento de click no botao 
document.getElementById("search").addEventListener("click", function (event) {
  event.preventDefault();

  // Limpa os marcadores e linha desenhada do mapa
  for (let i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
  }
  markers = [];

  if (polyline) {
    map.removeLayer(polyline);
    polyline = null;
  }

  // Capturar os valores dos inputs
  const id = document.getElementById("id").value;
  const dataIni = document.getElementById("dataIni").value;
  const dataFinal = document.getElementById("dataFinal").value;



  // Fazer a requisição GET 
  axios.get('http://127.0.0.1:8090/rastreio', {
    params: {
      id: id,
      dataini: dataIni,
      datafim: dataFinal
    }
  })
    .then(function (response) {
      // sucesso
      console.log(response.data);
      const dados = response.data;

      

      // Formatando os dados
      let resultado = '<table><tr><th>Ordem</th><th>Latitude</th><th>Longitude</th><th>Data</th><th>Hora</th><th>Tempo de Locomoção</th></tr>';
      for (let i = 0; i < dados.length; i++) {
        let dataHora = new Date(dados[i].dataHora);
        let tempoLocomocao = '';
        if (i > 0) {
          let diferenca = new Date(dados[i].dataHora) - new Date(dados[i - 1].dataHora);
          let horas = Math.floor(diferenca / (1000 * 60 * 60));
          diferenca = diferenca - (horas * (1000 * 60 * 60));
          let minutos = Math.floor(diferenca / (1000 * 60));
          diferenca = diferenca - (minutos * (1000 * 60));
          let segundos = Math.floor(diferenca / 1000);
          tempoLocomocao = horas + 'h ' + minutos + 'min ' + segundos + 's';
        }
        resultado += '<tr><td>' + (i + 1) + '</td><td>' + dados[i].latitude + '</td><td>' + dados[i].longitude + '</td><td>' + dataHora.toLocaleDateString() + '</td><td>' + dataHora.toLocaleTimeString() + '</td><td>' + tempoLocomocao + '</td></tr>';
      }
      resultado += '</table>';


      // Inserir o resultado na página
      document.getElementById("resultado").innerHTML = resultado;


      // Armazena as coordenadas
      let coordenadas = [];
      for (let i = 0; i < dados.length; i++) {
        coordenadas.push([dados[i].latitude, dados[i].longitude]);
      }

      // Remove os markers e a linha de trajeto anteriores
      map.eachLayer(function (layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
          map.removeLayer(layer);
        }
      });

      // Adiciona markers para cada parada do veículo
      for (let i = 0; i < dados.length; i++) {
        coordenadas.push([dados[i].latitude, dados[i].longitude]);
        L.marker([dados[i].latitude, dados[i].longitude]).addTo(map);
      }


      // Desenhar a linha de trajeto
      polyline = L.polyline(coordenadas, { color: 'red' }).addTo(map);

      // Centralizar o mapa na posição do primeiro marcador
      map.setView(coordenadas[0], 13);

      // Definir o zoom de maneira que todos os marcadores sejam visíveis
      map.fitBounds(polyline.getBounds());


      //Pop up sob os markers - hover
      for (let i = 0; i < dados.length; i++) {
        let marker = L.marker([dados[i].latitude, dados[i].longitude]).addTo(map);
        let dataHora = new Date(dados[i].dataHora);
        let popupContent = `Data e Hora: ${dataHora.toLocaleDateString()} ${dataHora.toLocaleTimeString()} <br>
                          Latitude: ${dados[i].latitude} <br>
                          Longitude: ${dados[i].longitude} <br>
                          Ordem: ${i + 1}`;
        marker.bindPopup(popupContent);
        marker.on('mouseover', function (e) {
          this.openPopup();
        });
        marker.on('mouseout', function (e) {
          this.closePopup();
        });
      }


    })
    .catch(function (error) {
      console.log(error);
    });
});