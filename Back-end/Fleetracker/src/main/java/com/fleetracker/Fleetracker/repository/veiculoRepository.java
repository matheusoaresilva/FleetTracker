package com.fleetracker.Fleetracker.repository;

import com.fleetracker.Fleetracker.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface veiculoRepository extends JpaRepository<Veiculo, Veiculo> {
     Veiculo findById(int id); 
     
}
