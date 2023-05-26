let customButtonEl = document.getElementById("customButton");
let applyButtonEl = document.getElementById("applyButton")

let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");

function applyButton(){
    let bgColorInputValue = bgColorInputEl.value;
    let fontColorInputValue = fontColorInputEl.value;
    let fontSizeInputValue = fontSizeInputEl.value;
    let fontWeightInputValue = fontWeightInputEl.value;
    let paddingInputValue = paddingInputEl.value;
    let borderRadiusInputValue = borderRadiusInputEl.value;


    customButtonEl.style.backgroundColor = bgColorInputValue;
    customButtonEl.style.color = fontColorInputValue;
    customButtonEl.style.fontSize = fontSizeInputValue;
    customButtonEl.style.fontWeight = fontWeightInputValue;
    customButtonEl.style.padding = paddingInputValue;
    customButtonEl.style.borderRadius = borderRadiusInputValue;
}
