package com.sprphnx.todo.core.response;

import java.util.List;

import com.sprphnx.todo.core.dto.Todo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllTodoResponse {

	private List<Todo> todos;
	
}
