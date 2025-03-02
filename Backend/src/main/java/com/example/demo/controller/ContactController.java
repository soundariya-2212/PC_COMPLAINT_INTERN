package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Contact;
import com.example.demo.service.ContactService;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/contact")
public class ContactController {
    
    @Autowired
    private ContactService cs1;

    @PostMapping("/con")
    public ResponseEntity<Contact> createcon(@RequestBody Contact contact)
    {
        return cs1.createcon(contact);
    }
    @GetMapping("/val")
    public ResponseEntity<List<Contact>> getcon()
    {
        return cs1.getcon();
    }
    
}
