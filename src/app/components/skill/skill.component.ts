import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  sideBarMenu = [
    { url: './pdf', title: 'pdf导出与打印' },
    { url: './drag-drop', title: 'cdk拖拽' },
    { url: './overlay', title: '浮层' },
  ]

  ngOnInit(): void {
  }

}
