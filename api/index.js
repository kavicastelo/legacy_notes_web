const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require("http");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
mongoose.set('strictQuery', false);

// =======================================================
const noteRoute = require('./router/noteRoute');
const accountRoute = require('./router/accountRoute');
// =======================================================

const server = http.createServer(app);
server.maxConnections = 1000;
const serverPort = 5000;
const baseURL = process.env.BASE_URL;

mongoose.connect(process.env.URL).then(()=>{   //localhost
    server.listen(process.env.PORT || serverPort,()=>{
        console.log(`server is running and up on port ${serverPort}`);
    });
}).catch(err=>{
    console.log(err);
})

app.get('/',(req, res)=>{
    console.log(req.body);
    res.end('Hello!')
});

app.use(baseURL+'notes', noteRoute);
app.use(baseURL+'account', accountRoute);

