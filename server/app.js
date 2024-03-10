const express = require('express');
const ap = express;
const port = 8000;
const router = require ('./src/routes/Router');
var app = ap();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.static('public'));
app.use(router);

app.listen (port, ()=>{
    console.log('Puerto ' + (port) + ' corriendo')
})