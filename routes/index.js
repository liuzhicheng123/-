var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
var data=fs.readFileSync("public/1.txt","utf-8");
var num=data.toString().slice(-1);
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var num2=num++;
  fs.writeFileSync("public/1.txt","页面刷新："+num2)
  res.send("页面刷新："+num2)
  //fs.writeFile("public/1.txt",data++)

});
router.get('/liu', function(req, res, next) {
  res.render('liu', { title: 'Express' });
});

module.exports = router;
