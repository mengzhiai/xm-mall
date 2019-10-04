var express = require('express');
var router = express.Router();
var fs = require('fs');
var image = require("imageinfo");

router.get('/', function(req, res, next) {

    function readFileList(path, filesList) {
        var files = fs.readdirSync(path);
        files.forEach(function(itm, index) {
            var stat = fs.statSync(path + itm);
            if (stat.isDirectory()) {
                //递归读取文件
                readFileList(path + itm + "/", filesList)
            } else {

                var obj = {}; //定义一个对象存放文件的路径和名字
                obj.path = path; //路径
                obj.filename = itm //名字
                filesList.push(obj);
            }

        })

    }
    var getFiles = {
        getFileList: function(path) {
            var filesList = [];
            readFileList(path, filesList);
            return filesList;
        },
        getImageFiles: function(path) {
            var imageList = [];

            this.getFileList(path).forEach((item) => {
                var ms = image(fs.readFileSync(item.path + item.filename));

                ms.mimeType && (imageList.push(item.path + item.filename))
            });
            res.send(imageList);
            return imageList;

        }
    };

    getFiles.getImageFiles("F:/textImages/");
    //getFiles.getFileList("./public/images/");
});

module.exports = router;