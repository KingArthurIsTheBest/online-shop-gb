const iPhone = document.querySelector(".iPhone")
const samsung = document.querySelector(".samsung")

iPhone.addEventListener("click", function (event) {
    let clickTarget = event.target;
    let activeButton = iPhone.querySelector("active");
    let priceItem = iPhone.querySelector("price");
    let curentPrise;
    let activeButtonColor = iPhone.querySelector(".active-border")

    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")) {
        clickTarget.classList.add("active-border")
        activeButtonColor.classList.remove("active-border")
    }
})

