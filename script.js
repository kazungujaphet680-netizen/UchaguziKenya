// County Search

const countySearch = document.getElementById("countySearch");
const countyCards = document.querySelectorAll(".county-card");

countySearch.addEventListener("input", function () {

    const searchText = countySearch.value.toLowerCase();

    countyCards.forEach(function (card) {

        const countyName = card.textContent.toLowerCase();

        if (countyName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// County Click Function

countyCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const selectedCounty = card.textContent.trim();

        window.location.href = "county.html?county=" + encodeURIComponent(selectedCounty);

    });

});