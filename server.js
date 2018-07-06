const express = require('express');

const app = express();

app.get('/hello',(req,res)=>{
    res.send('hello'+ req.query.name)
});

app.listen(3000,(args)=>{
  console.log(args);
})
