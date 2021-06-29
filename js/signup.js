

  var firebaseConfig = {
    apiKey: "AIzaSyB9DA0RXOOIxPL3a0uN0ayF1YVm2K8FY6w",
    authDomain: "weblogin-e9077.firebaseapp.com",
    projectId: "weblogin-e9077",
    storageBucket: "weblogin-e9077.appspot.com",
    messagingSenderId: "410059547561",
    appId: "1:410059547561:web:d71f778068472f49e25ab8",
    measurementId: "G-5BREP594Q0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const auth = firebase.auth();

    function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

        promise.catch(e => alert(e.message));

        alert("Signed Up");
    }





