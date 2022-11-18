var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

//console.log(outputDiv)
//outputDiv.innerText = "praty";
 //var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    var serverURL = "https://api.funtranslations.com/translate/minion.json";

 function getTranslationURL(text){
    return serverURL + "?" + "text=" + text ;
        }

 function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with the server: try again after some time")
        }


function clickHandler() {
    
    //outputDiv.innerText= "hbjbjr " + txtInput.value;
    var inputText = txtInput.value; //taking input

    //calling server for processing 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText= translatedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)