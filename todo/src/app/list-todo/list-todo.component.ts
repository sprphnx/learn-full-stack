import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  todos: Array<Object> = [
    { id: 1, desc: "Full Stack Developer" },
    { id: 2, desc: "Mobile Developer" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
