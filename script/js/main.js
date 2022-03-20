var request = require('request');

function getHKO(){
    request("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc", function (
        err,
        resp,
        body) {
        if (!err && resp.statusCode == 200) {
            var data = JSON.parse(body);
            var rainfall = data.rainfall.data[4].max + "mm";
            var temp = data.temperature.data[25].value + "°C";
            var humid = data.humidity.data[0].value + "%";
            var icon = `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${data.icon[0]}.png`

            $("#ico").css("background-image", icon);
            $("#rain").html(rainfall);
            $("#temp").html(temp);
            $("#humid").html(humid);
        }
    })
}

setInterval(getHKO, 1000);