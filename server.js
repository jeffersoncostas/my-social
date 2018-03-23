const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//api para o mongodb
const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//DIST Folder
app.use(express.static(path.join(__dirname, 'dist')));


//API location
app.use('/api,', api);

//enviar request to Angular app
app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

//Setar porta
const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);

server.listen(port,() => console.log(`Running on localhost:${port}`));