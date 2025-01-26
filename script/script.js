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
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to calculate the day of the week
function calculateDayOfWeek(day, month, year) {
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  const dayOfWeek =
    (Math.floor(CC / 4) -
      2 * CC +
      YY +
      Math.floor(YY / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day) %
    7;
  return (dayOfWeek + 7) % 7; // Ensure the result is always positive
}

// Function to validate the input date
function validateDate(day, month, year) {
  if (day <= 0 || day > 31) {
    return "Invalid date.Please enter a valid day (1-31).";
  }
  if (month <= 0 || month > 12) {
    return "Ivalid month.Please enter a valid month (1-12).";
  }
  if (year < 1900 || year > 2025) {
    return "Invalid year.Please enter a valid year (1900-2025).";
  }
}

// Main function to calculate the Akan name
function calculateAkanName(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Validate date input
  const validationMessage = validateDate(day, month, year);
  if (validationMessage) {
    document.getElementById("result").textContent = validationMessage;
    return;
  }

  // Ensure gender is selected
  if (!genderInput) {
    document.getElementById("result").textContent =
      "Please select your gender.";
    return;
  }

  const gender = genderInput.value;

  // Calculate the day of the week
  const dayOfWeek = calculateDayOfWeek(day, month, year);

  // Get Akan name based on gender and day of the week
  const akanName =
    gender.toLowerCase() === "male"
      ? maleNames[dayOfWeek]
      : femaleNames[dayOfWeek];

  // Display results
  document.getElementById(
    "result"
  ).textContent = `Your Akan name is ${akanName}.`;
}

// Attach event listener to the form
document
  .querySelector(".akan-form")
  .addEventListener("submit", calculateAkanName);
