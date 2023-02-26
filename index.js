const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const router = require('./router.js');
const app = express()
const db = "mongodb+srv://<nickname>:<password>@cluster0.plkiuve.mongodb.net/?retryWrites=true&w=majority"
const port = 3002;

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/', router)

async function startServer(){
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(port, () => console.log('listening on port ' + port))
    }
    catch(error){
        console.log(error);
    }
}

startServer();
