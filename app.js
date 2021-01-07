const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
//const expressLayouts = require('express-ejs-layouts')

//My Routes
//MiddleWare

//app.use(expressLayouts)
app.set('view engine','ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'views')));
app.use('/img', express.static(path.join(__dirname,'img')))

app.use(bodyParser.json());

//my Routes
app.get('/', (req, res)=> {
    res.render('index.ejs')
})

app.use('/users',require('./routes/users'));



//DATA bASE Conncetivity
 mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected");
});

//Port
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App is running at ${port}`)
})

