let aboutMeText = "Ik ben Jordi, 19 jaar en ik heb een passie voor alles dat met computers temaken heeft. Waaronder coderen, hardware en systeem beheer. Leuk dat je een kijkje neemt op mijn website. Deze website is nu nog in onderhoud dus kom later terug!"
let currentAboutMeText = ""
const aboutMeTextDisplay = document.getElementById("about-me")

function getButton(id) { 
    const button = document.getElementById(id);
    if (!button) {
        console.error("Button with id " + id + " not found!");
    }
    return button;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayAboutMeText() {

    for (i = 0; i < aboutMeText.length; i++) {
        currentAboutMeText += aboutMeText.charAt(i);
        aboutMeTextDisplay.textContent = currentAboutMeText;
        await wait(25);
    }

}

displayAboutMeText()

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

