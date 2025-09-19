function getButton(id) { 
    const button = document.getElementById(id);
    if (!button) {
        console.error("Button with id " + id + " not found!");
    }
    return button;
}

getButton("mail").onclick = function() {
    window.location.href = "mailto:spruit51@gmail.com"
}
getButton("github").onclick = function() {
    window.location.href ="https://github.com/Jortoo";
}
getButton("discord").onclick = function() {
    navigator.clipboard.writeText("Jortoo");
    alert("Discord tag copied to clipboard!");
}
getButton("home").onclick = function() {
    window.location.href = "index.html";
}

