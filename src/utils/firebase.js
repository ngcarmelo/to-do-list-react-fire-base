import firebase from "firebase/app";

/*const firebaseConfig = {
  apiKey: "AIzaSyC93cELICRTukR-wZ1jEk5MU28VPRfdOlo",
  authDomain: "todo-dev-1f55a.firebaseapp.com",
  databaseURL: "https://todo-dev-1f55a.firebaseio.com",
  projectId: "todo-dev-1f55a",
  storageBucket: "todo-dev-1f55a.appspot.com",
  messagingSenderId: "92947681348",
  appId: "1:92947681348:web:dffbf834ae4450aac06c11",
};*/

const firebaseConfig = {
  apiKey: "AIzaSyAc5kFpRIbX-tGXhBCUSGSIk7GosZBhfZg",
  authDomain: "todo-22a29.firebaseapp.com",
  databaseURL: "https://todo-22a29.firebaseio.com",
  projectId: "todo-22a29",
  storageBucket: "todo-22a29.appspot.com",
  messagingSenderId: "564319515336",
  appId: "1:564319515336:web:dd9b004fae3462ed1febfd",
};

export default firebase.initializeApp(firebaseConfig);
