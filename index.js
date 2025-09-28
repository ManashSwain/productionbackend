import express from 'express';
import dotenv from'dotenv';
const app = express();
const port = 5000 || process.env.PORT ;
dotenv.config()

app.get('/' , (req,res)=>{
    res.send("Hello world");
})

app.get('/details', (req,res)=>{
    res.json({
        name: "manash",
        age: 15
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
