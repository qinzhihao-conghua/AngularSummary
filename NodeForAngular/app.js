const express = require("express");
const router = require("./router");
var bodyParser=require("body-parser");

const app = express();

//设置允许跨域访问该服务.
app.all(function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    // //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    // next();

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Mx-ReqToken,X-Requested-With,token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// 配置中间件
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router);

app.listen(3000, () => {
    console.log("服务已经启动，请监听3000端口");
})