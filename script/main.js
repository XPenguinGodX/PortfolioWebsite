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
    });