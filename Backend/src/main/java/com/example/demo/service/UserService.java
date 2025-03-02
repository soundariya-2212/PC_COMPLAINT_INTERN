package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo ur;

    public ResponseEntity<User> createuser(User user)
    {
        try
        {
            User user1=ur.save(user);
            return new ResponseEntity<>(user1,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    public User findByEmail(String email) {
        return ur.findByEmail(email);
    }
    
    public ResponseEntity<User> findById(Long id)
    {
        Optional<User> user2=ur.findById(id);
        if(user2.isPresent())
        {
            return ResponseEntity.ok(user2.get());
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }


    public ResponseEntity<User> updateuser(Long id,User user)
    {
        Optional<User> ex=ur.findById(id);
        if(ex.isPresent())
        {
            user.setId(id);
            User update=ur.save(user);
            return new ResponseEntity<>(update,HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = ur.findAll();
            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public boolean deleteUserById(Long id) {
        if (ur.existsById(id)) {
            ur.deleteById(id);
            return true;
        }
        return false;
    }
}
