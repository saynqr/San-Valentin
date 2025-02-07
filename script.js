document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡Lo sabia, te amo! ❤️";
    document.getElementById("answer").style.color = "green";
    document.getElementById("answer").style.animation = "fadeIn 2s ease-in-out";
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "¡aaaaaaaaaaaaah, va, ahi se ve el amor, va, ya no me hables! 😡";
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.animation = "fadeIn 2s ease-in-out";
});
