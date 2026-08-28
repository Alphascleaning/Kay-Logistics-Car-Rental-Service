const firebaseConfig = {
  apiKey: "AIzaSyBTGRBvq-QUQcSsufDadxJQveyB5E0_UME",
  authDomain: "klcrs-a7054.firebaseapp.com",
  projectId: "klcrs-a7054",
  storageBucket: "klcrs-a7054.firebasestorage.app",
  messagingSenderId: "972485288867",
  appId: "1:972485288867:web:8616aba476cfd4997fb016"
};

firebase.initializeApp(firebaseConfig);
window.firestore = firebase.firestore();
