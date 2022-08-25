const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send(`<h2 style="text-align:center;padding-top:20%;">It's Working ...</h2>`);

    
})


app.get('/items',(req,res)=>{
    res.json({ status:1,data:[{ name:"Apple" },{ name:"Mango" },{ name:"Grape" }] });
})


app.listen(port,()=>{
    console.log(`Running at ${port}`);
});
