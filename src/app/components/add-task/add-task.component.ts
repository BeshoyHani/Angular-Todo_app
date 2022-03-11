import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskServ: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  save_task(title: any, desc: any){
    this.taskServ.save_task(title.value, desc.value);
    this.router.navigate(['/']);
  }

}
