const fs=require("fs");
fs.readFile("D:/front-endCode/nodejs/01-helloword.js","UTF-8",(err,doc)=>{
	if(!err){
		fs.writeFile("C:/Users/lenovo/Desktop/demo.js",doc,err=>{
			if(err){
				console.log(err);
			}
			console.log("写入成功！");
		});
		console.log(doc);
	}else{
		console.log(err);
	}
});

