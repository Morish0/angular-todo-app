import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true, 
  imports: [FormsModule, NgForOf, NgIf], 
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';  
  tasks: { name: string, completed: boolean }[] = [];  

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  completeTask(index: number) {
    this.tasks[index].completed = true;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
