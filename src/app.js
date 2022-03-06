// SELECT DOM ELEMENTS
const 
  date = document.querySelector(".date"),
  time = document.querySelector(".time"),
  greetingTime = document.querySelector(".greeting-time"),
  userName = document.getElementById("userName"),
  focusAnswer = document.querySelector(".focus-answer");

// Set and show time
function showTime() {
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // format time (e.g. showing 08:00 PM instead of 20:00 PM)
  hours > 12 ? hours = hours % 12 : hours = today.getHours();

  // output time
  time.innerHTML = `
      ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;

  setInterval(showTime, 1000);
}

// Set and show date (weekday, day, month and year)
function showDate() {
  let today = new Date(),
    year = today.getFullYear(),
    day = today.getDate(),
    weekDay = today.toLocaleDateString("default", { weekday: "long" }),
    month = today.toLocaleString("default", { month: "long" });
  if (date) {
    date.innerHTML = `${String(weekDay)}, ${String(day)} de ${String(month)} de ${year}`;
  }
}

// Set userName input to fit its content's width (according user name's character size)
userName.addEventListener('input', resizeInput);
resizeInput.call(userName);

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

// Set background and greeting text according time period of the day

function periodBackground() {
  let dayPeriod = new Date(),
    periodHour = dayPeriod.getHours();

  if (periodHour < 12) {
    document.body.style.backgroundImage = 'url("./img/morning.jpg")';
    greetingTime.innerHTML = `
      Bom dia, ${userName}.
      <br />
      Qual é o seu foco hoje?`
  } else if (periodHour > 12 || periodHour < 18) {
    document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
    greetingTime.innerHTML = `
      Boa tarde, ${userName}.
      <br />
      Qual é o seu foco hoje?`
  } else {
    document.body.style.backgroundImage = 'url("./img/night.jpg")';
    greetingTime.innerHTML = `
      Boa noite, ${userName}.
      <br />
      Qual é o seu foco hoje?`
  }
}
// run 
showDate();
showTime();
periodBackground();