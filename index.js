const express = require('express');
const app = express();
const mongoose=require('mongoose');
const config=require('./config/database');
const path=require('path');

var port=8080; 
mongoose.Promise=global.Promise; 
mongoose.createConnection(config.uri,(err) => {
	if(err) {
		console.log('Could not connect to databse: ',  err);
	} else { 
		console.log('Connected to databse: ' + config.db );
	}
});

app.use(express.static(__dirname+'/client/dist'));

app.get('*',(req,res)=> {
	res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(port,()=>{
	console.log("listening to the app at port: "+port);
});