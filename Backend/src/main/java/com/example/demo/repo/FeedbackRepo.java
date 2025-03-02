package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback,Long>{
    
}
