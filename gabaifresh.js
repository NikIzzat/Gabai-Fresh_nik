function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function redirectToGoogleForm() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf4wxvmRwSROvm7QQ4zBhAPXPQSXL3NTUhWEjpZAySXuRcmYQ/viewform?usp=header';
}