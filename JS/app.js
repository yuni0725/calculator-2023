const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiple = document.querySelector("#multiple");
const divide = document.querySelector("#divide");
const del = document.querySelector("#del");
const equals = document.querySelector("#value");
const clear = document.querySelector("#clear");



one.addEventListener("click", number)
two.addEventListener("click", number)
three.addEventListener("click", number)
four.addEventListener("click", number)
five.addEventListener("click", number)
six.addEventListener("click", number)
seven.addEventListener("click", number)
eight.addEventListener("click", number)
nine.addEventListener("click", number)
zero.addEventListener("click", number)
del.addEventListener("click", deletes)
plus.addEventListener("click", sign);
minus.addEventListener("click", sign);
multiple.addEventListener("click", sign);
divide.addEventListener("click", sign);
equals.addEventListener("click", equal);
clear.addEventListener("click", refresh);

const currentValue = document.querySelector(".output span");

function number(detail) {
    let num = detail.target.innerText;
    currentValue.innerText = (parseInt(currentValue.innerText) * 10 + parseInt(num)) 
}

function deletes() {
    currentValue.innerText = Math.floor((parseInt(currentValue.innerText) / 10))
}

function equal() {
    secondValue = parseInt(currentValue.innerText);
    
    console.log(firstValue, secondValue);

    if (signs === "+"){
        currentValue.innerText = firstValue + secondValue
    }
    if (signs === "-"){
        currentValue.innerText = firstValue - secondValue
    }
    if (signs === "*"){
        currentValue.innerText = firstValue * secondValue
    }
    if (signs === "÷"){
        currentValue.innerText = firstValue / secondValue
    }

}

function sign(detail) {
    firstValue = parseInt(currentValue.innerText);
    currentValue.innerText = "0"
    signs = detail.target.innerText
}

function refresh() {
    window.location.reload()
}


