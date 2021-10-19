import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/task.model';


@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task?.state }}">
      <label class="checkbox">
        <input
          type="checkbox"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          disabled="true"
          name="checked"
        />
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      <div class="title">
        <input
          type="text"
          [value]="task?.title"
          readonly="true"
          placeholder="Input title"
        />
      </div>
      <div class="actions">
        <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
          <span class="icon-star"></span>
        </a>
      </div>
    </div>
  `
})

export class TaskComponent {
  @Input() task: Task;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onArchivedTask = new EventEmitter<Event>();

  // component method to trigger the onPinEen @params() id: string;
  onPin(id: any): void {
    this.onPinTask.emit(id);
  }

  // component method to trigger the onArchivedEvent @params() id: string;
  onArchived(id: any): void {
    this.onArchivedTask.emit(id);
  }
}
