$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})
$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


v
$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

v

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})

$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})


$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})



$('#edit-button').on('click', function(){
  $('#title-text').hide();
  $('#title-edit').show();
})

var postId = window.location.pathname.split('/')[3]

$('#save-button').on('click', function(){
  var input = $('#title-input').val();

  $.ajax({
    method: 'PATCH',
    url: '/posts/' + postId,
    data: {title: input},
    success: function(response){
      $('#title-text').show();
      $('#title-edit').hide();
      $('#title').text(response.title);
    }
  })
})

$('#delete').on('click', function(){
  $.ajax({
    method: 'DELETE',
    url: '/posts/' + postId,
    success: function(response){
      window.location = '/posts/all'
    }
  })
})
