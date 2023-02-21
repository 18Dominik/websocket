//nodejs server package
import express from 'express';
import {WebSocketServer} from 'ws';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 
//start app
var app = express();
const port = 3000; 

//GET method route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  }); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }); 

//Create a websocket server and listen on port 8081
const wss = new WebSocketServer({port: 8081}); //wss = websocket server 

//When a client connects, send a message
wss.on("connection", ws => { //ws refers to single client websocket connection
    console.log("New Client connected!");
    ws.send('Welcome to the Websocket Server');

    ws.on('message', function message(event) {
        console.log('Received by the Client: %s', event);
      });

});





