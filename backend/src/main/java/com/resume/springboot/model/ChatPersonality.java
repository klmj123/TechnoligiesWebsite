package com.resume.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name="ai_personality")
public class ChatPersonality {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name="personality")
	private String personality;
	
	@Column(name="user_message", columnDefinition = "Text")
	private String userMessage;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPersonality() {
		return personality;
	}

	public void setPersonality(String personality) {
		this.personality = personality;
	}

	public String getUserMessage() {
		return userMessage;
	}

	public void setUserMessage(String userMessage) {
		this.userMessage = userMessage;
	}
	
	
}
