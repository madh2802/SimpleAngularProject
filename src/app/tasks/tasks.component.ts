import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId !: string;
  @Input({required:true}) name !: string;  
  isCreateTaskClicked = false;
  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    this.tasksService.removeTask(id);
  }
  
  onCreatetask(){    
    this.isCreateTaskClicked = true;
  }
  
  onClickCancel(){
    this.isCreateTaskClicked = false;
  }

}
