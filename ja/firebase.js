const firebaseConfig = {
  apiKey: "AIzaSyBTGRBvq-QUQcSsuFDadxJQeyB5E0_UME",
  authDomain: "klcrs-a7054.firebaseapp.com",
  projectId: "klcrs-a7054",
  storageBucket: "klcrs-a7054.appspot.com",   // corrected & valid
  messagingSenderId: "972485288867",
  appId: "1:972485288867:web:8616aba476cf4d997fb016"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
window.firestore = firebase.firestore();
