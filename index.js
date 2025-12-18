const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res)=>{
    res.send("phones data coming")
})

app.listen(port, ()=>{
    console.log(`getting data from port : ${port}`);
})