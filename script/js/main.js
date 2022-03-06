var zero = function (num) {
    if (num < 10) {
        return "0" + num;
    } return num;
}

var var_set_time = function(){
    var now = new Date(),
        month = now.getMonth() + 1,
        date = now.getDate(),
        day = now.getDay(),
        day_changeStr = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
        str_day = day_changeStr[day],
        hr = zero(now.getHours()),
        min = zero(now.getMinutes());
    var date = `${str_day} ${date}/${month}`,
        time = `${hr}:${min}`;
    // console.log(date + "\n" + time) // for debug
    $("#Time").text(time);
    $("#Date").text(date);
}

