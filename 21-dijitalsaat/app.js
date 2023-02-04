const result = document.querySelectorAll("p");
console.log(result);
// result.forEach((item) => console.log(item));
Array.from(result).forEach((item) => console.log(item));

const getTime = () => {
  let date = new Date();
  //   console.log(date);
  let hour = date.getHours();
  //   console.log(hour);
  let minute = date.getMinutes();
  //   console.log(minute);
  let sec = date.getSeconds();
  //   console.log(sec);
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  sec = sec < 10 ? "0" + sec : sec;

  result[0].innerText = hour;
  result[1].innerText = minute;
  result[2].innerText = sec;
};

setInterval(() => {
  getTime();
}, 1000);
