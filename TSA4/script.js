document.addEventListener("DOMContentLoaded", function () {
    const restaurantCards = document.querySelectorAll(".restaurant");
    const popups = document.querySelectorAll(".pop-up");
    const mainMenuButton = document.getElementById("menu");
    const body = document.body;

    // Function to show the correct pop-up
    restaurantCards.forEach(card => {
        card.addEventListener("click", function () {
            const restaurantId = this.getAttribute("data-id"); // Get restaurant ID
            const popup = document.getElementById(`popup-${restaurantId}`); // Find matching pop-up

            if (popup) {
                // Hide all pop-ups first
                popups.forEach(p => {
                    p.style.display = "none"; // Hide all first
                    p.classList.remove("active");
                    p.classList.add("hide");
                });

                // Show the correct pop-up
                popup.style.display = "flex"; // Make it visible
                setTimeout(() => popup.classList.add("active"), 10); // Add fade-in effect

                // Disable scrolling
                body.style.overflow = "hidden";
            } else {
                console.error(`Popup not found for: ${restaurantId}`);
            }
        });
    });

    // Close all pop-ups when Main Menu is clicked
    mainMenuButton.addEventListener("click", function () {
        popups.forEach(p => {
            p.classList.remove("active");
            p.classList.add("hide");
            setTimeout(() => {
                p.style.display = "none";
            }, 400);
        });

        // Enable scrolling again
        body.style.overflow = "auto";
    });
});
