const countdownTo = new Date('2020-12-25 00:00:00');

console.log(countdownTo / 1);

const daysCard = document.querySelector('.days .card');
const daysTop = document.querySelector('.days .card .top .number');
const daysBottom = document.querySelector('.days .card.bottom');

const daysNum = daysCard.querySelector('.number');

console.log(daysTop);

daysTop.style.height = daysTop.offsetHeight / 2 + 'px';
daysBottom.style.height = daysBottom.offsetHeight / 2 + 'px';


const hoursCard = document.querySelector('.hours .card');
const hoursNum = hoursCard.querySelector('.number');

const minutesCard = document.querySelector('.minutes .card');
const minutesNum = minutesCard.querySelector('.number');

const secondsCard = document.querySelector('.seconds .card');
const secondsNum = secondsCard.querySelector('.number');


function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / 86400);
    let remainingSeconds = seconds % 86400;
    const hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = seconds % 60;

    daysNum.textContent = addZero(days);
    hoursNum.textContent = addZero(hours);
    minutesNum.textContent = addZero(minutes);
    if (secondsNum.textContent !== addZero(remainingSeconds)){
        secondsCard.classList.add('closing');
        setTimeout(() => {
            secondsCard.classList.remove('closing');
            setTimeout(() => {
                secondsNum.textContent = addZero(remainingSeconds);
            }, 100)
        }, 250);
    }
}

function addZero(num) {
    return num < 10 ? '0' + num : num;
}


setInterval(() => {
const now = Date.now();
const countdown = Math.round((countdownTo - now) / 1000);

displayTimeLeft(countdown);
}, 1000);
