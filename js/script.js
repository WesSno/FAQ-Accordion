const detailElements = document.querySelectorAll("details");

detailElements.forEach((details) => {
  details.addEventListener("toggle", () => {
    const img = details.querySelector(".plus-img img");

    if (details.open) {
      img.src = "/assets/images/icon-minus.svg";
    } else {
      img.src = "/assets/images/icon-plus.svg";
    }
  });
});
