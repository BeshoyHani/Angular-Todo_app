import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskID: any = null;
  task!: any;
  constructor(private taskServ: TasksService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id');
    this.task = this.taskServ.tasks[this.taskID];
  }
  update_task(){
    this.taskServ.update_task(this.taskID, this.task);
    this.router.navigate(['/']);
  }
  delete_task(){
    this.taskServ.deleteTask(this.taskID);
    this.router.navigate(['/']);
  }

}
