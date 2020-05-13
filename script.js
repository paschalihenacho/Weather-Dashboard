// SETUP VARIABLES
// ================================================================
    var apiKey = "c9871eecb074811b7872bedc2fda20f7";
    var city = ''
    var queryURLBase = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=" + apiKey;
    // `https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${apiKey} &q=${city}`;

// Functions
// ================================================================
function runQuery(oneDay) {
    $.ajax({
        url: oneDay,
        method: "GET",
    }).then(function(weatherData) { 
        $('#cityButtons').empty();
        console.log(weatherData);
        console.log(oneDay);
    })
}    

//    function renderCityBtn() {
//         $('#cityButtons').empty();

//         for (var i = 0; i < cities; i++) {
//             var a = $('<button>');

//             a.addClass('city-btn');

//             a.attr('data-name', city[i]);

//             a.text(cities[i]);

//             $('#cityButtons').prepand(a)
//         }
//     }

// MAIN PROCESS
// ================================================================

    $('#search').on('click', function (event) {
        event.preventDefault();

        city = $('#input').val().trim();

        var newURL = queryURLBase + "&q=" + city;

        var allCities = [];
        
        allCities = JSON.parse(localStorage.getItem("allCities")) || []; // Get cities
        allCities.push(cityInput); // pushes new cities entered to array 
        localStorage.setItem("allCities", JSON.stringify(allCities)); //saves city input to local storage 

        // Add in the Search Term

        runQuery(newURL);
    });

    // activity 7

    