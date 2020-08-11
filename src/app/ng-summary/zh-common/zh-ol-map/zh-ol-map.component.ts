import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, transform } from 'ol/proj';
import { defaults, MousePosition } from 'ol/control';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'zh-ol-map',
  templateUrl: './zh-ol-map.component.html',
  styleUrls: ['./zh-ol-map.component.scss']
})
export class ZhOlMapComponent implements OnInit {

  constructor() { }
  @Output()
  getCoordinate = new EventEmitter<number[]>()
  map: Map;

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const that = this;
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: 'conghua'
          })
          // source: new XYZ({
          //   url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          // })
        })
      ],
      view: new View({
        // center: fromLonLat([108.366492, 22.818136]),
        center: [108.366492, 22.818136],
        zoom: 14,
        maxZoom: 20,
        minZoom: 10,
        // projection: 'EPSG:3857'
        projection: 'EPSG:4326'
      }),
      controls: defaults({
        attributionOptions: {
          // 是否展示版权信息按钮
          collapsible: true,
          // 初始是否展开版权信息
          collapsed: true,
          // 关闭版权时按钮显示的文字
          label: 'zh',
          // 展开版权时按钮显示的文字
          collapseLabel: 'zh',
          // 鼠标移入按钮是显示的文字
          tipLabel: 'zh'
        }
      }).extend([
        new MousePosition({ projection: 'EPSG:4326' }),
      ])
    });
    this.map.on('singleclick', (event) => {
      // console.log(that.map.getEventCoordinate(event));
      // console.log(transform(event.coordinate, 'EPSG:3857', 'EPSG:4326'));
      console.log(event.coordinate);
      that.getCoordinate.emit(event.coordinate);
    })
  }

}
