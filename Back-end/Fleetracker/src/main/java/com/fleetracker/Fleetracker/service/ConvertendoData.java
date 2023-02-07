package com.fleetracker.Fleetracker.service;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ConvertendoData {

    public LocalDateTime converterData(String data){
        String s = data.substring(0, data.indexOf("."));
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return LocalDateTime.parse(s, formato);
    }
}
