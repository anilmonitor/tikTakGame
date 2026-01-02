const btn = document.querySelectorAll(".box");

let arr = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  //insert O,X on btn clicked
  if (i == 0) {
    for (let b = 0; b < btn.length; b++) {
      btn[b].addEventListener("click", () => {
        console.log("btn", [b + 1], "clicked");
        btn[b].innerText = arr[i];
        i++;
      });
    }
  }
}
