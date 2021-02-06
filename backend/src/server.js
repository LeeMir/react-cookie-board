const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);
const shortid = require('shortid');

db.defaults({ posts:[] }).write();

app.use(cors());


app.use(bodyParser.json());
//app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.use('/api/list', (req,res) => {
    res.json(db.get('posts').value());
});

app.use('/api/write', (req,res) => {
    const id = shortid.generate();
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    db.get('posts').push({
        id:id,
        title:title,
        author:author,
        content:content
    }).write();
    res.json(id);
});

app.use('/api/read', (req,res) => {
    const id = req.body.id;
    console.log(id);
    res.json(db.get('posts').find({id:id}).value());
});

app.use('/api/update', (req,res) => {
    const id = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    db.get('posts')
        .find({id:id})
        .assign({
            title:title,
            author:author,
            content:content
        }).write();
    res.json(id);
});

app.use('/api/delete', (req,res) => {
    const id = req.body.id;
    db.get('posts')
        .remove({id:id})
        .write();
    res.json(id);
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});