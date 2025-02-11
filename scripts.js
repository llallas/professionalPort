document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const content = document.getElementById("content");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((html) => {
          content.innerHTML = html;
        })
        .catch((error) => {
          content.innerHTML = `<p>Sorry, an error occurred: ${error.message}</p>`;
        });
    });
  });

  console.log("Dynamic content loading is ready!");
});
