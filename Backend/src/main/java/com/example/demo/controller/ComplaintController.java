package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Complaint;
import com.example.demo.model.User;
import com.example.demo.service.ComplaintService;
import com.example.demo.service.UserService;



@RestController
@RequestMapping("/complaint")
@CrossOrigin(origins = "http://localhost:5173")
public class ComplaintController {

    @Autowired
    private ComplaintService cs;
    @Autowired
    private UserService us;

    // @PostMapping("comp")
    // public ResponseEntity<Complaint> createComplaint(@RequestBody Complaint com, @RequestParam Long userId) {
    //     return cs.createComplaint(com, userId); // Pass userId to the service layer
    // }

    @PostMapping("comp")
    public ResponseEntity<Complaint> createComplaint(@RequestBody Complaint com, @RequestParam Long userId) {
    try {
        Complaint createdComplaint = cs.createComplaint(com, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdComplaint);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}


    @GetMapping("")
    public ResponseEntity<List<Complaint>> getall()
    {
        return cs.getall();
    }

   @GetMapping("/email")
    public Optional<Complaint> getComplaintByEmail(@RequestParam String email) {
        return cs.getComplaintByEmail(email);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<Complaint> getComplaintById(@PathVariable Long id) {
        Complaint complaint = cs.getComplaintById(id);
        if (complaint == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 if complaint not found
        }
        return new ResponseEntity<>(complaint, HttpStatus.OK); // Return 200 with the complaint details
    }
    
}
