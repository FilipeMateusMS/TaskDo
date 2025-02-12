import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/Task/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  // This is a method that returns an Observable of Task[].
  // This is assyncronous, so it will return the tasks when it is ready.
  // This method will 
  getTasks(): Observable<Task[]> {
    //use the HttpClient to make a get request to the apiUrl.
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    console.log( "Passou pelo deleteTask do service")
     return this.http.delete<Task>( `${ this.apiUrl }/${ task.id }`);
  }

  updateTask( task: Task) : Observable<Task>{
      return this.http.put<Task>( `${ this.apiUrl }/${ task.id }`, task );
  }

  addTask( task: Task ) : Observable<Task>{
      return this.http.post<Task>( `${ this.apiUrl }`, task );
  }
}
