document.getElementById("getFactBtn").addEventListener("click", fetchCatFact);

function fetchCatFact() {
  fetch("https://meowfacts.herokuapp.com/")
    .then(response => response.json())
    .then(data => {
      const fact = data.data[0];
      document.getElementById("factText").innerText = fact;
    })
    .catch(error => {
      console.error("Error fetching cat fact:", error);
      document.getElementById("factText").innerText = "Couldn't fetch a fact right now. Try again!";
    });
}
