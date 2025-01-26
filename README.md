# Project Name
Akan Name Calculator

## Project Description
This is a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. 

### Author 
Hafsa Egal

#### Setup instructions
url link

#### BDD
## Behavior-Driven Development (BDD)

### User Stories
- **As a user**, I want to see a brief description of the application so that I understand what it does.
- **As a user**, I want to input my birthday and gender so that I can find out my Akan name.
- **As a user**, I want to receive feedback if I enter an invalid date or fail to select my gender.
- **As a user**, I want to see my Akan name displayed based on the day of the week I was born and my gender.

### Scenarios
1. **Valid Input**
   - **Given** I have entered a valid date of birth and selected my gender
   - **When** I click the "Submit" button
   - **Then** I should see a message displaying my Akan name.

2. **Invalid Date**
   - **Given** I have entered an invalid date (e.g., `32/13/2023`)
   - **When** I click the "Submit" button
   - **Then** I should see an error message asking me to enter a valid date.

3. **No Gender Selected**
   - **Given** I have entered a valid date but not selected my gender
   - **When** I click the "Submit" button
   - **Then** I should see an error message prompting me to select a gender.

4. **Empty Input**
   - **Given** I have not entered any data
   - **When** I click the "Submit" button
   - **Then** I should see an error message asking me to fill in the required fields.

### Technologies used
HTML, CSS, Javascript




