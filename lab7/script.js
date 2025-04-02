window.onload = function () {
    let container = document.getElementById("container");
    container.innerText = getRandomChars(1, 2);
    container.focus();
};

window.addEventListener("keyup", function (e) {
    console.log(e.key);
    let container = document.getElementById("container");

    if (container.innerText.length > 0 && container.innerText[0] === e.key) {
        container.innerText = container.innerText.substring(1);
    }
        add_new_chars();
});

function add_new_chars() {
    let container = document.getElementById("container");
    container.innerText += getRandomChars(1, 3);
}

function getRandomChars(min, max) {
    let length = Math.floor(Math.random() * (max - min + 1)) + min;
    let chars = "";
    for (let i = 0; i < length; i++) {
        chars += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return chars;
}