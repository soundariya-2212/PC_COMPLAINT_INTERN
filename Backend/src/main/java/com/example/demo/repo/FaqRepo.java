package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Faq;

public interface FaqRepo extends JpaRepository<Faq,Long>{
    
}
