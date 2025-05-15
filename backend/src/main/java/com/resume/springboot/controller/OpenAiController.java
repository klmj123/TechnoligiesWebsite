package com.resume.springboot.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.resume.springboot.model.ChatPersonality;
import com.resume.springboot.services.OpenAiService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/ai")
public class OpenAiController {
	
	@Autowired
	private OpenAiService myBotService;
	
	@GetMapping("/openAi")
	public List<ChatPersonality> getPersonalities(){
		return myBotService.getChatPersonalities();
	}
	
	//Ask Ai
	@PostMapping("/openAi")
	public ResponseEntity<String> askBot(@RequestBody String message) {
		ObjectMapper mapper = new ObjectMapper();
		String jsonResponse = "";
		
		try {
			jsonResponse = mapper.writeValueAsString(myBotService.askBot(message));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.ok(jsonResponse);
	}
	
	@PostMapping("/openAi/setPersonality")
	public ResponseEntity<Map<String,Boolean>> setAiPersonality(@RequestBody Map<String,Long> request){
		
		myBotService.setPersonality(request.get("id"));
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Personality set", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/openAi")
	public ResponseEntity<Map<String,Boolean>> restartConversation(){
		
		myBotService.restartConversation();
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Conversation restarted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
}
