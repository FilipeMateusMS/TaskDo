import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/Task/Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  protected tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void { // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   
    // This will call the getTasks method from the taskService.
     this.taskService.getTasks().subscribe( (tasksData) => {
      this.tasks = tasksData;
      console.log(this.tasks);
    });
  }

  AddTask(task: Task) {
    this.taskService.addTask( task ).subscribe( ( task ) => {
      this.tasks.push( task );
    });
  }

  deleteTask(task: Task) {
      console.log( "Passou pelo deleteTask do tasks.ts")
      this.taskService.deleteTask( task ).subscribe(() => 
        ( this.tasks = this.tasks.filter( (t) => t.id !== task.id )));
  }

  toogleFinalized( task: Task ){
    task.isFinalized = !task.isFinalized;
    this.taskService.updateTask( task ).subscribe();
  } 

  updateTask( task: Task ){
    task.isFinalized = !task.isFinalized;
    this.taskService.updateTask( task ).subscribe();
  }
}
