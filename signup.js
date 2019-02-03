
var database=firebase.database();

function handleSignUp()
{


var email=document.getElementById('email').value;
var password=document.getElementById('password').value;

if(email.length == 0)//if(address.value.length==0)
{
  window.alert("please enter the email");
  return false;
}

if(password.length==0)
{
  window.alert("please enter the password");
  return false;

}

if(password.length!=6)
{
  window.alert("please enter the password of 6 characters.");
  return false;

}




var email=document.getElementById("email").value;
var password=document.getElementById("password").value;


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(){


  window.location.href = "trial.html";
}

);

}


