firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    var user = firebase.auth().currentUser;
    if (user!=null)
    {
      window.location.href = "trial.html";
      
      
    }}
  
});



function log()
{
	var userEmail=document.getElementById("email_field").value;
	var userPass=document.getElementById("password_field").value;


firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error:"+ errorMessage);
});
}

function logout()
{
  firebase.auth().signOut().then(function(){


  window.location.href = "parallax.html";
});



}
