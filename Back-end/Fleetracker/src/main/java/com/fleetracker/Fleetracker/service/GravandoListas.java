package com.fleetracker.Fleetracker.service;


import com.fleetracker.Fleetracker.model.PosicaoVeiculo;
import com.fleetracker.Fleetracker.model.Veiculo;
import com.fleetracker.Fleetracker.repository.posicaoVeiculoRepository;
import com.fleetracker.Fleetracker.repository.veiculoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GravandoListas {
    @Autowired
    posicaoVeiculoRepository posicaoRepository;

    @Autowired
    veiculoRepository veiculosRepository;


    // Método para salvar um objeto Veiculo no banco de dados
    public Veiculo SalvaVeiculo(Veiculo veiculo){

        System.out.println(veiculo.getId() + "\n" + veiculo.getModelo() + "\n" + veiculo.getPlaca());
        Veiculo carro = new Veiculo();
        // Busca o objeto Veiculo no banco de dados pelo ID
        carro = veiculosRepository.findById(veiculo.getId());
        carro = veiculo;
        veiculosRepository.save(carro);
        return carro;
    }

    // Método para salvar um objeto PosVeiculo no banco de dados
    public PosicaoVeiculo SalvaPosicao(PosicaoVeiculo posicao){

        PosicaoVeiculo posicaoVeiculo = posicaoRepository.findById(posicao.getId());
        posicaoVeiculo = posicao;
        posicaoRepository.save(posicaoVeiculo);
        return posicao;
    }

    // Método para deletar um objeto Veiculo no banco de dados
    public void DeletaVeiculo(int id){
        Veiculo veiculo = veiculosRepository.findById(id);
        veiculosRepository.delete(veiculo);

        try {
            // Busca todos os objetos PosicaoVeiculo relacionados ao objeto Veiculo
            ArrayList<PosicaoVeiculo> posicao = posicaoRepository.findByIdVeiculo(id);
            for (PosicaoVeiculo p : posicao) {
                posicaoRepository.delete(p);
            }
        }catch (Exception e){
            System.out.println(e);
        }
    }

    // Método para deletar um objeto PosicaoVeiculo no banco de dados
    public void DeletaPosicao(int Id){
        PosicaoVeiculo posicaoVeiculo = posicaoRepository.findById(Id);
        posicaoRepository.delete(posicaoVeiculo);
    }
}
