import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title = 'TODO List';
  ToDoList = [
    { task: 'Study', completed: true },
    { task: 'Pay Bills', completed: true },
    { task: 'Workout', completed: false },
    { task: 'Walk Dog', completed: false },
    { task: 'Vacuum', completed: false },
    { task: 'Do Dishes', completed: false },
    { task: 'Wash and Dry Laundry', completed: false },
    { task: 'Put Away Laundry', completed: false },
    { task: 'Have Fun', completed: false },
  ];

 
  searchText = '';
  addText = '';


  constructor() {}

  ngOnInit(): void {}

  // any new method should go here, methods not functions here
  newlyCompletedItem(index: number) {
    this.ToDoList[index].completed = true;
  }

  removeTask(index: number) {
    this.ToDoList.splice(index, 1);
  }

  addToList(task: string) {
    this.ToDoList.push({task:this.addText, completed:false})
  }
 }
