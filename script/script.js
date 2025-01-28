//addEventListener can carry to arguments

document.getElementById("akan-form").addEventListener("submit", function (e) {
  e.preventDefault(); // this will prevent web reloading

  // Akan name arrays
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  //Taking user input (birthday & Gender)
  //

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // validate the input to ensure its correct
  function validateDate(day, month, year) {
    if (day <= 0 || day > 31) {
      return "Invalid date. Please enter a valid day (1-31)";
    }
    if (month <= 0 || month > 12) {
      return "invalid date.Please enter a valid month(1-12)";
    }
  }

  //calculate the day of the week the user was born

  function calculateDayOfWeek(day, month, year) {
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const dayOfWeek =
      Math.floor(
        CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day
      ) % 7;

    return dayOfWeek;
  }

  // Get index (ensure positive number)
  const dayOfWeek = ((calculateDayOfWeek(day, month, year) % 7) + 7) % 7;

  //Get the Akan name based on the day of the week and the gender
  const akanName =
    gender === "Male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  console.log(gender);
  // // let akanName = ''
  // if (gender === "male") {
  //   // akanName = maleNames[dayOfWeek]
  //   console.log(maleNames[dayOfWeek]);
  // } else if (gender === "female") {
  //   console.log(femaleNames[dayOfWeek]);
  // }

  // Display result
  document.getElementById(
    "result"
  ).textContent = `Your Akan name is ${akanName}`;
  //showResult(`Your Akan name is (akanName)`, "success");
});
