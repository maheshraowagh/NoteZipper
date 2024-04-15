const express = require('express')
const notes = require('./data/notes')
 const dotenv = require('dotenv')

 const app = express();
 const PORT = process.env.PORT||5000;
 dotenv.config();

app.get('/',(req,res)=>{
    res.send("Api is running")
});
app.get('/api/notes', (req,res)=>{
    res.json(notes)
})

app.get('/api/notes/:id', (req,res)=>{
    const data = notes.find((n)=> n._id===req.params.id
    );
    res.send(data);
})
app.listen(PORT,console.log('server started on port 5000'))