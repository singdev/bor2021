import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import { getAllUsers } from "./board.js";

const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

window.addEventListener("load", () => {
  document.getElementById("googleSignIn").addEventListener("click", () => {
    signInWithGoogle();
  });
  document.getElementById("fbSignIn").addEventListener("click", () => {
    singInWithFacebook();
  });
  getAllUsers();
})

function signInWithGoogle() {

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      onSignIn(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function singInWithFacebook() {
  const auth = getAuth();
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
      onSignIn(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
      
    });
}

function onSignIn(user){
  document.querySelector("main").classList.add("hidden-login");
  document.getElementById("user-displayname").innerHTML = user.displayName ? user.displayName : user.name;
  document.getElementById("user-photo").src = user.photoURL;
}