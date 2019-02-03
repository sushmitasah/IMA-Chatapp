
function reset()

{
var user = firebase.auth().currentUser;
var newPassword = document.getElementById("pass_field").value;

user.updatePassword(newPassword).then(function() {
  // Update successful.
  window.alert("Updation of password successfully");
}).catch(function(error) {
  // An error happened.
   var errorCode = error.code;
  var errorMessage = error.message;
  
  window.alert("Error:"+ errorMessage);
});
}

