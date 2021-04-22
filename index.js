const express = require('express');
const app = express();
const path = require('path')
app.use(express.urlencoded({extended:true}))
//parses form data into json//
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const { v4: uuidv4 } = require('uuid');
uuidv4();


const comments = [
    {
        id:1,
        username:'Dante',
        comment:'This is first comment'
    },
    {
        id:2,
        username:'Dante111',
        comment:'This is the second comment by 111'
    },
    {
        id:3,
        username:'Dante2222',
        comment:'This is the third in the list by 222'
    }
];



app.get('/comments', (req,res)=>{
    res.render('comments/index',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new'); 
})

app.post('/comments',(req,res)=>{
    const {username, comment,id} = req.body;
    comments.push({username,comment,id});
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id == parseInt(id));
    res.render('comments/show',{comment});
})

app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    console.log(req.body)
    const foundComment = comments.find(c=>c.id == parseInt(id));
    foundComment.comment = newComment;
    res.redirect('/comments')
})

app.get('*',(req,res)=>{
    res.send(`this is wrong page!! mf run`);
})

app.listen(3000,()=> {
    console.log("Port 3000 live");
})