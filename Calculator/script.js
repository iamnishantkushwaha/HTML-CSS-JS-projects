const button1 = document.querySelectorAll(".calbutton ");
const button2 = document.querySelectorAll(".calbutton2 ");
let input = document.querySelector("#input-field input");

button1.forEach((button) => {
  if (
    button.textContent == 1 ||
    button.textContent == 2 ||
    button.textContent == 3 ||
    button.textContent == 4 ||
    button.textContent == 5 ||
    button.textContent == 6 ||
    button.textContent == 7 ||
    button.textContent == 8 ||
    button.textContent == 9
  ) {
    button.style.backgroundColor = "#1f2937";
  } else {
    // console.log(button.textContent);
    button.style.backgroundColor = "#374151";
  }
  button.addEventListener("click", function () {
    if (
      button.textContent == 1 ||
      button.textContent == 2 ||
      button.textContent == 3 ||
      button.textContent == 4 ||
      button.textContent == 5 ||
      button.textContent == 6 ||
      button.textContent == 7 ||
      button.textContent == 8 ||
      button.textContent == 9 ||
      button.textContent == 0 ||
      button.textContent == "." ||
      button.textContent == "x" ||
      button.textContent == "-" ||
      button.textContent == "+" ||
      button.textContent == "/"
    ) {
      input.value += button.textContent;
    }
  });
  button.addEventListener("click", () => {
    if (button.textContent == "AC") {
      input.value = "";
    }
  });
});
button2.forEach((button) => {
  if (button.textContent == 0 || button.textContent == ".") {
    button.style.backgroundColor = "#1f2937";
  } else {
    button.style.backgroundColor = "#374151";
  }
  button.addEventListener("click", function () {
    if (
      button.textContent == 1 ||
      button.textContent == 2 ||
      button.textContent == 3 ||
      button.textContent == 4 ||
      button.textContent == 5 ||
      button.textContent == 6 ||
      button.textContent == 7 ||
      button.textContent == 8 ||
      button.textContent == 9 ||
      button.textContent == 0 ||
      button.textContent == "." ||
      button.textContent == "x" ||
      button.textContent == "-" ||
      button.textContent == "+" ||
      button.textContent == "/"
    ) {
      input.value += button.textContent;
    }
  });
});
