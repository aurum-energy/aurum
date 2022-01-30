
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("info-name").innerHTML = email_id;
    }
  } else {
    if (document.URL.includes("main_login.html") ) {
  }
  else {
    window.location.replace("pages/main/main_login.html");
  }
    // User is signed out
    // ...
    //window.location.href = "./main_login.html";
    //window.location.href = "../../pages/examples/main_login.html";
    //window.location.replace("../../pages/examples/main_login.html");
  }
});


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "../../internal_index.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    $( "div.modal-body" ).text(errorMessage)
    $('#exampleModal').modal('show')
  });
}

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "./pages/main/main_login.html";
  }).catch((error) => {
    // An error happened.
    window.alert("An error happened.")
  });
}
