var lastsec;
var lastmin;
var lasthour;
var lastday;
nullcheck(lastsec);
nullcheck(lastmin);
nullcheck(lasthour);
nullcheck(lastday);
const countdown = () => {
  const date = new Date("Dec 30,2021 00:00:00").getTime();
  const current = new Date().getTime();
  const gap = date - current;
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const daycd = Math.floor(gap / day);
  const hourcd = Math.floor((gap % day) / hour);
  const mincd = Math.floor((gap % hour) / min);
  const seccd = Math.floor((gap % min) / sec);
  const secondShows = document.querySelectorAll(".second");
  const minuteShows = document.querySelectorAll(".minute");
  const dayShows = document.querySelectorAll(".day");
  const hourShows = document.querySelectorAll(".hour");
  const card = document.querySelectorAll("#card");
  if (daycd < 0) {
    secondShows.forEach((secondShow) => {
      secondShow.innerText = 0;
    });
    hourShows.forEach((hourShow) => {
      hourShow.innerText = 0;
    });
    dayShows.forEach((dayShow) => {
      dayShow.innerText = 0;
    });
    minuteShows.forEach((minuteShow) => {
      minuteShow.innerText = 0;
    });
    clearInterval(stop);
  } else {
    lastsec = main(lastsec, seccd, 3, secondShows, "0.3s", -500, 100, 200, 0);
    lastmin = main(
      lastmin,
      mincd,
      2,
      minuteShows,
      "1.5s",
      -1000,
      350,
      800,
      200
    );
    lasthour = main(
      lasthour,
      hourcd,
      1,
      hourShows,
      "1.5s",
      -1000,
      350,
      800,
      200
    );
    lastday = main(lastday, daycd, 0, dayShows, "1.5s", -1000, 350, 800, 200);
  }
};
var stop = setInterval(countdown, 1000);
function nullcheck(val) {
  if (val == null) {
    var val = 0;
  }
}
function main(
  last,
  now,
  showIndex,
  show,
  dur,
  flipForward,
  showDelayTime,
  unflipDelay,
  bottomShowDelay
) {
  if (last != now) {
    card[showIndex].style.transitionDuration = dur;
    function flip() {
      card[showIndex].classList.add("flip");
      console.log(card[showIndex]);
    }
    setTimeout(flip, flipForward);
    function showDelay() {
      show.forEach((showw, index) => {
        if (index == 1) {
          function showDelay() {
            showw.innerText = now;
          }
          setTimeout(showDelay, bottomShowDelay);
        } else {
          showw.innerText = now;
        }
      });
    }
    setTimeout(showDelay, showDelayTime);
    function removeflip() {
      card[showIndex].style.transitionDuration = "0s";
      card[showIndex].classList.remove("flip");
    }
    setTimeout(removeflip, unflipDelay);
  }
  return now;
}
