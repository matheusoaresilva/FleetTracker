package com.fleetracker.Fleetracker.service;

import com.fleetracker.Fleetracker.model.PosicaoVeiculo;
import com.fleetracker.Fleetracker.repository.posicaoVeiculoRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;


@Service
public class BuscandoLista {

    @Autowired
    posicaoVeiculoRepository posicaoRepository;

    @Autowired
    ConvertendoData convertendoData;

    // Método que busca a lista de posições de veículos dentro de um período específico
    public ArrayList<PosicaoVeiculo> buscar(int idVeiculo, String dataInicio, String dataFinal){

        // Converte as datas de início e fim para o formato LocalDateTime
        LocalDateTime inicio = convertendoData.converterData(dataInicio);
        LocalDateTime fim = convertendoData.converterData(dataFinal);

        // Busca todas as posições do veículo ordenadas por data e hora
        ArrayList<PosicaoVeiculo> todasPosicoes = posicaoRepository.findByIdVeiculoOrderByDataHora(idVeiculo);

        // Cria uma lista vazia para armazenar as posições dentro do período
        ArrayList<PosicaoVeiculo> posicoes = new ArrayList<>();

        // Loop para percorrer todas as posições e verificar se estão dentro do período
        for (PosicaoVeiculo posicao : todasPosicoes) {
            LocalDateTime data = posicao.getDataHora();
            if (data.isAfter(inicio) && data.isBefore(fim) || data.isEqual(inicio) || data.isEqual(fim)) {
                posicoes.add(posicao);
            }
        }
        return posicoes;
    }

}
