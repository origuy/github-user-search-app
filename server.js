const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
const app = express();
const port = process.env.PORT || 3000;
let url = `https://api.github.com/users/`;
const request = require('request');

const options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};


let urlencodedParser = bodyParser.urlencoded({extended:false});
let jsonParser = bodyParser.json()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.use(express.static(__dirname + '/public'));

app.get('/',(request, respond) => {
    respond.sendFile(__dirname + '/index.html')
})

