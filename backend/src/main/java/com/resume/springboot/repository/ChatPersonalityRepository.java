package com.resume.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resume.springboot.model.ChatPersonality;

@Repository
public interface ChatPersonalityRepository extends JpaRepository<ChatPersonality, Long>{

}
