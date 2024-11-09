let input1 = document.querySelector("#input1");
let operator = document.querySelector("#operator");
let input2 = document.querySelector("#input2");
let answer = document.querySelector(".answer");
let buttons = document.querySelectorAll(".all-buttons");
let afterEqualEffect=document.querySelectorAll(".after-equal-effect");
let firstValue = false;
let secondValue = false;
let operatorFound = false;
let buttonsAreDisabled=false
let disabledAndClear=false;

for (Classes of afterEqualEffect){
    Classes.classList.remove("after-equal-effect");
}
function calculation() {
    let ope = operator.innerText;
    switch (ope) {
        case '+':
            answer.innerText = parseFloat(input1.innerText) + parseFloat(input2.innerText);
            break;
        case '-':
            answer.innerText = parseFloat(input1.innerText) - parseFloat(input2.innerText);
            break;
        case '*':
            answer.innerText = parseFloat(input1.innerText) * parseFloat(input2.innerText);
            break;
        case '/':
            if(input2.innerText=="0"){
                answer.innerText="Error";
            }
            else{
            answer.innerText = parseFloat(input1.innerText) / parseFloat(input2.innerText);
            }
            break;
        default:
            console.log("Unsupported operator");
    }
    for (Classes of afterEqualEffect){
        Classes.classList.add("after-equal-effect");
    }
}
function disablebuttons() {
    console.log("Buttons disabled");
    for (Dbutton of buttons) {
        if (Dbutton.innerText != "Clear") { 
            Dbutton.disabled = true;
            buttonsAreDisabled=true;
            firstValue=false;
            secondValue=false;
            operatorFound=false;
         }
    }
}
function enablebuttons(){
    console.log("Buttons Enable");
    for (Ebutton of buttons) {
            Ebutton.disabled = false;
            buttonsAreDisabled=false;
        }
        for (Classes of afterEqualEffect){
            Classes.classList.remove("after-equal-effect");
        }
}
function clearScreen() {
    if (input1.innerText != "" || input2.innerText != "" || answer.innerText != "") {
        input1.innerText = "";
        operator.innerText = "";
        input2.innerText = "";
        answer.innerText = "";
    }
}
for (let button of buttons) {
    button.addEventListener("click", () => {
        if (button.innerText.match(/[0-9.]/)&&firstValue!=true) {
            input1.innerText = input1.innerText + button.innerText;
        }
        else if (button.id.match(/[+\-*/]/)&&input1.innerText!="") {
            firstValue = true;
            operatorFound = true;
            operator.innerText = button.id;
        }
        else if (button.innerText != "=" && button.innerText != "Clear" && button.id != "back-delete") {
            if (operator.innerText !="") {
                if (button.innerText.match(/[0-9.]/)) {
                    input2.innerText = input2.innerText + button.innerText;
                    secondValue = true;
                }
            }
        }
        else if (button.innerText == "=" && firstValue == true && secondValue == true && firstValue!="") {
            disablebuttons();
            calculation();
        }
        else if (button.innerText == "Clear") {
            clearScreen();
            if(buttonsAreDisabled==true){
                enablebuttons();
            }
            firstValue=false;
            secondValue=false;
            operatorFound=false;
        }
        else if (button.id == "back-delete") {
            if (input1.innerText != "" || input2.innerText != "" || operator.innerText != "") {
                if (operator.innerText == "") {
                    let delText = input1.innerText;
                    delText = delText.slice(0, -1);
                    input1.innerText = delText;
                }
                else if (operator.innerText != "" && input2.innerText == "") {
                    operator.innerText = "";
                }
                else if (input1.innerText != "" && operator.innerText != "") {
                    let delText = input2.innerText;
                    delText = delText.slice(0, -1);
                    input2.innerText = delText;
                }
            }
        }
    })
}