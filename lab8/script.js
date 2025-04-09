let wrongCount = 0;

window.onload = function () {
    let container = document.getElementById("container");
    container.innerText = getRandomChars(1, 2);
    container.focus();
};

document.getElementById("container").addEventListener("keydown", function (e) {
    e.preventDefault(); // 阻止直接輸入
});

window.addEventListener("keyup", function (e) {
    let container = document.getElementById("container");
    let currentText = container.innerText;

    if (currentText.length > 0 && currentText[0] === e.key) {
        container.innerText = currentText.substring(1);
        wrongCount = 0;
    } else {
        wrongCount++;
    }

    add_new_chars();

    if (wrongCount >= 3) {
        container.innerText += getRandomChars(6, 6);
        wrongCount = 0;
    }
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