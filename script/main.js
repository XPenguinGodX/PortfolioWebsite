window.onload = function () {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quoteData = data[0];
            const quoteText = quoteData.q;
            const quoteAuthor = quoteData.a;

            const quoteContainer = document.getElementById("quote");
            quoteContainer.innerHTML = `"${quoteText}"<br>— ${quoteAuthor}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            const quoteContainer = document.getElementById("quote");
            quoteContainer.innerHTML = "Failed to load quote. Please try again later.";
        });

};


const slideImg = document.getElementById("slideImage");
const slidePaths = [
    "images/crystalPenguin.png",
    "images/LuffyPenguins.png",
    "images/floppyPenguins.png",
    "images/bubblePenguin.png",
    "images/SaintPenguin.png",
    "images/robotPenguin.png",
    "images/pixPenguin.png",
    "images/justPenguin.png"
];

let slideIndex = 0;
const slideDelay = 4000;     // 4 seconds

function changeSlide() {
    // advance index and wrap around
    slideIndex = (slideIndex + 1) % slidePaths.length;
    slideImg.src = slidePaths[slideIndex];
}

// kick off the slideshow after the page is fully loaded
window.addEventListener("load", () => {
    setInterval(changeSlide, slideDelay);
})
const themeSheet = document.getElementById("themeStylesheet");

const cycleBtn = document.getElementById("backgroundChange");

// Add your theme CSS files here
const themes = [
    "css/secondStyle.css",
    "css/styles.css",
    "css/theme-penguin.css",
    "css/theme-nasa.css",
    "css/theme-medieval.css",
    "css/theme-neon.css"
];

let currentIndex = 0;

cycleBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % themes.length;
    themeSheet.href = themes[currentIndex];
});

document.getElementById("backgroundChange").addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        createPenguin();
    }
});

function createPenguin() {
    const penguin = document.createElement("div");
    penguin.classList.add("penguin");
    penguin.textContent = "🐧";

    // random horizontal starting position
    const x = Math.random() * window.innerWidth;
    // random slight size variations
    penguin.style.fontSize = (20 + Math.random() * 10) + "px";
    penguin.style.left = x + "px";

    document.body.appendChild(penguin);

    // remove after animation
    setTimeout(() => {
        penguin.remove();
    }, 1500);
};

document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById('bg-music');
    var btn = document.getElementById('music-btn');

    // 1. Check if there is a saved time in the browser memory
    var savedTime = localStorage.getItem('musicTime');

    // 2. If saved time exists, skip to that second
    if (savedTime) {
        music.currentTime = savedTime;
    }

    // 3. Try to auto-play (Browsers might block this until click)
    var playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            btn.innerText = "Pause Music 🐧";
        }).catch(error => {
            // Auto-play was blocked. Show "Play" button.
            btn.innerText = "Play Music 🐧";
        });
    }

    // 4. Save the current timestamp every second
    setInterval(function () {
        if (!music.paused) {
            localStorage.setItem('musicTime', music.currentTime);
        }
    }, 1000);

    // 5. Make the button work
    btn.addEventListener('click', function () {
        if (music.paused) {
            music.play();
            btn.innerText = "Pause Music 🐧";
        } else {
            music.pause();
            btn.innerText = "Play Music 🐧";
        }
    });
});