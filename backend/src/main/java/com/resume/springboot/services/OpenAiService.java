package com.resume.springboot.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.azure.ai.inference.ChatCompletionsClient;
import com.azure.ai.inference.ChatCompletionsClientBuilder;
import com.azure.ai.inference.models.ChatCompletions;
import com.azure.ai.inference.models.ChatCompletionsOptions;
import com.azure.ai.inference.models.ChatRequestAssistantMessage;
import com.azure.core.credential.AzureKeyCredential;
import com.azure.core.http.HttpClient;
import com.azure.core.http.okhttp.OkHttpAsyncHttpClientBuilder;
import com.resume.springboot.model.ChatHistory;
import com.resume.springboot.model.ChatPersonality;
import com.resume.springboot.repository.ChatHistoryRepository;
import com.resume.springboot.repository.ChatPersonalityRepository;

import jakarta.annotation.PostConstruct;

import com.azure.ai.inference.models.ChatRequestMessage;
import com.azure.ai.inference.models.ChatRequestSystemMessage;
import com.azure.ai.inference.models.ChatRequestUserMessage;

@Service
public class OpenAiService {
								//Variables
	//Get AI access
	private final String aiToken = "placeholder";
	private final String baseUrl = "placeholder";
	//final private String model = "placeholder";
	private final String model= "placeholder";
	
	@Autowired
	private ChatHistoryRepository chatHistoryRepository;
	@Autowired
	private ChatPersonalityRepository chatPersonalityRepository;

	
	//private HttpClient httpClient = new OkHttpAsyncHttpClientBuilder().build();
	//private List<ChatRequestMessage> chatMessages = new ArrayList<>();
	
	private ChatCompletionsClient client = new ChatCompletionsClientBuilder()
			.credential(new AzureKeyCredential(aiToken))
			.endpoint(baseUrl)
			.buildClient();
	
	
							//Public Methods
	
	//Craft AI message
	public String askBot(String message) {		
				
		/*List<ChatRequestMessage> chatMessages = Arrays.asList(
					new ChatRequestSystemMessage(""),
					new ChatRequestAssistantMessage(""),
					new ChatRequestUserMessage(message)
					);*/
		List<ChatRequestMessage> chatMessages = new ArrayList<>();
		addChatMessages(message);
		List<ChatHistory> chatHistory = getHistory();
		
		for(int i=0; i < chatHistory.size();i++) {
			if(chatHistory.get(i).getUserMessage() != null) {
				chatMessages.add(new ChatRequestUserMessage(chatHistory.get(i).getUserMessage()));
			}
			
			if(chatHistory.get(i).getAssistantMessage()!=null) {
				chatMessages.add(new ChatRequestAssistantMessage(chatHistory.get(i).getAssistantMessage()));
			}
			
			if(chatHistory.get(i).getSystemMessage() != null) {
				chatMessages.add(new ChatRequestSystemMessage(chatHistory.get(i).getSystemMessage()));
			}
			
		}
		
		ChatCompletionsOptions promptOptions = new ChatCompletionsOptions(chatMessages);
		promptOptions.setModel(model);
		
		ChatCompletions prompt = client.complete(promptOptions);
		
		String response = prompt.getChoice().getMessage().getContent();
		
		addMessageResponseToHistory(response);
		
		return response;
	}
	
	public void restartConversation() {
		chatHistoryRepository.deleteAll();
		
	}
	
	public List<ChatPersonality> getChatPersonalities(){
		return chatPersonalityRepository.findAll();
	}
	
	public void setPersonality(long id) {
		
		ChatPersonality chatPersonality = new ChatPersonality();
		ChatHistory chatHistory = new ChatHistory();
		
		chatPersonality = chatPersonalityRepository.getReferenceById(id);
		chatHistory.setUserMessage(chatPersonality.getUserMessage());
		
		chatHistoryRepository.save(chatHistory);
	}
	
	
							//Private Methods
	
	private void addMessageResponseToHistory(String assistantResponse) {
		ChatHistory chatHistory = new ChatHistory();
		
		chatHistory.setAssistantMessage(assistantResponse);
		chatHistoryRepository.save(chatHistory);
	}
	
	//private List<ChatRequestMessage> addChatMessages(String newUserMessage) {
	private void addChatMessages(String newUserMessage) {
	    // Include previous conversation + new user message
	    //chatMessages.add(new ChatRequestUserMessage(newUserMessage));
		ChatHistory chatHistory = new ChatHistory();
		
		chatHistory.setUserMessage(newUserMessage);
		chatHistoryRepository.save(chatHistory);
	}
	  
	private List<ChatHistory> getHistory(){
		return chatHistoryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
	}
	

	
}
