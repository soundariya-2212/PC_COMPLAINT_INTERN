package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Complaint;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    
    @Autowired
    private UserService us;
    @PostMapping("/reg")
    public ResponseEntity<User> createuser(@RequestBody User user)
    {
        return us.createuser(user);
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        User existingUser = us.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("id", existingUser.getId());
            response.put("name", existingUser.getName());
            response.put("email", existingUser.getEmail());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }



    @GetMapping("/{id}")
    public ResponseEntity<User>findById(@PathVariable("id") Long id)
    {
        return us.findById(id);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateuser(@PathVariable("id") Long id,@RequestBody User user)
    {
        return us.updateuser(id,user);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers()
    {
        return us.getAllUsers();
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
        boolean isDeleted = us.deleteUserById(id);  // Your delete logic here

        if (isDeleted) {
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
    
}
