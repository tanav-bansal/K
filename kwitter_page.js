//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBcDE007kq5nuda4ZReW-vS5Utog8r-Sgs",
      authDomain: "kwitter-app-5714f.firebaseapp.com",
      databaseURL: "https://kwitter-app-5714f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-5714f",
      storageBucket: "kwitter-app-5714f.appspot.com",
      messagingSenderId: "899277298770",
      appId: "1:899277298770:web:6c58ce4e72c5ffd4e3538b"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name")

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html";

}