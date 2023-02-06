# FleetTracker (Em desenvolvimento)

## Introdução
Este projeto permite que sejam cadastrados, editados e excluídos dados de veículos, bem como adicionados e consultados seus respectivos rastreamentos.



## Funcionalidades
### Cadastro de veículos
Com a funcionalidade de cadastro de veículos, é possível incluir um novo veículo informando seu ID, placa, modelo e cor. Caso o ID já exista no banco de dados, os dados serão atualizados.



### Edição de veículos
A edição de veículos pode ser realizada diretamente pela interface do usuário, permitindo a inserção e exclusão de dados no banco de dados.

### Exclusão de veículos
A exclusão de veículos também pode ser feita através da interface do usuário, bastando informar o ID do veículo a ser excluído.

![Tela de cadastro de veiculos](https://github.com/matheusoaresilva/Rastreamento-veiculos/blob/main/img/img-car/adcVeiculo.PNG)

### Adição de rastreamentos
A funcionalidade de adição de rastreamentos permite passar o ID do veículo, longitude e latitude de cada ponto percorrido e uma parada, juntamente com a data e hora em que o veículo parou em cada coordenada.

![Tela de cadastro de rastreamento](https://github.com/matheusoaresilva/Rastreamento-veiculos/blob/main/img/img-car/adcRastreio.PNG)

### Consulta de histórico de rastreamentos
Por meio da consulta de histórico de rastreamentos, é possível buscar o histórico de rastreamento de cada veículo cadastrado, informando o ID do carro e as datas inicial e final da rota percorrida. A partir dessas informações, é criado um trajeto no mapa, indicando a ordem das paradas, data, hora e coordenadas.

![Tela de rastreamento](https://github.com/matheusoaresilva/Rastreamento-veiculos/blob/main/img/img-car/map.PNG)

## Tecnologias Utilizadas
- Java 17
- Spring Boot
- MySQL
- HTML
- CSS
- Bootstrap
- JavaScript
- OpenStreetMap API
- Leaflet

## Interatividade
O front-end deste projeto está conectado ao back-end e ao banco de dados, tornando-o interativo e permitindo ao usuário adicionar e excluir dados da tabela de veículos. Caso o banco de dados esteja vazio, não haverá dados na tabela exibida na interface, mas o usuário poderá adicioná-los e a tabela será atualizada de acordo.

## Instruções
* Clone o projeto
* Altere as informações de acesso ao banco de dados e a porta no arquivo "application.properties".

## Licença
Este projeto está licenciado como software de código aberto e está sob a licença MIT.

## Contribuições
Este é um projeto Open Source e qualquer pessoa é bem-vinda para contribuir com melhorias e correções.
