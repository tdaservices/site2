// CAROUSEL



// EMAILJS
(function() {
    emailjs.init("OCzdOle4xRIx15Hxs");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_ui78i77",
            "template_bh4ee1a",
            this
        )
        .then(() => {
            status.innerText = "Message envoyé ✅";
            form.reset();
        })
        .catch((error) => {
            status.innerText = "Erreur ❌";
            console.error(error);
        });
    });
}

