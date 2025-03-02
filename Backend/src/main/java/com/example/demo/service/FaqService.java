package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Faq;
import com.example.demo.repo.FaqRepo;

@Service
public class FaqService {
    
    @Autowired
    private FaqRepo fq;

    public ResponseEntity<Faq> createfaq(Faq faq)
    {
        try
        {
            Faq f=fq.save(faq);
            return new ResponseEntity<>(f,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Faq>> getuser()
    {
        try
        {
            List<Faq> faq=fq.findAll();
            if(faq.isEmpty())
            {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(faq,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
