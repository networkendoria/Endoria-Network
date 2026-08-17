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
