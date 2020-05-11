// $(document).ready(function() {
    var apiKey = "c9871eecb074811b7872bedc2fda20f7";
    var city = ''
    var unit = [];
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        $('#test').html('<div>' + (response.name));
        console.log(response);
    })
