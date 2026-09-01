document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("copyIpButton");
    const ipText = document.getElementById("ipText");

    if (!button || !ipText) return;

    const ip = "EndoriaNetwork.aternos.me";
    const originalText = ip;

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(ip);

            ipText.textContent = "Kopyalandı!";
            button.classList.add("copied");

            setTimeout(() => {
                ipText.textContent = originalText;
                button.classList.remove("copied");
            }, 1800);

        } catch (error) {
            ipText.textContent = "Kopyalanamadı";

            setTimeout(() => {
                ipText.textContent = originalText;
            }, 1800);
        }
    });
});
