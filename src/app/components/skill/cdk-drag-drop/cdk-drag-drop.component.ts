import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-cdk-drag-drop',
  templateUrl: './cdk-drag-drop.component.html',
  styleUrls: ['./cdk-drag-drop.component.scss']
})
export class CdkDragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  drop(event: CdkDragDrop<string[]>) {
    // 在一块则排序否则互换
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('排序后', this.done, this.todo);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
