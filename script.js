document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('answer').textContent = "¡Yay! ¡Estoy muy feliz! 💖";
    document.getElementById('answer').style.color = '#4caf50';
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('answer').textContent = "¡Lo siento! 😢 Pero siempre seremos amigos. 💕";
    document.getElementById('answer').style.color = '#f44336';
});
