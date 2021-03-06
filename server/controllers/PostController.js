var express = require('express'),
    router = express.Router(),
    Post = require('../models/Post'),
    bodyParser = require('body-parser');

    router.use(bodyParser.urlencoded({extended: true}));

//Get route to /posts/all that responds with a view of all posts
router.get('/all', function(request, response){
  Post.find(function(err, posts){
    response.render('posts', {allPosts: posts});
  })
})

//Get request to /posts/all/:id
router.get('/all/:id', function(request, response){
  var id = request.params.id;
  Post.findById(id).populate('comments').exec(function(err, post){
    console.log(post)
    response.render('post', post);
  })
})

//POST request to /posts/form
router.post('/form', function(request, response){
  // grab info from request body
  var textVar = request.body.text;
  var titleVar = request.body.title;
  var authorVar = request.body.author;
  var dateVar = request.body.date;

  //create and save new post
  var post = new Post({text: textVar,
                        title: titleVar,
                        author: authorVar,
                        date: dateVar
                      })
  post.save();

  response.redirect('/posts/all');
})



///////////////////////////////////
//////////////API//////////////////
///////////////////////////////////

// PATCH request to /posts/:id
router.patch('/:id', function(request, response){
  var id = request.params.id;
  Post.update({_id: id}, request.body, function(err){
    Post.findById(id, function(err, post){
      response.json(post);
    })
  })
});

// DELETE request /posts/:id
router.delete('/:id', function(request, response){
  var id = request.params.id;
  Post.findById(id, function(err, post){
    post.remove();
    response.send("success");
  })
})








module.exports = router;
