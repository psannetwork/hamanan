// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ipGBH-Ztm5TkJEo26LFKa50-DlUVAcU",
  authDomain: "ip-add-106b4.firebaseapp.com",
  projectId: "ip-add-106b4",
  storageBucket: "ip-add-106b4.appspot.com",
  messagingSenderId: "834401557442",
  appId: "1:834401557442:web:f43e5d329173e961d7945b",
  measurementId: "G-WT2P5CV9T4"
};
firebase.initializeApp(firebaseConfig);

// データの保存
var database = firebase.database();
var dataRef = database.ref('data');

var newData = {
  name: "John",
  age: 25,
  location: "Tokyo"
};

dataRef.push(newData)
  .then(function() {
    console.log("Data saved successfully.");
  })
  .catch(function(error) {
    console.error("Error saving data:", error);
  });

// データの取得
dataRef.once('value')
  .then(function(snapshot) {
    var data = snapshot.val();
    console.log("Data:", data);
  })
  .catch(function(error) {
    console.error("Error retrieving data:", error);
  });
