  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBN29efBBtesQIxHXpY6BvbWNVeJzvsJgs",
    authDomain: "nlpchatbot-acb97.firebaseapp.com",
    projectId: "nlpchatbot-acb97",
    storageBucket: "nlpchatbot-acb97.appspot.com",
    messagingSenderId: "625443836700",
    appId: "1:625443836700:web:1a91082be870f3d75320d9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const form = document.getElementById("myForm");
  const signupForm = document.getElementById("signup");
  
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
  
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.localStorage.setItem("myUser", JSON.stringify(user));
        window.sessionStorage.setItem("myUser", JSON.stringify(user));
         window.location.href = "home.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Email/Password, Please try again");
      });
  
   
  });
}



if (signupForm) {
  signupForm.addEventListener("submit", function(event){
    event.preventDefault();
    const signupemail = document.getElementById("signupemail").value;
    const signuppassword = document.getElementById("signuppassword").value;
    const confirmpassword=document.getElementById("confirmpassword").value;
    const address = document.getElementById("address").value;
    const phone =document.getElementById("phone").value;
   
   
        createUserWithEmailAndPassword(auth, signupemail, signuppassword)
.then((userCredential) => {
  // Signed up 
  var user = userCredential.user;
  // saveUserDetails(user.uid, signupemail, signuppassword, address,phone )
  window.location.href = "index.html";
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});
    
    
    

} )

}

let myUser=window.localStorage.getItem("myUser")
if (myUser) { 
  const loginMessage = document.getElementById("login");
  
  loginMessage.innerHTML = `<a href="" id="signOut"> Sign Out </a>  `; 
 
}
else{
  const iframeElement = document.getElementById("dfmessenger");
  iframeElement.style.display="none";
  
}

const signOutLink = document.getElementById("signOut");

signOutLink.addEventListener("click", (event)=>{
  event.preventDefault();
  localStorage.clear();
  sessionStorage.clear();
  window.location.href="index.html"
});





