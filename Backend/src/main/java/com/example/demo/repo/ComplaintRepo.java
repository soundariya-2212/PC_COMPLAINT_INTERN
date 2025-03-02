package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Complaint;


public interface ComplaintRepo extends JpaRepository<Complaint,Long>{
     @SuppressWarnings("null")
     Optional<Complaint> findByEmail(String email); 
}
