const track = document.querySelector(".track");

if (track) {
    const cards = document.querySelectorAll(".card");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");

    let index = 0;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    btnRight?.addEventListener("click", () => {
        if (index < cards.length - 1) {
            index++;
            update();
        }
    });

    btnLeft?.addEventListener("click", () => {
        if (index > 0) {
            index--;
            update();
        }
    });
}

// INIT EMAILJS
(function() {
    emailjs.init("OCzdOle4xRIx15Hxs");
})();

// BOUTONS RESERVER
const buttons = document.querySelectorAll(".cta");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const card = btn.closest(".card");

        const title = card.querySelector("h2").innerText;
        const desc = card.querySelector("p").innerText;

        // Demande infos utilisateur
        const email = prompt("Entrez votre email :");
        if (!email) return;

        const phone = prompt("Entrez votre numéro :");
        if (!phone) return;

        // Nettoie le numéro (enlève espaces, tirets, etc.)
        const cleanPhone = phone.replace(/\D/g, "");

        // Vérifie 10 chiffres
        if (cleanPhone.length !== 10) {
            alert("Numéro invalide ❌ (10 chiffres requis)");
            return;
        }

        // Envoi EmailJS
        emailjs.send("service_fezq7i6", "template_iadf515", {
            property_name: title,
            property_desc: desc,
            user_email: email,
            user_phone: phone
        })
        .then(() => {
            alert("Demande envoyée ✅ Nous vous contactons dès que possible !");
        })
        .catch((error) => {
            console.error(error);
            alert("Erreur lors de l'envoi ❌");
        });

    });
});