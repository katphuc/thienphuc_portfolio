document.addEventListener("DOMContentLoaded", function () {
  fetch("../include/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      const footer = document.createElement("footer");
      footer.innerHTML = data;
      document.body.appendChild(footer);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
