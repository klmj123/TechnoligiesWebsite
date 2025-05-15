package com.resume.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name="ai_chat_history")
public class ChatHistory {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name="user_messages", columnDefinition = "Text")
	private String userMessage;
	
	@Column(name="assistant_messages", columnDefinition = "Text")
	private String assistantMessage;
	
	@Column(name="system_messages", columnDefinition = "Text")
	private String systemMessage;
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserMessage() {
		return userMessage;
	}

	public void setUserMessage(String userMessages) {
		this.userMessage = userMessages;
	}

	public String getAssistantMessage() {
		return assistantMessage;
	}

	public void setAssistantMessage(String assistantMessages) {
		this.assistantMessage = assistantMessages;
	}

	public String getSystemMessage() {
		return systemMessage;
	}

	public void setSystemMessage(String systemMessages) {
		this.systemMessage = systemMessages;
	}

	
}
