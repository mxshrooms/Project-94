function login() {
    user = document.getElementById("userinput").value;
    localStorage.setItem("Username: ",user);
    window.location = "mainpage.html";
}