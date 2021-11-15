import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAowbCWsOVnRbOmxIwgNZiwpiUV2Z5vIck",
  authDomain: "school-attendance-app-3cd7a.firebaseapp.com",
  databaseURL: "https://school-attendance-app-3cd7a-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-3cd7a",
  storageBucket: "school-attendance-app-3cd7a.appspot.com",
  messagingSenderId: "148771839199",
  appId: "1:148771839199:web:51db32c1fed58f42e9dd6a",
  measurementId: "G-F2D0MYQVL0"
};
//intialize firebase

firebase.initializeApp(firebaseConfig);

export default firebase.database();
