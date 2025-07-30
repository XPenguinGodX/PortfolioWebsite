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