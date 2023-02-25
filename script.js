//COURTESY COMMENTS: Write your FIRST and LAST NAME here
// Author: Christopher Martinez

// ---------------------------------------------------
// A little review of strings...
// ---------------------------------------------------
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const nameForm = document.querySelector("#name-form");
const nameResult = document.querySelector("#name-result");
// You've seen these querySelector() methods -- we're using these to reach into our HTML and grab whatever element has these IDs

function processName(event) {
  event.preventDefault();
  /* 
   1. Take the inputted first and last name, and declare new variables for them (hint: the code ABOVE pulls the information for you; you will need to create new variables to manipulate that text.)
  2. Create output text that DISPLAYS:
    A. the full name
    b. how many letters are in the person's full name (hint: use variables!!!).
  3. Then replace "Hello there" with that new text.*/

  //YOUR CODE STARTS HERE!!!!!!!!!!!

  const fName = firstNameInput.value;
  const lName = lastNameInput.value;
  const fullName = fName + " " + lName;
  const fullNameLength = fullName.lenght-1;

  nameResult.innerText = (fullName);
  // ** Don't write anything past this point for this problem. **
}

nameForm.onsubmit = processName;

// ---------------------------------------------------
// I need to see some ID
// ---------------------------------------------------
const ageInput = document.querySelector("#age");
const ageOutput = document.querySelector("#age-result");

function checkId() {
  // 1. Set a variable to the age value as a number (hint -- look at your HTML to see what holds a VALUE...)
  // 2. If they answer 21 or over, tell them they are good to go with the appropriate output text. If they are under 21, tell them how many years they’ll need to wait until they’re legal (hint: you'll need some arithmetic!)
  // 3. Replace "Hello there" with the resulting text.

  // Your code starts here! -->
const age = ageInput.value;
if (choice === 'age') {
  if (age >=21)}
  para.textContent = 'You are good to go';
} else if (age <21) {
  para.textContent = 'You have a few more years buddy.';
}

  
  ageOutput.innerText = (age-result);
  // ** Don't write anything past this point for this problem. **
}

ageInput.addEventListener("change", checkId);

// ---------------------------------------------------
// Top o' the Morning to Ya
// ---------------------------------------------------
const select = document.querySelector("select");
const greeting = document.querySelector("#greeting");


function setGreeting() {
  // 1. Set a variable to the time value
  // 2. Use a switch statement to display an appropriate greeting for the time of day.

  // Your code starts here! -->

const time = select;
  
  switch (time) {
  case '8:00 AM':
  console.log('It is eight o clock in the morning.');
    break;
  case '10:00 AM':
      console.log('It is ten o clock in the morning.');
    break;  
   case '12:00 PM':
       console.log('It is twelve o clock in the afternoon');
     break;
   case '2:00 PM':
       console.log('It is two o clock in the afternoon.');
    break;
   case '4:00 PM':
       console.log('It is four o clock in the afternoon.');
    break;
   case '6:00 PM':
       console.log('It is six o clock in the evening.');
  break;
   case '8:00 PM':
       console.log('It is eight o clock in the evening.');
  break;
   case '10:00 PM':
       console.log('It is ten o clock in the evening.');
  break;
    default:
       console.log(' ');
  }
}
  greeting.innerText = "Hello there";
  // ** Don't write anything past this point for this problem. **
}
select.addEventListener("change", setGreeting);