const express =require('express');
const bodyParser=require('body-parser');
const MongoClient=require('mongodb').MongoClient;
const router=express.Router();
const app=express();
const url=require('./secret.js')

console.log(url);




// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     console.log('connected');
//     db.close();
// })



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(8000,()=>{
    console.log('server ready');
})
