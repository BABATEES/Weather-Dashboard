//This variable declared is to store the searched city
var city = "";
// variable declared for each key parameter IDs
var searchinput = $("#search-input");
var searchButton = $("#search-button");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var sCity = [];

// searches the city  in the entries from the storage
function find(c) {
    for (var i = 0; i < sCity.length; i++) {
        if (c() === sCity[i]) {
            return -1;
        }
    }
    return 1;
}
//Declare variable for the API key
var APIKey = "db51e3b23080eaf8ee12a93a875873cd";

//function to display current weather
function displayWeather(event) {
    event.preventDefault();
    if (searchinput.val().trim() !== "") {
        city = searchinput.val().trim();
        currentWeather(city);
    }
}

