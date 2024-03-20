

const textarea = document.getElementById("myTextarea");

function savedToLocalStorage() {
    localStorage.setItem("text", textarea.value);
}

if (localStorage.getItem("text")) {
    textarea.value = localStorage.getItem("text");
}

textarea.addEventListener("input", savedToLocalStorage);