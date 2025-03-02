package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Complaint;
import com.example.demo.model.User;
import com.example.demo.repo.ComplaintRepo;
import com.example.demo.repo.UserRepo;

import jakarta.transaction.Transactional;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepo cr;

    // @Autowired
    // private UserRepo ur;

    @Autowired
    private UserService us;

        // In ComplaintService
    @Transactional
    public Complaint createComplaint(Complaint complaint, Long userId) {
    ResponseEntity<User> userResponse = us.findById(userId);  // Capture the ResponseEntity
    if (userResponse.getStatusCode() == HttpStatus.OK) {
        User user = userResponse.getBody();
        
        // Associate the user with the complaint
        complaint.setUser(user);
        
        // Set the date if it's not already set (Optional)
        if (complaint.getDate() == null) {
            complaint.setDate(LocalDateTime.now());
        }
        
        // Save the complaint
        return cr.save(complaint);
    } else {
        // Handle user not found
        throw new RuntimeException("User not found with id " + userId);
    }
    }
    public Complaint getComplaintById(Long id) {
        return cr.findById(id).orElse(null); // Return the complaint or null if not found
    }

    public Complaint updateComplaint(Complaint complaint) {
        return cr.save(complaint); // Save the updated complaint
    }
    
    

    public Optional<Complaint> getComplaintByEmail(String email) {
        return cr.findByEmail(email);
    }


    public ResponseEntity<List<Complaint>> getall()
    {
        try
        {
            List<Complaint> comp=cr.findAll();
            if(comp.isEmpty())
            {
                return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(comp,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
}
