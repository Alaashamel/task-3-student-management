/**
 * Task 3 - Student Management System
 * A simple system to manage student records using HTML + JavaScript
 * 
 * Features:
 * - Add Student
 * - Show Students
 * - Search Student by Name or Grade
 * - Delete Student
 */

// ============================================
// Global Variable (Scope Task)
// ============================================
var globalMessage = "Student Management System";

// ============================================
// Self-Invoking Function - System Start
// ============================================
(function () {
    console.log("Student System Started");
})();

// ============================================
// Student Array to store all students
// ============================================
var students = [];

// ============================================
// Function Declaration - Add Student
// ============================================
function addStudent(name, age, grade) {
    if (!name || name.trim() === "") {
        alert("Please enter a valid name!");
        return;
    }
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age!");
        return;
    }
    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Please enter a valid grade (0-100)!");
        return;
    }

    var student = {
        name: name.trim(),
        age: parseInt(age),
        grade: parseFloat(grade)
    };
    students.push(student);
    alert("Student added successfully!");
}

// ============================================
// Function Declaration - Clear Inputs
// ============================================
function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentGrade").value = "";
}

// ============================================
// Function Declaration - Get Student Count
// ============================================
function getStudentCount() {
    return students.length;
}

// ============================================
// Function Expression - Show Students
// ============================================
var showStudents = function () {
    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    var output = "";
    for (var i = 0; i < students.length; i++) {
        output += "Name : " + students[i].name + "\n";
        output += "Age : " + students[i].age + "\n";
        output += "Grade : " + students[i].grade + "\n";
        output += "--------------------\n";
    }
    console.log(output);
    document.getElementById("output").textContent = output;
};

// ============================================
// Function Declaration - Search Student
// ============================================
function searchStudent() {
    var choice = prompt("Search by:\n1- Name\n2- Grade\nEnter your choice (1 or 2):");

    var output = "";

    switch (choice) {
        case "1":
            var searchName = prompt("Enter student name:");
            var found = false;
            for (var i = 0; i < students.length; i++) {
                if (students[i].name.toLowerCase() === searchName.toLowerCase()) {
                    output = "Name : " + students[i].name + "\nAge : " + students[i].age + "\nGrade : " + students[i].grade;
                    found = true;
                    break;
                }
            }
            if (!found) {
                output = "Student Not Found";
            }
            break;

        case "2":
            var searchGrade = parseFloat(prompt("Enter student grade:"));
            var found = false;
            for (var i = 0; i < students.length; i++) {
                if (students[i].grade === searchGrade) {
                    output += "Name : " + students[i].name + "\nAge : " + students[i].age + "\nGrade : " + students[i].grade + "\n--------------------\n";
                    found = true;
                }
            }
            if (!found) {
                output = "Student Not Found";
            }
            break;

        default:
            output = "Invalid choice!";
    }

    console.log(output);
    document.getElementById("output").textContent = output;
}

// ============================================
// Function Expression - Delete Student
// ============================================
var deleteStudent = function () {
    var deleteName = prompt("Enter student name to delete:");
    var found = false;

    for (var i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === deleteName.toLowerCase()) {
            students.splice(i, 1);
            alert("Student deleted successfully!");
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Student Not Found");
    }
};

// ============================================
// Scope Demo - Global vs Local
// ============================================
function scopeDemo() {
    var localVar = "I am a local variable";
    console.log("Global Variable: " + globalMessage);
    console.log("Local Variable: " + localVar);
    document.getElementById("output").textContent = 
        "Global Variable: " + globalMessage + "\nLocal Variable: " + localVar;
}

// ============================================
// Loops Demo
// ============================================
function loopsDemo() {
    var output = "";

    // For loop - Print all students
    output += "FOR LOOP - All Students:\n";
    for (var i = 0; i < students.length; i++) {
        output += students[i].name + "\n";
    }

    // While loop - Print numbers 1 to 5
    output += "\nWHILE LOOP - Numbers 1 to 5:\n";
    var i = 1;
    while (i <= 5) {
        output += i + "\n";
        i++;
    }

    // Do...while loop - Print numbers 5 to 1
    output += "\nDO...WHILE LOOP - Numbers 5 to 1:\n";
    var j = 5;
    do {
        output += j + "\n";
        j--;
    } while (j >= 1);

    console.log(output);
    document.getElementById("output").textContent = output;
}

// ============================================
// Event Listeners
// ============================================
document.getElementById("addStudentBtn").addEventListener("click", function () {
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("studentAge").value;
    var grade = document.getElementById("studentGrade").value;

    if (name && age && grade) {
        addStudent(name, parseInt(age), parseFloat(grade));
        document.getElementById("studentName").value = "";
        document.getElementById("studentAge").value = "";
        document.getElementById("studentGrade").value = "";
    } else {
        alert("Please fill all fields!");
    }
});

document.getElementById("showStudentsBtn").addEventListener("click", function () {
    showStudents();
});

document.getElementById("searchStudentBtn").addEventListener("click", function () {
    searchStudent();
});

document.getElementById("deleteStudentBtn").addEventListener("click", function () {
    deleteStudent();
});

// ============================================
// Browser Objects Demo
// ============================================
console.log("Page loaded successfully!");
document.write("<script>console.log('Document Write executed')</script>");
