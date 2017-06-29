var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path');

    require('./db/db.js');

var PostController = require('./controllers/PostController');
var CommentController = require('./controllers/CommentController');


app.use('/posts', PostController);
app.use('/comments', CommentController);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

server.listen(3000, function(){
  console.log('listening on port 3000')
})
