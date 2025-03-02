package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repo.FeedbackRepo;

@Service
public class FeedbackService {
    
    @Autowired
    private FeedbackRepo fr;
    
    public ResponseEntity<Feedback>createfee(Feedback feed)
    {
        try
        {
            Feedback con=fr.save(feed);
            return new ResponseEntity<>(con,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Feedback>>getfee()
    {
        List<Feedback> con1=fr.findAll();
        try
        {
        if(con1.isEmpty())
        {
            return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(con1,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
  