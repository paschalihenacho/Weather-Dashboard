//#region
var apiKey = "c9871eecb074811b7872bedc2fda20f7";
//#endregion
// $(document).ready(function() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=houston&units=imperial&appid=" + apiKey;
   // var city = "Houston"


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        $('#test').html('<div>' + JSON.stringify(response));
        console.log(response);
    })
