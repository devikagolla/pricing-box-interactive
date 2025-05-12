const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    // Unhide only this box's body, hide others
    boxes.forEach(b => {
      const body = b.querySelector(".box-body");
      const radio = b.querySelector("input[type='radio']");
      if (b === box) {
        body.classList.remove("hidden");
        radio.checked = true;
      } else {
        body.classList.add("hidden");
      }
    });
  });
});
