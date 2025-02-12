import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  // pt_Br: O ponto de exclamação é usado para dizer ao TypeScript que a variável não será nula.
  // en: The exclamation point is used to tell TypeScript that the variable will not be null.
  // pt_Br: O decorator @Input() é usado para dizer ao Angular que a variável task será passada de fora.
  // en: The @Input() decorator is used to tell Angular that the task variable will be passed from outside.
  @Input() task!: Task; 
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToogleFinalized = new EventEmitter<Task>();
  @Output() onUpdateTask = new EventEmitter<Task>();

  faTimes = faTimes;

  onDelete( task: Task) {
    console.log( 'Passou pelo onDelete de task.item.ts')
    this.onDeleteTask.emit( task );
  }

  onToogle(task: Task){
    this.onToogleFinalized.emit( task );
  }

  onUpdate( task: Task){
    this.onUpdateTask.emit( task );
  }
}
