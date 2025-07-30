
window.onload = function () {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            const quoteText = data.content;
            const quoteAuthor = data.author;

            const quoteElement = document.getElementById("quote");
            quoteElement.textContent = `"${quoteText}"— ${quoteAuthor}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            const quoteElement = document.getElementById("quote");
            quoteElement.textContent = "Failed to load quote. Please try again later.";
        });
};