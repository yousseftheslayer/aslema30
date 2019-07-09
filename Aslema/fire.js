 var firebaseConfig = {
    apiKey: "AIzaSyCn96KC_v3qhUrWU3fOw_U-PcaMa45Lp24",
    authDomain: "guifiyfyfuy.firebaseapp.com",
    databaseURL: "https://guifiyfyfuy.firebaseio.com",
    projectId: "guifiyfyfuy",
    storageBucket: "",
    messagingSenderId: "119468546877",
    appId: "1:119468546877:web:f4b5169731e8ae01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('myDatabase');

  function submitForm(e){
      e.preventDefault();
      // Get values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      
      saveMessage(name,email,phone); //Sending data to our database

      console.log(name)
      console.log(email)
      console.log(phone)
  }
  document.getElementById('contactForm').addEventListener('submit', submitForm);
// Save message to firebase
function saveMessage(name,email,phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        
    });
}