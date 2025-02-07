document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡Sabia que dirias que si! ❤️";
    document.getElementById("answer").style.color = "green";
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡aaaaaaaaaah, va, ahí se ve que no me amas! 😅";
    document.getElementById("answer").style.color = "red";
});
