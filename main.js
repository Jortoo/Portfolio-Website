let aboutMeText = "My name is Jordi, I am 19 years old and my passion lays at everything related to computers. Stuff like coding, hardware and networking is where my main focus is. Thanks for looking at my website, as of now it is in maintenance, so come back soon when it is fully finished!"
let currentAboutMeText = ""
const aboutMeTextDisplay = document.getElementById("about-me")

function safeButton(id, callback) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", callback);
    } else {
        console.warn(`Button with id "${id}" not found on this page.`);
    }
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

safeButton("back", () => { window.location.href = "index.html"; });
safeButton("home", () => { window.location.href = "index.html"; });
safeButton("contact", () => { window.location.href = "contact.html"; });
safeButton("mail", () => { window.location.href = "mailto:jortoo@gmail.com"; });
safeButton("github", () => { window.location.href = "https://github.com/Jortoo"; });
safeButton("discord", () => {
    navigator.clipboard.writeText("Jortoo");
    alert("Discord tag copied to clipboard!");
});

getButton("home").onclick = function() { window.location.href = "index.html"; }

