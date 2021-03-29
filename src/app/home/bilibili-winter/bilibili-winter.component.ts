import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-bilibili-winter',
  templateUrl: './bilibili-winter.component.html',
  styleUrls: ['./bilibili-winter.component.scss']
})
export class BilibiliWinterComponent implements OnInit {

  /**
   * bilibili冬
   */
  constructor() { }

  ngOnInit(): void {
    let startingPoint;
    const header = document.querySelector('.winter') as HTMLElement;

    header.addEventListener('mouseenter', (e: MouseEvent) => {
      startingPoint = e.clientX;
      header.classList.add('moving');
    })

    header.addEventListener('mouseout', (e: MouseEvent) => {
      header.classList.remove('moving');
      header.style.setProperty('--percentage', '0.5');
    })

    header.addEventListener('mousemove', (e: MouseEvent) => {
      let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;

      header.style.setProperty('--percentage', percentage.toString());
    })
  }

}
