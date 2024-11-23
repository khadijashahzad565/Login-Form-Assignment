localStorage.setItem("username", "Techwaresoft");
 localStorage.setItem("password", "12345");

 
 function login () {
     var user_name = document.getElementById("username").value;
     var user_password = document.getElementById("password").value;

    
     var getUsername = localStorage.getItem("username");
     var getPassword = localStorage.getItem("password");


     if (user_name === getUsername && user_password === getPassword) {
         alert("Login successful!");
         
         window.location.href = "newpage.html";
     } else {
         alert("Invalid username or password.");
     }
 }