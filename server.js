let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.use(express.static(__dirname + '/public'))
app.get('/',(request, respond) => {
    respond.sendFile(__dirname + '/index.html')
})