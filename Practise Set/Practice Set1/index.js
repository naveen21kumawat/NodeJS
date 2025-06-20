const express = require('express');
const app = express();
const path = require('path');
const fstat = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
  fstat.readdir(`./files`,(err,files)=>{
    res.render("index",{files: files});
  })
})
app.get('/file/:filename',(req,res)=>{
 fstat.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
  res.render('data',{nameOfFile: req.params.filename,filedata:filedata})
  console.log(filedata)
 }) 
})

app.post('/create',(req,res)=>{
//  fstat.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.content,(err)=>{
//   console.log("chal jljd");
//  })
//   res.redirect('/'); 
console.log("New Data Added")
fstat.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.content,(err)=>{

}
)
  res.redirect('/');}
)
app.listen(3000)