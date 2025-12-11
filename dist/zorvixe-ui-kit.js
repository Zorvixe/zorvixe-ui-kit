// Zorvixe UI Kit - Universal Section System
// Version: 1.5
// Author: Zorvixe Technologies

document.addEventListener("DOMContentLoaded", function () {
    const allSections = document.querySelectorAll("[data-section]");

    // 1. Hide all sections
    allSections.forEach(sec => sec.style.display = "none");

    // 2. Show the default section
    const defaultSection = document.querySelector("[data-section][data-default]");
    if (defaultSection) {
        defaultSection.style.display = "block";
    } else if (allSections.length > 0) {
        // If no default is given, show first section
        allSections[0].style.display = "block";
    }
});

// Function to show one section and hide others
function display(sectionId) {
    if (!sectionId.startsWith("section-")) {
        console.error("Section ID must start with 'section-':", sectionId);
        return;
    }

    const allSections = document.querySelectorAll("[data-section]");
    allSections.forEach(sec => sec.style.display = "none");

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = "block";
    } else {
        console.error("No section found with ID:", sectionId);
    }
}
