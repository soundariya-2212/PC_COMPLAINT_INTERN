package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.User;

public interface UserRepo extends JpaRepository<User,Long>{
    
   @SuppressWarnings("null")
   Optional<User> findById(Long id);

    User findByEmail(String email);



}
