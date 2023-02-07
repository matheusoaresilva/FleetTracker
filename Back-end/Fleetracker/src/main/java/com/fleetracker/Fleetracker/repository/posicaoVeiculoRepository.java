package com.fleetracker.Fleetracker.repository;

import com.fleetracker.Fleetracker.model.PosicaoVeiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface posicaoVeiculoRepository extends JpaRepository<PosicaoVeiculo, PosicaoVeiculo> {
    ArrayList<PosicaoVeiculo> findByIdVeiculoOrderByDataHora (Integer Id);
    ArrayList<PosicaoVeiculo> findByIdVeiculo (Integer Id);
    PosicaoVeiculo findById(int id);
}
