// Create the Github1s button
var btn = document.createElement("a");
btn.innerHTML = "View on Github1s";
btn.classList = "btn ml-2 d-none d-md-block";
btn.href = window.location.href.replace("https://github.com/", "https://github1s.com/");
buttonNav = document.getElementsByClassName("file-navigation mb-3 d-flex flex-items-start");

if (buttonNav[0] != null) {
    buttonNav[0].appendChild(btn);
}