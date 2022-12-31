const day = prompt("Please select a day: ").toLowerCase(); //! girilenleri kucuk harfe cevir
switch (day) {
  case "monday":
  case "thuesday":
  case "wednesday":
  case "thursday":
    console.log("Inclass");
    break;
  case "friday":
    console.log("Teamwork");
    break;
  case "saturday":
    console.log("Inclass and workshop");
    break;
  case "sunday":
    console.log("Self study.");
    break;
  default:
    console.log("Incorrect day");
}
