// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.13/firebase-auth.js';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDmj_n7D0zz7EnU9NKI0hgCzvJKz5Zn52o",
    authDomain: "login-form-21eca.firebaseapp.com",
    projectId: "login-form-21eca",
    storageBucket: "login-form-21eca.appspot.com",
    messagingSenderId: "455090715100",
    appId: "1:455090715100:web:fe82276a4f908501fef719"
  };
  import { getAuth } from "firebase/auth";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const getAuth = getAuth (app)

  function showMessage(message,divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacit=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },50000)
  }
  const signUp = document.getElementById('submitSignUp');
  signUp.addEventListener('click' , (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const  auth=authgetAuth();
    const dh=getfirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email:email,
            firstName:firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "user", user.uid);
        setDoc(docRef,userData)
        .then (()=>{
            window.location.href='index.html';    
        })
        .catch((error)=>{
            console.error("error writing document",error);
        });
    })
  .catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
        showMessage('Email Address already Exists!!!' , 'signUpMessage');
    }
    else{
        showMessage('unable to create User','signUpMessage');
    }
  })
  })