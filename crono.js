let sim1 = document.getElementById("sim01");
let sim2 = document.getElementById("sim02");
let av = document.getElementById("av");
let avs = document.getElementById("avs");
let sm1 = "17 Jan 2022";
let sm2 = "24 Feb 2022";
let av1 = "08 Mar 2022";
let avs1 = "27 Mar 2022";


function countdown() {
    let firstAval = new Date(sm1);
    let secondtAval = new Date(sm2);
    let Aval = new Date(av1);
    let AvalS = new Date(avs1);
    let currentDate = new Date();

    let totalSeconds = (firstAval - currentDate) / 1000;
    let totalSeconds2 = (secondtAval - currentDate) / 1000;
    let totalSeconds3 = (Aval - currentDate) / 1000;
    let totalSeconds4 = (AvalS - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let days2 = Math.floor(totalSeconds2 / 3600 / 24);
    let days3 = Math.floor(totalSeconds3 / 3600 / 24);
    let days4 = Math.floor(totalSeconds4 / 3600 / 24);

    sim1.innerHTML = days;
    sim2.innerHTML = days2;
    av.innerHTML = days3;
    avs.innerHTML = days4;

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
setInterval(console.log(new Date().getMilliseconds()), 1000)
console.log((new Date(sm1) - new Date() / 1000) / 3600 / 24)