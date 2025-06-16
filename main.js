document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("book-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Könyv hozzáadva!");
  });
});