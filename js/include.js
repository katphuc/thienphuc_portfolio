function includeHTML(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading file:", error));
}

// Gọi hàm chèn header
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("include/header.html", "header-placeholder");
});
