import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [
    {
      title: 'Besh',
      description: ''
    }
  ];
  constructor() { }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
  }

  save_task(title: string, description: string){
    this.tasks.push({
      title,
      description
    })
  }
  
  update_task(id: number, task: Task){
    this.tasks[id] = task;
  }
}
