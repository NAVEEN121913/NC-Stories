var firebaseConfig = {
  apiKey: "AIzaSyBAf0UdPci7PF569boleWAErs4yphuDdwU",
  authDomain: "nc-blog-9add2.firebaseapp.com",
  projectId: "nc-blog-9add2",
  storageBucket: "nc-blog-9add2.appspot.com",
  messagingSenderId: "1050218274123",
  appId: "1:1050218274123:web:72d39b22c6619db9275cce"
};
firebase.initializeApp(firebaseConfig);




function post() {
  const heading = document.getElementById('heading').value
  const textArea = document.getElementById('textArea').value
  if(heading == ""){
   document.getElementById("pb").disabled = true;
   document.getElementById("pb").style.opacity = "50%"
   alert("Please fill Heading to post your story.")
   window.location.reload()
   return false
 }
 if (textArea == "") {
  document.getElementById("pb").disabled = true;
  document.getElementById("pb").style.opacity = "50%"
  alert("Please Enter Story")
  window.location.reload()
  return false
}
const user = firebase.auth().currentUser;
const name = user.displayName;
const email = user.email
const pic = user.photoURL
firebase.database().ref("blog").push().set({
  "heading": heading,
  "textArea": textArea,
  "userName":name
})
document.getElementById("blogPost").style.display = "none"
window.location.replace("index.html")
}

firebase.database().ref("blog" ).on('child_added', function(snapshot) {
  var html = "";
  html +="<li class='li card text-center' >";
  html += "<h2 class='h2 card-header bg-primary' >";
  html += snapshot.val().heading;
  html += "</h2>";
  html +="<p class='p card-text text-left'>"
  html += snapshot.val().textArea;
  html +="</p>";
  html +="<div class='card-footer usf bg-primary'>"
  html += "<h3 id='user' class='ml-auto' >";
  html += 'By - '+ snapshot.val().userName;
  html += "</h3>"
  html += "</div>"
  html += "</li>";
  document.getElementById("content").innerHTML += html; 


})


function logout() {
  firebase.auth().signOut().then(() => {
    document.getElementById('lin').style.display = "block"
    document.getElementById('lout').style.display = "none"
   // document.getElementById('h4').style.display = "none"
   document.getElementById('or').style.display = "block"
   document.getElementById('post').style.display ="none"
   document.getElementById('ud').style.display = "none"
   alert("Loging out")
 }).catch((error) => {
  alert(error.message)
});
}





function chg() {
  window.location.replace("login.html")
}
function sws() {
  window.location.replace("index.html")
}

