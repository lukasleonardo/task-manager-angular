import { Task } from './../../Task';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delTask: EventEmitter<Task> =new EventEmitter;
  @Output() toggleTask: EventEmitter<Task> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  deleteOnClick(task){
    this.delTask.emit(task);
  }

  onToggle(task){
    this.toggleTask.emit(task)
  }
}
