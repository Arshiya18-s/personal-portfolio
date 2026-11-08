const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you, " + name + "! Your message is ready.";

    form.reset();

});