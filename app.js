const mongoose = require('mongoose');
const express = require('express');

const app = express();
const bodyParser = require("body-parser");

//My Routes


//MiddleWare
app.use(bodyParser.json());

//My Routes



//DATA bASE Conncetivity
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected");
});

//Port
const port =  8000;

app.listen(port, () => {    
    console.log(`App is running at ${port}`);
});