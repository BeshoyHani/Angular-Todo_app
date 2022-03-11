import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskServ: TasksService) { }

  ngOnInit(): void {
  }

  deleteTask(i: number){
    this.taskServ.deleteTask(i);
  }
}
