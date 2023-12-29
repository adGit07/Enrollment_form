# Student Enrollment System using JsonPowerDB

## Description

This project implements a Student Enrollment System using JsonPowerDB, a NoSQL database. The system allows users to store and manage student information, providing functionalities such as data entry, updating, and resetting.

## Benefits of using JsonPowerDB

- **High Performance:** JsonPowerDB offers high-performance read and write operations.
- **Schema-free:** Being a NoSQL database, JsonPowerDB is schema-free, allowing flexibility in data representation.
- **Simple and Easy to Use:** JsonPowerDB simplifies database operations with its easy-to-use API.

## Release History

- v1.0.0 (DD-MM-YYYY)
  - Initial release with basic functionalities.

## Table of Contents

1. [Description](#description)
2. [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
3. [Release History](#release-history)
4. [Table of Contents](#table-of-contents)
5. [Illustrations](#illustrations)
6. [Scope of Functionalities](#scope-of-functionalities)
7. [Examples of Use](#examples-of-use)
8. [Project Status](#project-status)
9. [Sources](#sources)
10. [Other Information](#other-information)

## Illustrations:
-**work successfully**




## Scope of Functionalities

- **Data Entry:** Users can enter new student information.
- **Data Update:** Existing student records can be updated.
- **Data Reset:** Reset the form to clear all input fields.

## Examples of Use

Provide examples or code snippets on how to use the system.

```javascript
// Example code goes here

// Initialize the library
jpdb.init();

// Placeholder for the database object
const databaseToken = "90931921|-31949300015186452|90960829";
const db = new jpdb.db(databaseToken);

document.addEventListener("DOMContentLoaded", function () {
  const rollNoInput = document.getElementById("rollNo");
  const fullNameInput = document.getElementById("fullName");
  const classInput = document.getElementById("class");
  const birthDateInput = document.getElementById("birthDate");
  const addressInput = document.getElementById("address");
  const enrollmentDateInput = document.getElementById("enrollmentDate");

  const saveBtn = document.getElementById("saveBtn");
  const updateBtn = document.getElementById("updateBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Function to enable Save and Reset buttons when any input field is changed
  function enableSaveReset() {
    saveBtn.disabled = false;
    resetBtn.disabled = false;
  }

  // Function to enable Update and Reset buttons when data is loaded for an existing record
  function enableUpdateReset() {
    updateBtn.disabled = false;
    resetBtn.disabled = false;
  }

  // Function to save data to the database
  function saveData() {
    // Validation: Check if all required fields are filled
    if (!validateForm()) {
      alert("Please fill in all fields before saving.");
      return;
    }

    // Database interaction placeholder - Replace with actual code
    saveDataToDatabase(
      rollNoInput.value,
      fullNameInput.value,
      classInput.value,
      birthDateInput.value,
      addressInput.value,
      enrollmentDateInput.value
    );

    // After saving, disable Save button and Reset button
    saveBtn.disabled = true;
    resetBtn.disabled = true;
  }

  // Function to update data in the database
  function updateData() {
    // Validation: Check if all required fields are filled
    if (!validateForm()) {
      alert("Please fill in all fields before updating.");
      return;
    }

    // Database interaction placeholder - Replace with actual code
    updateDataInDatabase(
      rollNoInput.value,
      fullNameInput.value,
      classInput.value,
      birthDateInput.value,
      addressInput.value,
      enrollmentDateInput.value
    );

    // After updating, disable Update button and Reset button
    updateBtn.disabled = true;
    resetBtn.disabled = true;
  }

  // Function to reset the form
  function resetForm() {
    // Reset input fields to empty
    rollNoInput.value = "";
    fullNameInput.value = "";
    classInput.value = "";
    birthDateInput.value = "";
    addressInput.value = "";
    enrollmentDateInput.value = "";

    // Disable Save, Update, and Reset buttons
    saveBtn.disabled = true;
    updateBtn.disabled = true;
    resetBtn.disabled = true;
  }

  // Function to validate the form (check if all required fields are filled)
  function validateForm() {
    return (
      rollNoInput.value.trim() !== "" &&
      fullNameInput.value.trim() !== "" &&
      classInput.value.trim() !== "" &&
      birthDateInput.value.trim() !== "" &&
      addressInput.value.trim() !== "" &&
      enrollmentDateInput.value.trim() !== ""
    );
  }

  // Set initial state on page load
  resetForm();

  // Set event listeners
  rollNoInput.addEventListener("input", enableSaveReset);
  fullNameInput.addEventListener("input", enableSaveReset);
  classInput.addEventListener("input", enableSaveReset);
  birthDateInput.addEventListener("input", enableSaveReset);
  addressInput.addEventListener("input", enableSaveReset);
  enrollmentDateInput.addEventListener("input", enableSaveReset);

  // Add event listeners for Save, Update, and Reset buttons
  saveBtn.addEventListener("click", saveData);
  updateBtn.addEventListener("click", updateData);
  resetBtn.addEventListener("click", resetForm);
});

// Placeholder functions for database interactions
function saveDataToDatabase(rollNo, fullName, studentClass, birthDate, address, enrollmentDate) {
  // Create a new record in the "STUDENT-TABLE" table
  db.create("STUDENT-TABLE", {
    RollNo: rollNo,
    FullName: fullName,
    Class: studentClass,
    BirthDate: birthDate,
    Address: address,
    EnrollmentDate: enrollmentDate,
  });

  // You may want to handle success or error callbacks here
}

function updateDataInDatabase(rollNo, fullName, studentClass, birthDate, address, enrollmentDate) {
  // Update the record in the "STUDENT-TABLE" table based on RollNo
  db.update("STUDENT-TABLE", { RollNo: rollNo }, {
    FullName: fullName,
    Class: studentClass,
    BirthDate: birthDate,
    Address: address,
    EnrollmentDate: enrollmentDate,
  });

  // You may want to handle success or error callbacks here
}

