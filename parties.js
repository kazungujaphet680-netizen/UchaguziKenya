// Political Party Search

const partySearch = document.getElementById("partySearch");

const partyCards = document.querySelectorAll(".party-card");

partySearch.addEventListener("input", function () {

    const searchText = partySearch.value.toLowerCase();

    partyCards.forEach(function (card) {

        const partyName = card.textContent.toLowerCase();

        if (partyName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});