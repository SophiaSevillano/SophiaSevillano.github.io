document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const rightContainer = document.querySelector(".right");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const dayClass = button.id; 

            const existingBox = document.querySelector(".box");
            if (existingBox) {
                existingBox.style.top = "-95vh"; // up

                //remove
                setTimeout(() => {
                    existingBox.remove();
                }, 1000);
            }

            const newBox = document.createElement("div");
            newBox.classList.add("box", getDayClass(dayClass)); 

            rightContainer.appendChild(newBox);

            setTimeout(() => {
                newBox.style.top = "20%";

                //fade
                setTimeout(() => {
                    newBox.classList.add("active");
                }, 500);
            }, 50);
        });
    });


    function getDayClass(buttonId) {
        const dayMap = {
            mon: "monday",
            tues: "tuesday",
            wed: "wednesday",
            thurs: "thursday",
            fri: "friday",
            sat: "saturday",
            sun: "sunday"
        };
        return dayMap[buttonId] || "";
    }
});
