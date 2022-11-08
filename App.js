var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");

console.log(txtInput)

btnTranslate.addEventListener("click",() => {
        console.log("clicked");
        console.log("input", txtInput.value)
    })
