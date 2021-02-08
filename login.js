

function sg() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){ 
    var user = result.user;
    console.log(result)
    alert("Logged In")

    window.location.replace("index.html")
  }).catch((error) => {
    var email = error.email;
    console.log(error)
    alert("Can't Logging In")
  })
}
firebase.auth().onAuthStateChanged(firebaseUser =>{


  if (firebaseUser) {
    document.getElementById('lin').style.display = "none"
    document.getElementById('lout').style.display = "block"
    document.getElementById('post').style.display = "block"
    document.getElementById('ud').style.display = "inline-flex"
  }
  else{
    document.getElementById('post').style.display ="none"
    document.getElementById('lin').style.display = "block"
    document.getElementById('lout').style.display = "none"
   document.getElementById('or').style.display = "grid"
   document.getElementById('ud').style.display = "none"
 }

 var user = firebase.auth().currentUser;
 var em = document.getElementById('em')
 var un = document.getElementById('un')
 var dp = document.getElementById('dp')
 if (user != null) {
  var email = user.email
  em.innerHTML =  email
  var username = user.displayName
  un.innerHTML = username
  var pic = user.photoURL
  dp.src = pic
}
})


