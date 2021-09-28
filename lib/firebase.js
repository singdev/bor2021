    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBjXTJH_mDWYreH74_DtbQspam_krv-Jcw",
      authDomain: "board-octobre-rose.firebaseapp.com",
      projectId: "board-octobre-rose",
      storageBucket: "board-octobre-rose.appspot.com",
      messagingSenderId: "58856605707",
      appId: "1:58856605707:web:1c1ca1b5eb1bcdd3c4df0e",
      measurementId: "G-FRMVGHFELB"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);