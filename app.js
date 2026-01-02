const btn = document.querySelectorAll(".box");
const clickAudio = document.querySelector("#clickAudio");
const winAudio = document.querySelector("#winAudio");

let arr = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  //insert O,X on btn clicked
  if (i == 0) {
    for (let b = 0; b < btn.length; b++) {
      btn[b].addEventListener("click", () => {
        clickAudio.play(); //play click audio on click
        console.log("btn", [b + 1], "clicked");
        btn[b].innerText = arr[i];

        btn[i].addEventListener("click", () => {
          //   matched condition 1st row
          if (
            btn[0].innerText === "O" ||
            (btn[0].innerText === "X" && btn[1].innerText === "O") ||
            (btn[1].innerText === "X" && btn[2].innerText === "O") ||
            btn[2].innerText === "X"
          ) {
            console.log("WON");

            winAudio.play();
          }
        });

        //if btn is clicked then disable it
        if (!(btn[b].innerText == "")) {
          btn[b].disabled = "true";
          //   console.log(btn[b].innerText);
          b++;
        }
        i++;
      });
    }
  }
}
