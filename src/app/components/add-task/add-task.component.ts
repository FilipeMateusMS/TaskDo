import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task/Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Task>();

  nmTask: string = '';
  nmCategory: string = '';
  isFinalized: boolean = false;
  mostrarAddTarefa: boolean = true;

  onSubmit(){
    if( !this.nmTask ) {
      alert( "Adicione uma tarefa!" );
      return;
    }
    
   const newTask: Task = {
      nmTask: this.nmTask,
      nmCategory: this.nmCategory,
      isFinalized: this.isFinalized
    };   
    
    this.onAddTask.emit( newTask );
  }

  updateVisualization() {
    this.mostrarAddTarefa = !this.mostrarAddTarefa;
  }
}
