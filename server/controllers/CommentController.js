var express = require('express'),
    router = express.Router(),
    Comment = require('../models/Comment'),
    bodyParser = require('body-parser');

    router.use(bodyParser.urlencoded({extended: true}));

//POST request to /comments/new
router.post('/new', function(request, response){
  var comment = new Comment({text: request.body.text});
  comment.save();
  response.redirect(request.get('referer'));
})

module.exports = router;
