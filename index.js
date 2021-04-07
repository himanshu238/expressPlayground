const express = require('express');
const app = express();
const path = require('path')
app.use(express.urlencoded({extended:true}))
//parses form data into json//
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))



const comments = [
    {
        username:'Dante',
        comment:'cocky'
    },
    {
    username:'Dante111',
    comment:'cocky111'
    },
    {
    username:'Dante2222',
    comment:'cocky333'
    }
];



app.get('/comments', (req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new'); 
})

app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({username,comment})
    res.redirect('/comments')
})

app.get('*',(req,res)=>{
    res.send(`this is wrong page!! mf run`)
})

app.listen(3000,()=> {
    console.log("Port 3000 live")
})