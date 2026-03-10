const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

// When Yes is clicked
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! I knew you'd say yes! 🥰";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5bXF6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6ZXZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/UMon06K3By9oVvYV7W/giphy.gif";
    noBtn.style.display = 'none'; // Hide the "No" button
});

// When hovering over No, it moves
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
