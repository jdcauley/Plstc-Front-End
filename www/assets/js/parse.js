Parse.initialize("KK9bDjGBSVzJFVg0ooqkxPw0fZMZu7SxEnqhZJgL", "22CchwDImPY8o6z0llflrAUq9sbIj0NapqN95sGG");

$('#submit').click(function(){
  var emailAddress = $('#email').val();
  var NewSignUp = Parse.Object.extend("NewSignUp");
  var newSignUp = new NewSignUp();
  newSignUp.save({email: emailAddress}).then(function(success) {
    if(success){
      $('#signup').addClass('done');
      $('#form-success').addClass('show');
    } else {
      $('#signup').addClass('done');
      $('#form-error').addClass('show');
    }
  });
});
