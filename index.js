const express = require('express');
const app = express();
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


const comments = [
    {username:'Dante',
    comment:'cocky'
},
{username:'Dante111',
    comment:'cocky111'
},{username:'Dante2222',
comment:'cocky333'
}
];

app.post('/comments',(req,res)=>{
    console.log(req.body);
const{username,comment} = req.body;
comments.push({username,comment});
res.redirect('comments');
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
})

// app.get('/:ninja',(req,res) => {
//     const {ninja: id} = req.params;
//     console.log(req.params);
//     res.send(`this is my response ${id}`);
// })

// app.post('/ninja',(req,res) => {
//     res.send("this is my post response")
//     console.log(req.body);
// })

app.listen(3000,()=> {
    console.log("Port 3000 live")
})