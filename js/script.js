const serverIP = "EndoriaNetwork.aternos.me";

const copyButton = document.getElementById("copy-ip");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

/* IP KOPYALA */

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(serverIP);

            const oldText = copyButton.textContent;
            copyButton.textContent = "IP KOPYALANDI!";

            setTimeout(() => {
                copyButton.textContent = oldText;
            }, 2000);

        } catch {
            alert("Sunucu IP'si: " + serverIP);
        }
    });
}

/* MOBİL MENÜ */

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
