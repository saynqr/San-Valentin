document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡Qué alegría! ❤️";
    document.getElementById("answer").style.color = "green";
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡Lo intentaré otro año! 😅";
    document.getElementById("answer").style.color = "red";
});
