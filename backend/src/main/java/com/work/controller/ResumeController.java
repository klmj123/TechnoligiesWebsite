package com.work.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class ResumeController {
	
	@RequestMapping("/hello")
    @ResponseBody
 
    // Method
    public String helloWorld()
    {
 
        // Print statement
        return "Hello World!";
    }

}
