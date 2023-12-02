const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/students', function(req, res){
  var data = [
    {id:1, name:'cezar'},
    {id:2, name:'mhmd'},
    {id:3, name:'rony'},
    {id:4, name:'hicham'}
  ]
  res.send(data)
})
app.listen(PORT)