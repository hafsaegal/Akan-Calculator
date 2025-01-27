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

//Taking user input (birthday & Gender) 

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const genderInput = document.querySelector('input[name="gender"]:checked');

  

 // validate the input to ensure its correct
 function validateDate(day,month,year){
  if(day <=0 || day >31){
    return "Invalid date. Please enter a valid day (1-31)"
  }
  if (month <=0 || month >12){
    return "invalid date.Please enter a valid month(1-12)"
  }

 }
  

