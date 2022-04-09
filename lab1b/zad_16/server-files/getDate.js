function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (milliseconds < 10)
        milliseconds = "00" + milliseconds;
    else if (milliseconds < 100)
        milliseconds = "0" + milliseconds;

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

module.exports = getDate;