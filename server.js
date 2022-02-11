let express = require('express');
let app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.get('/',(request, respond) => {
    respond.sendFile(__dirname + '/index.html')
})