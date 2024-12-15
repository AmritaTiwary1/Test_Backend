const express = require('express');
require('dotenv').config();
const app = express();

const port = 4000;

app.get('/',(req,res)=>{
    res.send("Home");
})

app.get('/twitter', (req,res)=>{
    res.send("Twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>LOGIN....</h1>')
})

app.listen(port , ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);   
})