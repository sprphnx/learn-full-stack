package com.sprphnx.todo.greeting.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprphnx.todo.greeting.response.SayHelloResponse;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/greetings")
public class GreetingsController {

	@GetMapping("/say-hello")
	public SayHelloResponse sayHello() {
		return new SayHelloResponse("Hello Everbody :)");
	}
	
	@GetMapping("/say-hello/{name}")
	public SayHelloResponse sayHelloName(@PathVariable String name) {
		return new SayHelloResponse(String.format("Hello %s", name));
	}
	
}
