var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var url = require('url');
var Client = require('node-rest-client').Client;

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname))

var host = 'hfdvteleijbos01.intra.searshc.com';
var port = "8888";

// View Services
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

// Other Services
app.get('/lookup', function(req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	
	console.log(query.offerSearchText);
	console.log(query.datasource);
	var offerSearchText = query.offerSearchText;
	var ds = query.datasource;
	var args = {
		offerSearchText : offerSearchText,
		datasource : ds
	};
		
	performPost("http://hfdvteleijbos01.intra.searshc.com:8888/lookup", args, function(data) {
		res.setHeader('Content-Type', 'application/json');
		res.send(data);
	});
});

process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err);
});

var server = app.listen(9999, function() {
	console.log('Listening on port %d', server.address().port);
});

function performPost(url, args, callback) {
	var client = new Client();
	var postargs = {
        	headers:{'Content-Type' : 'application/json'},
        	data:args
    	};
	console.log(postargs);
	client.post(url, postargs, function(data, response){
		console.log(data.toString());
		data = data.toString();
		data = JSON.parse(data);
		console.log(data);
		callback(data);
	});
}