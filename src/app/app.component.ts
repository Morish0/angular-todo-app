import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./todo/todo.component";
//import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
}
