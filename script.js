const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

console.log(icons);

setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  console.log(icon);
  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 3000);
