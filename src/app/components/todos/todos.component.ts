import { Component, OnInit } from '@angular/core';

// here we import a class 'Todo' from the models folder
import {Todo} from './../../models/Todo';

@Component({
  // with selecter we use this component, its like an id in our html
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // variables declared in here can be injected in the html {{name}}
  // title = "I want to inject this string"; --> {{title}}

  // this creates an empty array called todos, consisting Todo objects
  todos:Todo[];
  inputTodo:string="";

  constructor() { }
  // does things on initialisation
  ngOnInit(): void {
    // this keyword to get variables from inside our classes
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: false
      }      
    ]
  }

  toggleDone(id:number) {
    // loop through all the todos and if the i matches with the id it reverses the completed bool
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = ""
  }
}

