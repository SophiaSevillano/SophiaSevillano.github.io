function showPopup(menuId) {
    //hide all
    document.querySelectorAll(".pop-up").forEach(div => {
        div.classList.remove("active");
        div.style.display = "none";
    });

    // show assigned pop-up
    const popup = document.getElementById(`popup-${menuId}`);
    if (popup) {
        popup.style.display = "flex"; //showww
        setTimeout(() => popup.classList.add("active"), 10); //add
    }
}

function closePopups() {
    document.querySelectorAll(".pop-up").forEach(div => {
        div.classList.remove("active");
        setTimeout(() => (div.style.display = "none"), 400); // hide
    });
}
