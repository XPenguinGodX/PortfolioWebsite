window.onload = function () {
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quoteData = data[0];
            const quote = quoteData.q;
            const author = quoteData.a;

            const quoteElement = document.getElementById('quote');

            quoteElement.textContent = `"${quote}" - ${author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            const quoteElement = document.getElementById('quote');
            quoteElement.textContent = "Failed to load quote. Please try again later.";

        });
};