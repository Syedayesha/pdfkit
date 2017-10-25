var express=require('express');
var path = require('path')
var app=express();
var multiparty = require('multiparty');
var form = new multiparty.Form();
var jade = require('jade');
var bodyParser=require('body-parser');
var util = require('util');
var ejs = require('ejs')
var fs=require('fs');
//var file;
var PDFDocument = require('pdfkit');
//app.set('view engine', 'ejs');
app.set('view engine', 'jade');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

 app.get('/api/file',function(req,res){
res.render('form');

});
app.post('/api/file',urlencodedParser, function(req, res) {
	
	console.log(req.body.title);
	var doc = new PDFDocument({
        size: 'letter'
    });
  
	   
	   doc.pipe(fs.createWriteStream('will.pdf'));
	   doc.text(req.body.title);
	   doc.end();
	 
	  
	  
	   /*for (var title in req.body) {
  if (req.body.hasOwnProperty(key)) {
    item = req.body[key];
    console.log(item);
	doc.text(item)
	 doc.end();
  }
}*/
	 
	  res.render('form', { title: 'Express' });   
});
	 

app.listen(3000,function(){
	console.log("server listening on 3000");
});