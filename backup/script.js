const slogans = [
    "Hikâyenizi Birlikte Yazıyoruz.",
    "Senin Dünyan, Senin Hikâyen."
];

let sloganIndex = 0;
const sloganElement = document.getElementById("slogan");

if (sloganElement) {
    setInterval(() => {
        sloganElement.classList.add("fade");

        setTimeout(() => {
            sloganIndex = (sloganIndex + 1) % slogans.length;
            sloganElement.textContent = slogans[sloganIndex];
            sloganElement.classList.remove("fade");
        }, 450);

    }, 15000);
}


/* MOBİL MENÜ */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
}


/* ÜYELİK DETAYLARI */

const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);

        if (!target) return;

        const isOpen = target.classList.contains("open");

        document.querySelectorAll(".membership-details").forEach(detail => {
            detail.classList.remove("open");
        });

        document.querySelectorAll(".details-button").forEach(btn => {
            btn.textContent = "Detayları Gör";
        });

        if (!isOpen) {
            target.classList.add("open");
            button.textContent = "Detayları Gizle";
        }

    });

});
