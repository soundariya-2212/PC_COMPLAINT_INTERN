package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.springframework.data.annotation.CreatedDate;
import java.time.LocalDateTime;

@Entity
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String email;
    private String brand;
    private String pid;
    private String ctitle;
    private String cdetails;
    private String csolution;
    private String file;
    private String status;
    @CreatedDate
    private LocalDateTime date;  // Automatically populated with the creation timestamp

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;


    public Complaint() {
    }

    public Complaint(Long id, String name, String phone, String email, String brand, String pid, String ctitle,
                     String cdetails, String csolution, String file, String status, User user, LocalDateTime date) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.brand = brand;
        this.pid = pid;
        this.ctitle = ctitle;
        this.cdetails = cdetails;
        this.csolution = csolution;
        this.file = file;
        this.status = status;
        this.user = user;
        this.date = date;
    }

    // Getters and setters for other fields...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getCtitle() {
        return ctitle;
    }

    public void setCtitle(String ctitle) {
        this.ctitle = ctitle;
    }

    public String getCdetails() {
        return cdetails;
    }

    public void setCdetails(String cdetails) {
        this.cdetails = cdetails;
    }

    public String getCsolution() {
        return csolution;
    }

    public void setCsolution(String csolution) {
        this.csolution = csolution;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
