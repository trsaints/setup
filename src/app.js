// SELECT DOM ELEMENTS
const
  date = document.querySelector(".date"),
  time = document.querySelector(".time"),
  greetingTime = document.querySelector(".greeting-time"),
  userName = document.querySelector("#userName"),
  focusAnswer = document.querySelector(".focus-answer");

// Set and show time
function showTime() {
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // format time (e.g. showing 08:00 PM instead of 20:00 PM)
  hours > 12 ? hours = hours % 12 : hours = today.getHours();

  // show "AM" after time if it's morning, otherwise show "PM" instead.
  function periodOfDay() {
    let normalHours = today.getHours();
    let hoursPeriod;
    if (normalHours < 12) {
      hoursPeriod = "A.M.";
    } else {
      hoursPeriod = "P.M.";
    }
    return hoursPeriod;
  }

  // output time
  time.innerHTML = `
      ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)} ${periodOfDay()}`;

  setInterval(showTime, 1000);
}

// Set and show date (weekday, day, month and year)
function showDate() {
  let today = new Date(),
    year = today.getFullYear(),
    day = today.getDate(),
    weekDay = today.toLocaleDateString("pt-br", { weekday: "short" }),
    month = today.toLocaleString("pt-br", { month: "long" });
  if (date) {
    date.innerHTML = `${String(weekDay)}, ${String(day)} de ${String(month)} de ${year}`;
  }
}

// Set background and greeting text according time period of the day

function periodBackground() {
  let dayPeriod = new Date(),
    periodHour = dayPeriod.getHours();

  if (periodHour < 12) {
    document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 100%), url("./img/morning.jpg")';
    greetingTime.innerHTML = `
      <p>Bom dia, <input type="text" id="userName" class="user-name"></input>.
      <br />
      Qual é o seu foco hoje?</p>`
  } else if (periodHour >= 12 && periodHour < 18) {
    document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 100%), url("./img/afternoon.jpg")';
    greetingTime.innerHTML = `
      <p>Boa tarde, <input type="text" id="userName" class="user-name"></input>.
      <br />
      Qual é o seu foco hoje?</p>`
  } else {
    document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 100%), url("./img/night.jpg")';
    greetingTime.innerHTML = `
      <p>Boa noite, <input type="text" id="userName" class="user-name"></input>.
      <br />
      Qual é o seu foco hoje?</p>`
  }
}
// run 
showDate();
showTime();
periodBackground();
