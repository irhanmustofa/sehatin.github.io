firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        // var email_id = user.email;
        // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        window.location.href='tanyadokter.html'
        return false
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("username").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
    var out = confirm("yakin keluar?");
    if (out) {
      window.location.href = "login2.html";
    } else {
      window.location = "tanyadokter.html";
    }
  }
  