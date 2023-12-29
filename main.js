/* global jpdb */

// Initalize the library
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
