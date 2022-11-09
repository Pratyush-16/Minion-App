var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

//console.log(outputDiv)
//outputDiv.innerText = "praty";

function clickHandler() {
    
    outputDiv.innerText= "hbjbjr " + txtInput.value;
};


btnTranslate.addEventListener("click", clickHandler)




