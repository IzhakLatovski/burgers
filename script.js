// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBLdplEdg9oilFUV-1YQhhmuKPuYu7Q2Bg",
    authDomain: "burgers-7070f.firebaseapp.com",
    projectId: "burgers-7070f",
    storageBucket: "burgers-7070f.appspot.com",
    messagingSenderId: "792397015341",
    appId: "1:792397015341:web:c1531d94cb4f7543124ba4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

document.getElementById('toppingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
                        .map(checkbox => checkbox.value);

    const order = {
        name: name,
        toppings: toppings,
        timestamp: new Date()
    };

    // Save the order to Firestore
    db.collection('orders').add(order)
        .then(() => {
            alert('Order submitted successfully!');
        })
        .catch((error) => {
            console.error('Error adding order: ', error);
            alert('Failed to submit order');
        });
});
