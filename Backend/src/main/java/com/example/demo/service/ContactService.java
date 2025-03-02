package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Contact;
import com.example.demo.repo.ContactRepo;

@Service
public class ContactService {
        @Autowired
        private ContactRepo cr1; 

        public ResponseEntity<Contact>createcon(Contact contact)
        {
            try
            {
                Contact con=cr1.save(contact);
                return new ResponseEntity<>(con,HttpStatus.CREATED);
            }
            catch(Exception e)
            {
                return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        public ResponseEntity<List<Contact>>getcon()
        {
            List<Contact> con1=cr1.findAll();
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
