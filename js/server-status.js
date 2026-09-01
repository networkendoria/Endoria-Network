document.addEventListener("DOMContentLoaded", async () => {
    const pingElement = document.getElementById("visitorPing");

    if (!pingElement) return;

    const start = performance.now();

    try {
        await fetch(window.location.href, {
            method: "HEAD",
            cache: "no-store"
        });

        const ping = Math.round(performance.now() - start);

        pingElement.textContent = `${ping} ms`;
    } catch (error) {
        pingElement.textContent = "Ölçülemedi";
    }
});
