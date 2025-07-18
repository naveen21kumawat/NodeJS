const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname+'public'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
// app.set(__dirname)


// app.get('/',(req,res)=>{
//   res.render("index");

// })

app.get('/profile/:username/:age',(req,res)=>{
  res.send(`Welcome, ${req.params.username} Age: ${req.params.age}`);

})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});