package com.fleetracker.Fleetracker.controller;

import com.fleetracker.Fleetracker.model.Veiculo;
import com.fleetracker.Fleetracker.repository.posicaoVeiculoRepository;
import com.fleetracker.Fleetracker.repository.veiculoRepository;
import com.fleetracker.Fleetracker.service.GravandoListas;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin("*")
public class controllerVeiculos {

    @Autowired
    GravandoListas gravandoListas;

    // autowired
    @Autowired
    posicaoVeiculoRepository posicaoRepository;

    @Autowired
    veiculoRepository veiculosRepository;

    @GetMapping("/veiculo")
    @ResponseBody
    public ArrayList<Veiculo> getVeiculo() {
        return (ArrayList<Veiculo>) veiculosRepository.findAll();
    }

    @RequestMapping(value = "/deletacarro", method = RequestMethod.GET)
    @ResponseBody
    public String DeleteVeiculo(@RequestParam("id") int id) {
        gravandoListas.DeletaVeiculo(id);
        return "Sucesso";
    }

    @PostMapping("/criaveiculo")
    public ResponseEntity<Veiculo> criaVeiculo(@RequestBody Veiculo veiculo) {
        Veiculo novoVeiculo = gravandoListas.SalvaVeiculo(veiculo);
        System.out.println(novoVeiculo);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoVeiculo);
    }
}
