const firebaseConfig = {
  apiKey: "AIzaSyBTGRBvq-QQUcSsufDadxJQVeyB5E0_UME",
  authDomain: "klcrs-a7054.firebaseapp.com",
  projectId: "klcrs-a7054",
  storageBucket: "klcrs-a7054.appspot.com",
  messagingSenderId: "972485288867",
  appId: "1:972485288867:web:8616aba476cfd4997fb016"
};

// Initialize Firebase (compat)
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
window.firestore = firebase.firestore();
