document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".details-button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);

            if (!target) return;

            const isOpen = target.classList.contains("open");

            // Açık olan diğer kartları kapat
            document.querySelectorAll(".shop-details.open").forEach(details => {
                details.classList.remove("open");

                const otherButton = document.querySelector(
                    `[data-target="${details.id}"]`
                );

                if (otherButton) {
                    otherButton.classList.remove("active");
                    otherButton.querySelector("span").textContent = "+";
                }
            });

            // Seçilen kartı aç/kapat
            if (!isOpen) {
                target.classList.add("open");
                button.classList.add("active");
                button.querySelector("span").textContent = "−";
            }

        });

    });

});
