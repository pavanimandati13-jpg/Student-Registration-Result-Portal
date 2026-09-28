// Get the form
const studentForm = document.getElementById("studentForm");

// Add submit event
studentForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get student details
    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    // Get marks
    const maths = Number(document.getElementById("maths").value);
    const computer = Number(document.getElementById("computer").value);
    const dataScience = Number(document.getElementById("dataScience").value);
    const english = Number(document.getElementById("english").value);

    // Error message element
    const errorMessage = document.getElementById("errorMessage");

    // Hide old error
    errorMessage.classList.add("d-none");
    errorMessage.innerHTML = "";

    // ================= VALIDATION =================

    if (name === "") {
        showError("Please enter the student name.");
        return;
    }

    if (roll === "") {
        showError("Please enter the roll number.");
        return;
    }

    if (email === "") {
        showError("Please enter the email.");
        return;
    }

    if (course === "") {
        showError("Please select a course.");
        return;
    }

    if (
        maths < 0 || maths > 100 ||
        computer < 0 || computer > 100 ||
        dataScience < 0 || dataScience > 100 ||
        english < 0 || english > 100
    ) {
        showError("Marks must be between 0 and 100.");
        return;
    }

    // Check if marks are entered
    const markInputs = [
        document.getElementById("maths").value,
        document.getElementById("computer").value,
        document.getElementById("dataScience").value,
        document.getElementById("english").value
    ];

    if (markInputs.some(mark => mark === "")) {
        showError("Please enter marks for all subjects.");
        return;
    }

    // ================= CALCULATION =================

    const total = maths + computer + dataScience + english;

    const percentage = total / 4;

    // ================= PASS / FAIL =================
    // Passing mark for each subject = 40

    let status;

    if (
        maths >= 40 &&
        computer >= 40 &&
        dataScience >= 40 &&
        english >= 40
    ) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    // ================= DISPLAY DETAILS =================

    document.getElementById("displayName").textContent = name;

    document.getElementById("displayRoll").textContent = roll;

    document.getElementById("displayEmail").textContent = email;

    document.getElementById("displayCourse").textContent = course;

    document.getElementById("displayMaths").textContent = maths;

    document.getElementById("displayComputer").textContent = computer;

    document.getElementById("displayDataScience").textContent = dataScience;

    document.getElementById("displayEnglish").textContent = english;

    document.getElementById("displayTotal").textContent =
        total + " / 400";

    document.getElementById("displayPercentage").textContent =
        percentage.toFixed(2) + "%";

    const statusElement = document.getElementById("displayStatus");

    statusElement.textContent = status;

    // Change status appearance
    if (status === "PASS") {

        statusElement.className = "text-success fw-bold";

    } else {

        statusElement.className = "text-danger fw-bold";

    }

    // Show result table
    document
        .getElementById("resultTable")
        .classList.remove("d-none");

    // Change message
    document.getElementById("resultMessage").innerHTML =
        "<div class='alert alert-success'>" +
        "Result calculated successfully!" +
        "</div>";

    // Scroll to result
    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= ERROR FUNCTION =================

function showError(message) {

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.innerHTML = message;

    errorMessage.classList.remove("d-none");

    window.scrollTo({
        top: document.getElementById("registration").offsetTop,
        behavior: "smooth"
    });
}