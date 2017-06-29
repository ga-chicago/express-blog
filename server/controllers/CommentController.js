var express = require('express'),
    router = express.Router(),
    Comment = require('../models/Comment'),
    Post = require('../models/Post'),
    bodyParser = require('body-parser');

    router.use(bodyParser.urlencoded({extended: true}));

//POST request to /comments/new
router.post('/new', function(request, response){
  var comment = new Comment({text: request.body.text});
  comment.save();
  var commentId = comment.id;
  var postId = request.body.postId;
  Post.findById(postId, function(error, post){
    post.comments.push(commentId);
    post.save();
    response.redirect(request.get('referer'));
  })
})

module.exports = router;
