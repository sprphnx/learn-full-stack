import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  todos: Array<Todo> = [
    new Todo(1, "Learn Angular", new Date(), false),
    new Todo(2, "Learn Full Stack", new Date(), false),
    new Todo(3, "Learn Flutter", new Date(), false),
  ];

  constructor() {}

  ngOnInit(): void {}
}

export class Todo {
  constructor(
    public id: Number,
    public desc: String,
    public date: Date,
    public isDone: Boolean
  ) {}
}
