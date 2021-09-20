const Btn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

function textLoading(){
  outputDiv.style.display = 'none';

}

Btn.addEventListener("click", textLoading)