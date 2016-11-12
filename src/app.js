import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

let app = express();
let server = http.Server(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));

app.route('/')
	.get((req, res) => {
		res.sendFile(__dirname + "/public/pages/index.html");
	});

server.listen(8080, () => {
  console.log('Server started up on port 8080...');
});

