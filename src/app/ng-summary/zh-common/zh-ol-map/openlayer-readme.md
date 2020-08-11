# 使用地图前需要知道地球投影
# openlayer默认的投影是3857
> ```EPSG:3857```是墨卡托投影，坐标值是公里网
> ```EPSG:4326```是WGS84，坐标值是经纬度

> ```npm install ol``` 安装openlayer
> ```npm i -D @types/ol``` 安装openlayer的ts支持
> "node_modules/ol/ol.css" 在angular.json的styles中引入openlayer的css