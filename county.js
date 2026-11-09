// KENYA COUNTY CODES

const counties = {
    "Mombasa": "001",
    "Kwale": "002",
    "Kilifi": "003",
    "Tana River": "004",
    "Lamu": "005",
    "Taita Taveta": "006",
    "Garissa": "007",
    "Wajir": "008",
    "Mandera": "009",
    "Marsabit": "010",
    "Isiolo": "011",
    "Meru": "012",
    "Tharaka Nithi": "013",
    "Embu": "014",
    "Kitui": "015",
    "Machakos": "016",
    "Makueni": "017",
    "Nyandarua": "018",
    "Nyeri": "019",
    "Kirinyaga": "020",
    "Murang'a": "021",
    "Kiambu": "022",
    "Turkana": "023",
    "West Pokot": "024",
    "Samburu": "025",
    "Trans Nzoia": "026",
    "Uasin Gishu": "027",
    "Elgeyo Marakwet": "028",
    "Nandi": "029",
    "Baringo": "030",
    "Laikipia": "031",
    "Nakuru": "032",
    "Narok": "033",
    "Kajiado": "034",
    "Kericho": "035",
    "Bomet": "036",
    "Kakamega": "037",
    "Vihiga": "038",
    "Bungoma": "039",
    "Busia": "040",
    "Siaya": "041",
    "Kisumu": "042",
    "Homa Bay": "043",
    "Migori": "044",
    "Kisii": "045",
    "Nyamira": "046",
    "Nairobi": "047"
};


// GET COUNTY FROM URL

const params = new URLSearchParams(window.location.search);

const county = params.get("county");


// GET HTML ELEMENTS

const countyName = document.getElementById("countyName");
const countyNumber = document.getElementById("countyNumber");
const countyMessage = document.getElementById("countyMessage");


// DISPLAY COUNTY

if (county && counties[county]) {

    countyName.textContent = county + " " + counties[county];

    countyNumber.textContent = "County Code: " + counties[county];

    countyMessage.textContent =
        "Explore electoral information for " + county + " County.";

} else {

    countyName.textContent = "County Not Selected";

    countyNumber.textContent = "County Code: Not available";

    countyMessage.textContent =
        "Please return to the homepage and select a county.";

}