package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;


@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService fs;
    @PostMapping("/feed")
    public ResponseEntity<Feedback> createfee(@RequestBody Feedback feedback)
    {
        return fs.createfee(feedback);
    }
    @GetMapping("/val1")
    public ResponseEntity<List<Feedback>> getfee()
    {
        return fs.getfee();
    }
}