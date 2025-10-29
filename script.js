const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  heads.style.display = "none";
  tails.style.display = "none";

  if (result === "Heads") {
    document.getElementById("coinChoice").innerHTML = "Heads";
    heads.style.display = "block";
  } else {
    document.getElementById("coinChoice").innerHTML = "Tails";
    tails.style.display = "block";
  }
});
