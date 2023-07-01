const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT||3000;
app.use(express.static('public'))
app.set('view engine','pug')
app.use('/',routes())
app.set('views',path.join(__dirname,'./views'))
app.listen(port,()=>{
  console.log('mi port ' + port)
})
module.export=app
