var firebaseConfig = {
    apiKey: "AIzaSyAIvNMS9GcYVdFFCLH_Td8kydwd2NmyDBI",
    authDomain: "letschatwebapp2.firebaseapp.com",
    databaseURL: "https://letschatwebapp2-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp2",
    storageBucket: "letschatwebapp2.appspot.com",
    messagingSenderId: "1099244880178",
    appId: "1:1099244880178:web:958638d35328189c5a572b",
    measurementId: "G-FH3ZXYVW5Z"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!!!";

function logout()
{
    localStorage.removeItem("user_name");                
    localStorage.removeItem("room_name");
    window.location= "index.html";
}

function addRoom()
{
    room_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("user_name", room_name);
    window.location= "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}

