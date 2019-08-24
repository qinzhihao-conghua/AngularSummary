const express = require("express");
const router = express.Router();

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// 默认的存储
// var upload = multer({ dest: 'uploads/' });
// 设置的存储
var upload = multer({ storage: storage });

router.get("/api", (request, response) => {
    console.log("有人请求了");
    response.send('{"ff":"ss"}');
});

router.post("/uploadFile", upload.single('uploadedfile'), (request, response, next) => {
    console.log("有人post请求上传了");
    console.log(request.files);//upload.any()
    console.log(request.file);//upload.single('uploadedfile')
    response.send('{"ff":"ss"}');
});
router.get("/uploadFile", (request, response) => {
    console.log("有人get请求上传了");
    response.send('{"ff":"ss"}');
});

router.post("/fileReader", (request, response) => {
    console.log("有人fileReader请求上传了");
    response.send('{"ff":"ss"}');
});

module.exports = router;