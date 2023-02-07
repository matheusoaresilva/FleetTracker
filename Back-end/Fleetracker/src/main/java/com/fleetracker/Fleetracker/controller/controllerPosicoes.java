package com.fleetracker.Fleetracker.controller;

import com.fleetracker.Fleetracker.model.PosicaoVeiculo;
import com.fleetracker.Fleetracker.repository.posicaoVeiculoRepository;
import com.fleetracker.Fleetracker.repository.veiculoRepository;
import com.fleetracker.Fleetracker.service.BuscandoLista;
import com.fleetracker.Fleetracker.service.GravandoListas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@Controller
@CrossOrigin("*")
public class controllerPosicoes {




        @Autowired
        BuscandoLista lista;

        @Autowired
        GravandoListas gravandoListas;

        @Autowired
        posicaoVeiculoRepository posicaoRepository;

        @Autowired
        veiculoRepository veiculosRepository;


    @RequestMapping(value = "/rastreio", method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<PosicaoVeiculo> getdados(@RequestParam("id") int id, @RequestParam("dataini") String dataini, @RequestParam("datafim") String datafim ){
        return lista.buscar(id, dataini+" 00:00:00.000", datafim+" 23:59:59.000");
    }

    @RequestMapping(value = "/deletarastreio", method = RequestMethod.GET)
    @ResponseBody
    public String DeleteRastreio(@RequestParam("id") int id){
        gravandoListas.DeletaVeiculo(id);
        return "Sucesso";
    }

    @RequestMapping(
            value = "/criarastreio", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    @ResponseBody
    public PosicaoVeiculo createRastreio (@RequestBody PosicaoVeiculo posicao) {
        System.out.println(posicao);
        return gravandoListas.SalvaPosicao(posicao);
    }
}


