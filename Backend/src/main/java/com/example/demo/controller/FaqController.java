package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Faq;
import com.example.demo.service.FaqService;

@RestController
@RequestMapping("/faq")
public class FaqController {
    
    @Autowired
    private FaqService fs;

    @PostMapping("/post")
    public ResponseEntity<Faq> createfaq(@RequestBody Faq faq)
    {
        return fs.createfaq(faq);
    }
    @GetMapping("/get")
    public ResponseEntity<List<Faq>> getuser()
    {
        return fs.getuser();
    }
    
    

}
